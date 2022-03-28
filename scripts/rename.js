const fs = require('fs')
const path = require('path')

const basedir = __dirname
const srcdir = path.join(basedir, '..', 'src')
const filenames = fs.readdirSync(srcdir).filter(a => a.endsWith('.js'));

filenames.forEach(filename => {
  const filepath = path.join(srcdir, filename);
  const newfilepath = filepath.replace('.js', '.mjs').replace(`src`, `dist`);
  fs.renameSync(filepath, newfilepath)
});

const fp = path.join(basedir, '..', 'dist', 'index.mjs');
const outindex = fs.readFileSync(fp);
const replaced = outindex.toString().replace(/';/gm, ".mjs';");

fs.writeFileSync(fp, replaced);