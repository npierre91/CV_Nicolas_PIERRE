import TypewriterComponent from "typewriter-effect"
import "./landingPage.css"

const LandingPage = () => {
    return (
        <div className="main-page-typewriter">
            <TypewriterComponent
                options={{
                    strings: [
                        "<span>Test Welcome</span>"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 100,
                    pauseFor: 2500000,
                    wrapperClassName: "typewriter-content",
                }}
            />
        </div>
    )
}

export default LandingPage