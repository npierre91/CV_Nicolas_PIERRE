import TypewriterComponent from "typewriter-effect"
import "./landingPage.css"

const strings = [
    "Bienvenue dans un nouveau monde",
    "Welcome to a brand new world",

]

const LandingPage = () => {
    return (
        <div className="main-page-typewriter">
            <TypewriterComponent
                options={{
                    strings: strings,
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 100,
                    pauseFor: 2500,
                    wrapperClassName: "typewriter-content",
                }}
            />
        </div>
    )
}

export default LandingPage