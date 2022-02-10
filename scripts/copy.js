const path = require(`path`)
const fs = require(`fs`)

const filestoinclude = [
  `.gitignore`,
  `.npmignore`,
  `banner.png`,
  // `LICENCE`,
  `Logo.svg`,
  `package.json`,
  `README.md`,
]

const rootdir = path.join(__dirname, '..');
const distdir = path.join(rootdir, 'dist');

filestoinclude.forEach(filetoinclude => {
  const filepath = path.join(rootdir, filetoinclude);
  const destpath = path.join(distdir, filetoinclude);

  fs.copyFileSync(filepath, destpath);
})
