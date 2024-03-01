import cookies from 'js-cookie'
import PropTypes from 'prop-types'
import React from "react";
import { useIntl } from "react-intl";

import lang from "../../lang";
import useQueryParams from '../hooks/useQueryParams'


const fallbackLanguage = 'fr'
const intlLocalCookieKey = 'locale'
const availableLanguages = ['fr', 'en']

const store = {
    language: fallbackLanguage,
    isInit: false,
}

const checkLocale = (locale) =>
    locale && Object.prototype.hasOwnProperty.call(lang, locale) ? locale : undefined

const IntlLangContext = React.createContext({
    availableLanguages: [],
    currentLanguage: fallbackLanguage,
    changeLanguage: () => {
        throw new Error('IntlContext is not raedy to be used')
    }
})

const useIntlLangContext = () => React.useContext(IntlLangContext)

const IntlLangProvider = ({ children }) => {
    const query = useQueryParams()
    const [state, dispatch] = React.useReducer((prevState, action) => {
        switch (action.type) {
            case 'RESTORE_LANGUAGE': {
                return {
                    ...prevState,
                    language: action.language,
                    isInit: true,
                }
            }
            case 'CHANGE_LANGUAGE': {
                const newLanguage = checkLocale(action.language) || fallbackLanguage
                cookies.set(intlLocalCookieKey, newLanguage, {
                    domain: 'localhost'
                })
                return {
                    ...prevState,
                    language: newLanguage,
                }
            }
            default: {
                return {
                    ...prevState
                }
            }
        }
    }, store)
    store.dispatch = (params) => dispatch(params)
    React.useEffect(() => {
        let language = fallbackLanguage
        try {
            const queryParamLanguage = checkLocale(query.get('lang') || '')

            const navigatorLanguage = checkLocale(navigator.language.split(/[_-]/u)[0])

            language = queryParamLanguage || navigatorLanguage || fallbackLanguage
        } catch (error) {
            console.error('Could not load any language.', { language, err: error })
        } finally {
            cookies.set(intlLocalCookieKey, language, { domain: 'localhost' })
            dispatch({ type: 'RESTORE_LANGUAGE', language })
        }
    }, [query])

    const intlLangContext = React.useMemo(
        () => ({
            availableLanguages,
            currentLanguage: state.language,
            changeLanguage: (language) => {
                dispatch({ type: 'CHANGE_LANGUAGE', language })
            },
        }),
        [state]
    )
    return (
        <IntlLangContext.Provider value={intlLangContext}>
            {state.isInit ? children : null}
        </IntlLangContext.Provider>
    )
}

IntlLangProvider.propTypes = {
    children: PropTypes.node.isRequired
}

const useTranslation = () => {
    const { formatMessage, ...other } = useIntl()
    const t = React.useCallback(
        (id, arg = { number: 1 }) =>
            formatMessage({ id: String(id) }, arg) || lang(fallbackLanguage)[id] || String(id),
        [formatMessage]
    )
    return { t, ...other }
}

export {
    fallbackLanguage,
    availableLanguages,
    IntlLangContext,
    IntlLangProvider,
    useIntlLangContext,
    useTranslation,
}