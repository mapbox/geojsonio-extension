var ug = require('uglify-js'),
    fs = require('fs');

fs.writeFileSync('index.html', fs.readFileSync('template.html', 'utf8')
    .replace('{js}', ug.minify('bookmarklet.js').code));
