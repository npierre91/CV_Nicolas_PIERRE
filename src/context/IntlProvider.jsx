import { IntlLangProvider, useIntlLangContext } from "../lib/intl"
import lang from "../lang"
import { IntlProvider as DefaultIntlProvider } from 'react-intl'
import React from "react"

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

const IntlProvider = ({ children }) => {
    return (
        <IntlLangProvider>
            <CustomIntlProvider>{children}</CustomIntlProvider>
        </IntlLangProvider>
    )
}

export default IntlProvider