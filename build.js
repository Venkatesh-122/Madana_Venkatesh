// Pre-renders the EJS views into static HTML so the site can be served by Netlify
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const outDir = path.join(__dirname, 'dist');

fs.rmSync(outDir, { recursive: true, force: true });
fs.cpSync(path.join(__dirname, 'public'), outDir, { recursive: true });

ejs.renderFile(path.join(__dirname, 'views', 'index.ejs'), {}, (err, html) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    fs.writeFileSync(path.join(outDir, 'index.html'), html);
    console.log('Built static site into dist/');
});
