/**
 *
 * Cookies
 *
 */

import React from 'react'
// import PropTypes from 'prop-types';
import CookieConsent from 'react-cookie-consent'
// import { FormattedMessage } from 'react-intl'
// import messages from './messages'
import './cookies.scss'

function Cookies() {
  return (
    <div className="cookies">
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="cookieProvider"
        style={{ background: '#080715', fontSize: '16px' }}
        buttonStyle={{ color: '#080715', fontSize: '13px', fontWeight: '900' }}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  )
}

Cookies.propTypes = {}

export default Cookies
