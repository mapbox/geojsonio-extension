function injection() {
    var SITE = 'http://geojson.io';
    function getClassed(e, c) { return e.getElementsByClassName(c); }

    function geojsonioStateChange() {
        if (location.hostname == 'github.com') {
            if (window.location.href.match(/\.geojson$/)) {
                injectOnGithub();
            }
        } else if (location.hostname == 'gist.github.com') {
            if ($('.gist-description p').text() == 'via:geojson.io') {
                injectOnGist();
            }
        }
    }

    function injectOnGithub() {
        var group = $('.meta .button-group'),
            preexisting = $('.geojsonio-button');
        if (!preexisting.length) {
            var item = $('<a></a>').appendTo(group)
                .attr('_target', 'blank')
                .attr('class', 'button minibutton geojsonio-button')
                .attr('href', SITE + '/#github:' + location.pathname);
            $('<span></span>').appendTo(item).attr('class', 'octicon octicon-globe');
            $('<span></span>').appendTo(item)
                .text('geojson.io');
        }
    }

    function injectOnGist() {
        var group = $('.export-references'),
            preexisting = $('.geojsonio-button');
        if (!preexisting.length) {
            var item = $('<li><a></a></li>')
                .appendTo(group)
                .attr('class', 'minibutton geojsonio-button');
            item.find('a')
                .attr('_target', 'blank')
                .attr('href', SITE + '/#gist:' + location.pathname.match(/\/(\d+)/)[1]);
            $('<span></span>')
                .appendTo(item.find('a'))
                .attr('class', 'octicon octicon-globe');
            $('<span></span>')
                .appendTo(item.find('a'))
                .text('geojson.io');
        }
    }

    $(document).on('pjax:complete', geojsonioStateChange);

    geojsonioStateChange();
}

var scr = document.body.appendChild(document.createElement('script'));
scr.innerHTML = ('(' + injection + ')') + '()';
