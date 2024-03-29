import IconButton from '@material-ui/core/IconButton';
import { Menu, MenuItem } from "@mui/material";
import { IconFlagFR, IconFlagUK } from "material-ui-flags";
import React from "react";

import { useIntlLangContext, availableLanguages } from "../../../lib/intl";

import useLocaleSelector from "./useLocaleSelector";

const flagList = {
    fr: <IconFlagFR />,
    en: <IconFlagUK />,
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