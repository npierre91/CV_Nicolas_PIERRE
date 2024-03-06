import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";

import { useTranslation } from "../../CurriculumVita/lib/intl";
import "./secondPage.css"

const strings = [
    "Un profil <font color='#75151E'>passionné</font>, <font color='#DFC779'>volontaire</font> et <font color='green'>ambitieux</font>",
    "A <font color='#75151E'>driven</font>, <font color='#DFC779'>determined</font> and <font color='green'>ambitious</font> profile"
]

const SecondPage = () => {
    const navigate = useNavigate()
    const { t } = useTranslation()
    return (
        <div className="container-second-page">
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
            <Button className="button-redirect-to-cv" variant="contained" onClick={() => navigate("/cv")}>
                {t("REDIRECT_TO_CV_FROM_MAIN_PAGE")}
            </Button>
        </div>
    );
};

export default SecondPage