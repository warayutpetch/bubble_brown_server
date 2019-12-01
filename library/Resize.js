// Resize.js

const sharp = require('sharp');
const uuidv4 = require('uuid/v4');
const path = require('path');

class Resize {

  constructor(folder) {
    this.folder = folder;
  }

  async saveImage(buffer, code) {
    const filename = code + Resize.filename();
    const filepath = this.filepath(filename);

    console.log("filename", filename);

    await sharp(buffer)
      .resize(2048, 2048, {
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .toFile(filepath);

    return filename;
  }

  static filename() {
    return ".jpg";
  }

  filepath(filename) {
    return path.resolve(this.folder + "/" + filename)
  }
}
module.exports = Resize;