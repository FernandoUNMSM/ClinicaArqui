export const useFormatArray = () => {
  const deleteItemsFromArray = (allArray: any, toDeleteArray: any, keyToCompare: any) => {
    let newAllItems: any = []
    allArray.forEach((allItem: any) => {
      let exists = false
      toDeleteArray.forEach((actualItem: any) => {
        if (actualItem[keyToCompare] === allItem[keyToCompare]) { exists = true }
      })
      !exists && newAllItems.push(allItem)
    })
    return newAllItems
  }
  return { deleteItemsFromArray }
}