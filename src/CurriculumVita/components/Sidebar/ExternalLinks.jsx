import { mdiChessKnight } from '@mdi/js';
import Icon from '@mdi/react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react'
import { Link } from 'react-router-dom'

import ChessMe from '../../datas/ChessProfile';
import { useTranslation } from '../../lib/intl';

import "./ExternalLinks.css"

const ExternalLinks = () => {
    const { t } = useTranslation()
    return (
        <div className="external__Links" >
            <h2 className="h2">{t("EXTERNAL_LINK_TITLE")}</h2>
            <div className='external__link'>
                <LinkedInIcon style={{ fontSize: 25 }} />
                <Link style={{ textDecoration: 'underline' }} to="https://www.linkedin.com/in/nicolas-pierre-6387a0222/">LinkedIn</Link>
            </div>
            <br></br>
            <div className='external__link'>
                <GitHubIcon style={{ fontSize: 25 }} />
                <Link style={{ textDecoration: 'underline' }} to="https://github.com/npierre91">GitHub</Link>
            </div>
            <br></br>
            <div className='external__link'>
                <Icon path={mdiChessKnight} size={1} />
                <Link style={{ textDecoration: 'underline' }} to={ChessMe.ChessProfile.data.url}>Chess.com</Link>
            </div>
        </div>
    )
}
export default ExternalLinks