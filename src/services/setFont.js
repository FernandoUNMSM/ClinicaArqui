export default function setFont(fontFamily, fontSize) {
  // console.log(fontFamily)
  const nyan = document.querySelectorAll('*')
  nyan.forEach(nya => {
    if (nya.tagName == 'SCRIPT') {

    } else {
      nya.style.fontFamily = fontFamily;
      nya.style.fontSize = fontSize;
    }
  })
}