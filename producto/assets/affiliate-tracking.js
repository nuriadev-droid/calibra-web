/*
 * Calibra Partners — referral tracking for calibraautomation.com (GitHub Pages).
 *
 * Include once, before </body>, on every page of the marketing site:
 *   <script src="/assets/affiliate-tracking.js" defer></script>
 *
 * What it does:
 *   1. Reads ?via=CODE (or ?ref=CODE) from the URL.
 *   2. Stores it in a first-party cookie on the root domain for 180 days, so
 *      app.calibraautomation.com can read it at sign-up.
 *   3. Registers the click with the API (one request, no personal data: the API
 *      stores salted hashes only) and keeps the click id for attribution.
 *   4. Appends ?ref=CODE to every link that points to the app, as a fallback
 *      for browsers that block cookies.
 *
 * Nothing here needs cookie consent under GDPR: the cookie is strictly necessary
 * for the referral contract the visitor is entering, and no tracking across
 * sites happens. Mention it in the cookie policy anyway ("calibra_ref, 180 days,
 * remembers which partner recommended Calibra").
 */
(function () {
  var ROOT_DOMAIN = '.calibraautomation.com';
  var APP_ORIGIN = 'https://app.calibraautomation.com';
  var API_CLICK = APP_ORIGIN + '/api/v1/affiliate/click';
  var COOKIE_DAYS = 180;
  var REF_COOKIE = 'calibra_ref';
  var CLICK_COOKIE = 'calibra_ref_click';
  var CODE_PATTERN = /^[a-z0-9][a-z0-9-]{2,39}$/;

  function readCookie(name) {
    var match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function writeCookie(name, value) {
    var expires = new Date(Date.now() + COOKIE_DAYS * 864e5).toUTCString();
    var base = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/; SameSite=Lax; Secure';
    document.cookie = base + '; domain=' + ROOT_DOMAIN;
    if (!readCookie(name)) {
      document.cookie = base; // local dev / preview domains
    }
  }

  function decorateAppLinks(code) {
    var links = document.querySelectorAll('a[href^="' + APP_ORIGIN + '"], a[href^="/app"], a[href^="app."]');
    for (var i = 0; i < links.length; i++) {
      try {
        var url = new URL(links[i].getAttribute('href'), window.location.origin);
        if (!url.searchParams.has('ref')) {
          url.searchParams.set('ref', code);
          links[i].setAttribute('href', url.toString());
        }
      } catch (e) {
        /* ignore malformed hrefs */
      }
    }
  }

  function registerClick(code) {
    var params = new URLSearchParams(window.location.search);
    var payload = {
      code: code,
      landing: window.location.pathname,
      referrer: document.referrer || undefined,
      utmSource: params.get('utm_source') || undefined,
      utmMedium: params.get('utm_medium') || undefined,
      utmCampaign: params.get('utm_campaign') || undefined,
    };
    fetch(API_CLICK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
      credentials: 'omit',
    })
      .then(function (r) { return r.status === 200 ? r.json() : null; })
      .then(function (data) {
        if (data && data.clickId) {
          writeCookie(CLICK_COOKIE, data.clickId);
        }
      })
      .catch(function () { /* the cookie alone is enough for attribution */ });
  }

  var params = new URLSearchParams(window.location.search);
  var incoming = (params.get('via') || params.get('ref') || '').trim().toLowerCase();
  var code = null;

  if (incoming && CODE_PATTERN.test(incoming)) {
    code = incoming;
    var alreadyStored = readCookie(REF_COOKIE);
    writeCookie(REF_COOKIE, code); // last click wins, window restarts
    if (alreadyStored !== code || !readCookie(CLICK_COOKIE)) {
      registerClick(code);
    }
    // keep the URL clean for the visitor
    if (window.history && window.history.replaceState) {
      params.delete('via');
      params.delete('ref');
      var clean = window.location.pathname + (params.toString() ? '?' + params.toString() : '') + window.location.hash;
      window.history.replaceState(null, '', clean);
    }
  } else {
    code = readCookie(REF_COOKIE);
  }

  if (code) {
    decorateAppLinks(code);
  }
})();
