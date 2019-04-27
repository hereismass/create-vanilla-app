const fs = require('fs-extra');
const path = require('path');

module.exports = {
  getCurrentDirectoryBase : () => {
    return path.basename(process.cwd());
  },

  directoryExists : (filePath) => {
    try {
      return fs.statSync(filePath).isDirectory();
    } catch (err) {
      return false;
    }
  },

  copyStartingFiles: async () => {
    const startingFiles = path.dirname(fs.realpathSync(__filename)) + '/../files';
    const currentDir = process.cwd();
    await fs.copy(startingFiles, currentDir);
  }
};