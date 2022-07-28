/*
 *
 * Landing constants
 *
 */

import { generateActionTypes } from '../../utils/generic-saga'
const root = 'app/LANDING/'

const fakeData = [
  {
    name: 'Portfolio template for developers, build in React',
    image:
      'https://reactjsexample.com/content/images/2022/07/Code-2022-04-27-58.jpg',
    description: 'React Portfolio, multiple pages with dark mode',
    date: 'Fri Jul 15 2022 11:16:07 GMT+0100 (Central European Standard Time)',
    tags: ['Portfolio'],
  },
]

export default {
  CLEAR_ERRORS: `${root}CLEAR_ERRORS`,
  DEFAULT_ACTION: generateActionTypes(root, 'DEFAULT_ACTION'),
  fakeData,
}
