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