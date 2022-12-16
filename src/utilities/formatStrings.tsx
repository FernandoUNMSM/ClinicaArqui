export const formatNumber = (num: number) => {
  if (!num) return num
  const stringNum = num.toString()
  if (stringNum.length < 4) return stringNum
  const nom = stringNum.split('')
  nom.splice(1, 0, ',')
  return nom.join('')
}

export const capitalize = (str: string) => {
  const lower = str.toLowerCase()
  return str.charAt(0).toUpperCase() + lower.slice(1)
}

export const capitalizeAll = (str: string) => {
  const nameSeparate = str.split(/([,_ ])/)
  const namesUpper = nameSeparate.map(name => {
    const lower = name.toLowerCase()
    return name.charAt(0).toUpperCase() + lower.slice(1)
  }).join('')
  return namesUpper
}

export const formatSnakeToNormal = (str: string) => {
  const snakeString = capitalizeAll(str)
  return snakeString.replaceAll('_', ' ')
}

export const formatRGBA = (rgba: any) => {
  if (!rgba) return
  return `rgba(${rgba.r}, ${rgba.g},${rgba.b},${rgba.a})`
}

export const formatDate = (date: any) => {
  const dateFormated = date.toISOString().slice(0, -14)
  return dateFormated
}

export const uppercaseAll = (str: string) => {
  const nameSeparate = str.split(/([,_ ])/)
  const namesUpper = nameSeparate.map(name => {
    const upper = name.toUpperCase()
    return upper
  }).join('')
  return namesUpper
}