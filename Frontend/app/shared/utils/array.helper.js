import { clone, isEmpty } from 'lodash'
export const unflattenArray = (oldArray, size) => {
  const newArray = []
  const arrayToTreated = clone(oldArray)
  while (arrayToTreated.length > 0)
    newArray.push(arrayToTreated.splice(0, size))
  return newArray
}

export const isFirstIndex = index => index === 0
export const isLastIndex = (array, index) => {
  if (isEmpty(array)) {
    return true
  }
  return index === array.length - 1
}
// the max value of our index is array.length and not arry.length -1
export const isPagesAndAssessmentsFinished = (index, array) =>
  index === array.length
export const isOneSingleElement = array => array.length === 1
export const isContainingAtLeastOneElement = array => array.length > 1

export const getElementDataToUpdate = (elementsList, elementToUpdateId) =>
  elementsList.find(element => element.id === elementToUpdateId)

export const sortArray = array => {
  const draft = [...array]
  return draft.sort((sortByValue1, sortByValue2) => sortByValue2 - sortByValue1)
}
export const sortArrayOfObjects = array => {
  const draft = [...array]
  return draft.sort((sortByValue1, sortByValue2) =>
    sortByValue1.value.toLowerCase() < sortByValue2.value.toLowerCase()
      ? -1
      : 1,
  )
}

export const createFakeArrayForLoading = (length, fakeObject = {}) =>
  Array.from({ length }, () => fakeObject)

export const arrayToRenderInLoading = (
  loading,
  array,
  fakeObject,
  numberOfFakeObjects,
) => {
  if (loading) {
    return createFakeArrayForLoading(numberOfFakeObjects, fakeObject)
  }
  return array
}

export const convertArrayToObject = (array, key) => {
  const initialValue = {}
  return array.reduce(
    (obj, item) => ({
      ...obj,
      [item[key]]: item,
    }),
    initialValue,
  )
}
