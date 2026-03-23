/* eslint-disable react/jsx-pascal-case */
import { Menu, MenuItem, IconButton } from "@mui/material";
import { ReactCountryFlag } from "react-country-flag";

import { useIntlLangContext, availableLanguages } from "../../../lib/intl";

import useLocaleSelector from "./useLocaleSelector";

const flagList = {
    fr: <ReactCountryFlag svg countryCode="fr" />,
    en: <ReactCountryFlag svg countryCode="gb" />,
}

const LocaleSelector = () => {
    const { currentLanguage } = useIntlLangContext()

    const {
        anchorElement,
        handleClose,
        handleOpenMenu,
        handleClick,
    } = useLocaleSelector()

    return (
        <>
            <IconButton
                onClick={handleOpenMenu}
            >
                {flagList[currentLanguage]}
            </IconButton>
            <Menu
                anchorEl={anchorElement}
                keepMounted={true}
                open={Boolean(anchorElement)}
                onClose={handleClose}
            >
                {availableLanguages.map((key) => {
                    return (
                        <MenuItem
                            key={key}
                            onClick={() => void handleClick(key)}
                        >
                            <IconButton>{flagList[key]}</IconButton>
                        </MenuItem>
                    )
                })}

            </Menu>
        </>
    )
}

export default LocaleSelector