function injection() {
    var SITE = 'http://geojson.io';
    function getClassed(e, c) { return e.getElementsByClassName(c); }
    function isGJ() { return $(this).text().match(/json$/); }

    function geojsonioStateChange() {
        if (location.hostname == 'github.com') {
            if (window.location.href.match(/\.geojson$/)) {
                injectOnGithub();
            }
        } else if (location.hostname == 'gist.github.com') {
            if ($('strong.file-name').filter(isGJ).length) {
                injectOnGist();
            }
        }
    }

    function injectOnGithub() {
        var group = $('.meta .button-group'),
            preexisting = $('.geojsonio-button');
        if (!preexisting.length) {
            var item = $('<a></a>').prependTo(group)
                .attr('_target', 'blank')
                .attr('class', 'button minibutton geojsonio-button')
                .attr('href', SITE + '/#github:' + location.pathname);
            $('<span></span>').appendTo(item).attr('class', 'octicon octicon-globe');
            $('<span></span>').appendTo(item)
                .text('geojson.io');
        }
    }

    function injectOnGist() {
        var preexisting = $('.geojsonio-button');
        if (!preexisting.length) {
            var item = $('<li><a></a></li>')
                .appendTo('ul.pagehead-actions')
                .attr('class', 'minibutton');
            item.find('a')
                .attr('_target', 'blank')
                .attr('href', SITE + '/#gist:' + location.pathname.match(/\/(\d+)/)[1]);
            $('<span></span>')
                .appendTo(item.find('a'))
                .attr('class', 'octicon octicon-pencil');
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
