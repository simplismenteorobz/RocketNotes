const fs = require('fs')
const path = require('path')
const uploadConfig = require('../configs/upload')

class diskStorage {
  async savefile(file) {
    await fs.promises.rename(
      path.resolve(uploadConfig.TMP_FOLDER, file),
      path.resolve(uploadConfig.UPLOADS_FOLDER, file)
    )
  }
}