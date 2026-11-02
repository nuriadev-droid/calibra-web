(function () {
  'use strict';
  var apps = document.getElementById('apps');
  if (apps) {
    var cards = [].slice.call(apps.children);
    var q = document.getElementById('q');
    var count = document.getElementById('count');
    var empty = document.getElementById('empty');
    var chips = [].slice.call(document.querySelectorAll('[data-cat]'));
    var cat = '';
    var fmt = new Intl.NumberFormat('en-US');
    var apply = function () {
      var term = (q.value || '').trim().toLowerCase();
      var shown = 0;
      cards.forEach(function (c) {
        var ok = (!term || c.dataset.name.indexOf(term) !== -1) && (!cat || c.dataset.cats.split('|').indexOf(cat) !== -1);
        c.hidden = !ok;
        if (ok) shown++;
      });
      count.textContent = fmt.format(shown) + (shown === 1 ? ' app' : ' apps');
      empty.hidden = shown !== 0;
    };
    var pick = function (value) {
      cat = value;
      chips.forEach(function (c) { c.classList.toggle('on', c.dataset.cat === value); });
      apply();
    };
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        pick(c.dataset.cat);
        try { history.replaceState(null, '', c.dataset.cat ? '#' + encodeURIComponent(c.dataset.cat) : location.pathname); } catch (e) {}
      });
    });
    q.addEventListener('input', apply);
    var fromHash = decodeURIComponent((location.hash || '').slice(1));
    pick(chips.some(function (c) { return c.dataset.cat === fromHash; }) ? fromHash : '');
  }
  var tpls = document.getElementById('tpls');
  if (tpls) {
    var tcards = [].slice.call(tpls.children);
    var schips = [].slice.call(document.querySelectorAll('[data-sector]')).filter(function (c) { return c.tagName === 'BUTTON'; });
    schips.forEach(function (c) {
      c.addEventListener('click', function () {
        var s = c.dataset.sector;
        schips.forEach(function (x) { x.classList.toggle('on', x === c); });
        tcards.forEach(function (t) { t.hidden = !!s && t.dataset.sector !== s; });
      });
    });
  }
})();
