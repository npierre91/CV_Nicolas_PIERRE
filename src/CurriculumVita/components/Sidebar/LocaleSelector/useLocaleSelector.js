import React from "react"
import { useNavigate } from "react-router-dom"

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
        navigate(`/cv?lang=${lang}`)
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

