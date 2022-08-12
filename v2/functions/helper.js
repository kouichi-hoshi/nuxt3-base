export function getFilesPath(filePath, fileNames) {
  /**
   * ファイルのパスとファイル名を結合し配列で返す
   * @param {String} filePath 取得したい画像ファイルなどの格納パス
   * @param {Array} fileNames 取得したい画像ファイルなどのファイル名
   * @return {Array}
   */
  const result = fileNames.map((fileName) => {
    return filePath + fileName
  })
  return result
}

export function getFilePath(filePath, fileName) {
  /**
   * ファイルのパスとファイル名を結合し文字列で返す
   * @param {String} filePath 取得したい画像ファイルなどの格納パス
   * @param {String} fileName 取得したい画像ファイルなどのファイル名
   * @return {String}
   */
  return filePath + fileName
}
