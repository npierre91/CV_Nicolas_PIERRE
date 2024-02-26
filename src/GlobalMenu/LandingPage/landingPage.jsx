import TypeWriter from "./TypeWriter/typeWriter"

const LandingPage = () => {
    return (
        <div className="main-page-typewriter">
            <TypeWriter delay={100} text="Test welcome" />
        </div>
    )
}

export default LandingPage