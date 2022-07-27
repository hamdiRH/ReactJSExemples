import React from 'react'
import { Tooltip } from 'antd'
import { EMPTY_STRING } from 'shared/constants'
import { isNaN } from 'lodash'

export const handleTitleLength = (str, titleMaxLength = 62) => {
  if (str.length > titleMaxLength) return `${str.slice(0, titleMaxLength)}...`
  if (str.length > titleMaxLength) return `${str.slice(0, titleMaxLength)}...`
  return str
}
export const handleDescriptionLength = (str, descriptionMaxLength = 134) => {
  if (str.length > descriptionMaxLength)
    return `${str.slice(0, descriptionMaxLength)}...`
  return str
}

export const deleteFirstCharacters = (string, number) => string.slice(number)

export const hideLongText = (text, maxLength = 20) => {
  const allText = <span className="hide-long-text">{text}</span>
  if (text.length > maxLength) {
    return (
      <Tooltip placement="right" title={allText}>
        <span className="hide-long-text">{`${text.slice(
          0,
          maxLength,
        )}...`}</span>
      </Tooltip>
    )
  }

  return text
}

export const hideLongTextWithCapsAndNumbers = (text, maxLength = 20) => {
  if (!text) return text
  const allText = <span className="hide-long-text">{text}</span>
  let slicedText = EMPTY_STRING
  let counter = 0
  for (let i = 0; i < text.length; i += 1) {
    if (!isNaN(Number(text[i]))) counter += 1.15
    else if (text[i] === text[i].toUpperCase()) counter += 1.4
    else counter += 1

    if (counter > maxLength) break
    else slicedText += text[i]
  }
  if (text.length > slicedText.length) {
    return (
      <Tooltip placement="right" title={allText}>
        <span className="hide-long-text">{`${slicedText}...`}</span>
      </Tooltip>
    )
  }

  return text
}

export const renderBarlabel = (text, maxLength = 20) => {
  if (text.length > maxLength) {
    let newText = text
    // check if the first word is long or not
    const pos = text.indexOf(' ')
    if (pos > 10) {
      newText = `${text.slice(0, 10)} - ${text.slice(10)}`
    }
    return `${newText.slice(0, maxLength)}...`
  }
  return text
}
export const deleteExtraSpaces = string => string.replace(/\s+/g, ' ').trim()

export const stringifyString = string => JSON.stringify(string)

/**
 *
 * @param {string} string your cant pass an undefined string
 */
export const parseString = string => (string ? JSON.parse(string) : undefined)

export const generateRandomString = length => {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const generateRandomLetters = length => {
  let result = ''
  const characters = 'abcdefghijklmnopqrstuvwxyz'
  const charactersLength = characters.length
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export function nl2br(str, isXhtml) {
  if (typeof str === 'undefined' || str === null) {
    return ''
  }
  const breakTag = isXhtml || typeof isXhtml === 'undefined' ? '<br />' : '<br>'
  const str2 = str.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, `$1 ${breakTag} $2`)
  return str2
}

export const toUpperFirstLetterOfEachWord = str =>
  str
    .toLowerCase()
    .split(' ')
    .filter(word => word != '')
    .map(word => word[0].toUpperCase() + word.substr(1))
    .join(' ')
