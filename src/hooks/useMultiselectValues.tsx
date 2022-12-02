import { useEffect, useState } from 'react'
import { useFormatArray } from "hooks/useFormatArray";

export const useMultiselectValues = ({ all, actual, key, keyToSearch }: any) => {
  const [actualItems, setActualItems] = useState(actual)
  const [actualItemsToSearch, setActualItemsToSearch] = useState(actual)
  const [allItems, setAllItems] = useState([])
  const [allItemsToSearch, setAllItemsToSearch] = useState([])
  const { deleteItemsFromArray } = useFormatArray()

  useEffect(() => {
    if (!all || !actual) return
    const finalArray = deleteItemsFromArray(all, actual, key)
    setAllItems(finalArray)
    setAllItemsToSearch(finalArray)
  }, [all, actual])

  useEffect(() => {
    if (!actual) return
    setActualItems(actual)
    setActualItemsToSearch(actual)
  }, [actual])

  const addToActualItems = (item: any) => {
    setActualItems((prev: any) => prev.concat(item))
    setActualItemsToSearch((prev: any) => prev.concat(item))

    setAllItems((prev: any) => prev.filter((prevItem: any) => prevItem[key] !== item[key]))
    setAllItemsToSearch((prev: any) => prev.filter((prevItem: any) => prevItem[key] !== item[key]))
  }
  const addToAllItems = (item: any) => {
    setAllItems((prev: any) => prev.concat(item))
    setAllItemsToSearch((prev: any) => prev.concat(item))

    setActualItems((prev: any) => prev.filter((prevItem: any) => prevItem[key] !== item[key]))
    setActualItemsToSearch((prev: any) => prev.filter((prevItem: any) => prevItem[key] !== item[key]))
  }

  const searchOnAllItems = (name: string) => {
    setAllItems(allItemsToSearch.filter((item: any) => item[keyToSearch].toLowerCase().includes(name.toLowerCase())))
  }
  const searchOnActualItems = (name: string) => {
    setActualItems(actualItemsToSearch.filter((item: any) => item[keyToSearch].toLowerCase().includes(name.toLowerCase())))
  }

  return {
    actualItems,
    allItems,
    addToActualItems,
    addToAllItems,
    deleteItemsFromArray,
    searchOnAllItems,
    searchOnActualItems
  }
}