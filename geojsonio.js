function getClassed(e, c) { return e.getElementsByClassName(c); }

if (window.location.href.match(/\.geojson$/)) {
    var meta = getClassed(document.body, 'meta')[0],
        group = getClassed(meta, 'button-group')[0],
        button = group.appendChild(document.createElement('a'));
    button.innerHTML = 'geojson.io';
    button.className = 'button minibutton';
    button.setAttribute('_target', 'blank');
    button.setAttribute('href', 'http://localhost:8080/#github:' + location.pathname);
}
