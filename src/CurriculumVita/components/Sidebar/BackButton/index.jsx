import { Link } from "react-router-dom"

import { useTranslation } from "../../../lib/intl"

const BackToMainPageButton = () => {
    const { t } = useTranslation()
    return (
        <Link style={{ textDecoration: 'underline' }} to="/main-menu">{t("BACK_TO_MAIN_MENU_BUTTON_TEXT")}</Link>
    )
}

export default BackToMainPageButton