import React from 'react'
import { Link } from 'react-router-dom'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTranslation } from '../../lib/intl';
import ChessMe from '../../datas/ChessProfile';
import "./ExternalLinks.css"
import { mdiChessKnight } from '@mdi/js';
import Icon from '@mdi/react';

const ExternalLinks = () => {
    const { t } = useTranslation()
    return (
        <div className="external__Links" >
            <h2 className="h2">{t("EXTERNAL_LINK_TITLE")}</h2>
            <div className='external__link'>
                <LinkedInIcon style={{ fontSize: 25 }} />
                <Link to="https://www.linkedin.com/in/nicolas-pierre-6387a0222/" style={{ textDecoration: 'underline' }}>LinkedIn</Link>
            </div>
            <br></br>
            <div className='external__link'>
                <GitHubIcon style={{ fontSize: 25 }} />
                <Link to="https://github.com/npierre91" style={{ textDecoration: 'underline' }}>GitHub</Link>
            </div>
            <br></br>
            <div className='external__link'>
                <Icon path={mdiChessKnight} size={1} />
                <Link to={ChessMe.ChessProfile.data.url} style={{ textDecoration: 'underline' }}>Chess.com</Link>
            </div>
        </div>
    )
}
export default ExternalLinks