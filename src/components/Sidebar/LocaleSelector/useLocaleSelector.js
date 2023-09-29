import { useNavigate } from "react-router-dom"
import React from "react"

const useLocaleSelector = () => {
    const [anchorElement, setAnchorElement] = React.useState(null)
    const navigate = useNavigate()
    const handleClose = () => {
        setAnchorElement(null)
    }
    const handleOpenMenu = (event) => {
        setAnchorElement(event.currentTarget)
    }
    const handleClick = (lang) => {
        navigate(`?lang=${lang}`)
    }
    return {
        anchorElement,
        navigate,
        handleClose,
        handleOpenMenu,
        handleClick,
    }
}

export default useLocaleSelector

