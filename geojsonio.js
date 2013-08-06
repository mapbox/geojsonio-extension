function injection() {
    function getClassed(e, c) { return e.getElementsByClassName(c); }

    function geojsonioStateChange() {
        if (window.location.href.match(/\.geojson$/)) {
            var group = $('.meta .button-group'),
                preexisting = $('.geojsonio-button');
            if (!preexisting.length) {
                $('<a></a>').appendTo(group)
                    .text('geojson.io')
                    .attr('class', 'button minibutton geojsonio-button')
                    .attr('_target', 'blank')
                    .attr('href', 'http://localhost:8080/#github:' + location.pathname);
            }
        }
    }

    $(document).on('pjax:complete', geojsonioStateChange);

    geojsonioStateChange();
}

var scr = document.body.appendChild(document.createElement('script'));
scr.innerHTML = ('(' + injection + ')') + '()';
