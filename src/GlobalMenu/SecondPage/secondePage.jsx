import TypewriterComponent from "typewriter-effect";

const strings = [
    "Un profil <font color='#75151E'>passionné</font>, <font color='#DFC779'>volontaire</font> et <font color='green'>ambitieux</font>",
    "A <font color='#75151E'>driven</font>, <font color='#DFC779'>determined</font> and <font color='green'>ambitious</font> profile"
]

const SecondPage = () => {
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
    );
};

export default SecondPage