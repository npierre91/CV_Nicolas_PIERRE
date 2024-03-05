
import TypewriterComponent from "typewriter-effect"

import "./landingPage.css"

const strings = [
    "<font color='green'>Potentiel</font> et <font color='#75151E'>compétences</font> à votre service",
    "<font color='green'>Potential</font> and <font color='#75151E'>expertise</font> at your service",
]

const LandingPage = () => {
    return (
        <div className="main-page-typewriter">
            <TypewriterComponent
                options={{
                    strings: strings,
                    autoStart: true,
                    loop: true,
                    delay: 85,
                    deleteSpeed: 85,
                    pauseFor: 2500,
                    wrapperClassName: "typewriter-content",
                }}
            />
        </div>
    )
}

export default LandingPage