export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = (e) => {
    resolve(reader.result)
  }
  reader.onerror = error => reject(error)
})

export const getImageSize = src => new Promise((resolve, reject) => {
  const image = new Image()
  image.src = src
  image.onload = function () {
    var height = this.height
    var width = this.width
    resolve({ height, width })
    return true
  }
  image.onerror = () => {
    resolve({})
  }
})

export const pasteFromClipboard = (clipboardData = {}) => {
  return new Promise((resolve, reject) => {
    if (!clipboardData.items) {
      reject('no items in clipboardData')
      return
    }
    const cbd = clipboardData
    for(let i = 0; i < cbd.items.length; i++) {
      var item = cbd.items[i]
      if(item.kind === "file" && item.type.indexOf('image') === 0){
        const blob = item.getAsFile()
        if (blob.size === 0) {
          reject()
        } else {
          resolve(blob)
        }
      } else {
        reject('目前仅支持图片粘贴')
      }
    }
  })
}
