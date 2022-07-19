import React from 'react'
import { isEmpty } from 'lodash'

export const renderArrayErrors = errors => {
  if (!isEmpty(errors)) {
    return errors.map(item => (
      <div key={Math.random()} className="x-error-message">
        {item}
      </div>
    ))
  }
  return false
}

export const renderFirstError = errors => {
  let selectedError = ''
  for (let i = 0; i < Object.keys(errors).length; i += 1) {
    if (!isEmpty(errors[Object.keys(errors)[i]])) {
      selectedError = errors[Object.keys(errors)[i]]
      break
    }
  }
  return selectedError
}
export const testErrorsAndDispatchAction = (errorsArray, action) => {
  if (!isEmpty(errorsArray)) {
    action()
  }
}
