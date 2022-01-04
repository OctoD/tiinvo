const fs = require('fs')
const path = require('path')

const basedir = __dirname
const srcdir = path.join(basedir, '..', 'src')
const filenames = fs.readdirSync(srcdir).filter(a => a.endsWith('.js'));

filenames.forEach(filename => {
  const filepath = path.join(srcdir, filename);
  const newfilepath = filepath.replace('.js', '.mjs')
  fs.renameSync(filepath, newfilepath)
});
