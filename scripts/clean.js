const fs = require('fs')
const path = require('path')

const basedir = __dirname
const distdir = path.join(basedir, '..', 'dist')
const srcdir = path.join(basedir, '..', 'src')
const distdirfilenames = fs.readdirSync(distdir)
const srcfilenames = fs.readdirSync(srcdir).filter(a => a.endsWith('.mjs'));

const removefilebyname = basedir => filename => {
  let filepath = path.join(basedir, filename);
  let stat = fs.statSync(filepath);

  if (stat.isDirectory()) {
    fs.readdirSync(filepath).forEach(removefilebyname(filepath));
  } else if (stat.isFile()) {
    fs.unlinkSync(filepath);
  }
}

srcfilenames.forEach(removefilebyname(srcdir));
distdirfilenames.forEach(removefilebyname(distdir));
