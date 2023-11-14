import PropTypes from 'prop-types'
import React from "react"
import { IntlProvider as DefaultIntlProvider } from 'react-intl'

import lang from "../lang"
import { IntlLangProvider, useIntlLangContext } from "../lib/intl"

const CustomIntlProvider = ({ children }) => {
    const { currentLanguage } = useIntlLangContext()
    const messages = React.useMemo(
        () => ({ ...lang.en, ...lang[currentLanguage] }),
        [currentLanguage]
    )
    return (
        <DefaultIntlProvider
            key={currentLanguage}
            locale={currentLanguage}
            messages={messages}>
            {children}
        </DefaultIntlProvider>
    )
}

CustomIntlProvider.propTypes = {
    children: PropTypes.node.isRequired
}

const IntlProvider = ({ children }) => {
    return (
        <IntlLangProvider>
            <CustomIntlProvider>{children}</CustomIntlProvider>
        </IntlLangProvider>
    )
}

IntlProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default IntlProvider