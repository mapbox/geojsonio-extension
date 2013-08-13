var SITE = 'http://geojson.io';
if (location.hostname == 'github.com' &&
    window.location.href.match(/\.(geo)?json$/)) {
    window.open(SITE + '/#github:' + location.pathname);
} else if (location.hostname == 'gist.github.com') {
    window.open(SITE + '/#gist:' + location.pathname);
} else {
    alert('Sorry, looks like you aren\'t on GitHub or aren\'t looking at a GeoJSON file');
}
