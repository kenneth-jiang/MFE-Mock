import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import { useTranslation } from "react-i18next";

import * as constants from "../utils/constants";

const StyledButton = styled(Button)(() => ({
    color: "black",
    backgroundColor: "#febe10",
}));

const AboutPage = () => {
    const { t } = useTranslation();

    const [ showTranscript, setShowTranscript ] = useState(false);

    return (
        <Container style={{ borderLeft: "1px solid #febe10", fontFamily: "Algebra Web,Georgia,serif" }}>
            <div style={{ height: "50px" }} />

            <div style={{ fontSize: "70px" }}>
                {t("title")}
            </div>
            <br />

            <iframe
                width="844"
                height="475"
                src={constants.AboutYoutubeLink}
            />
            <br />
            <br />

            <div>
                <StyledButton onClick={() => setShowTranscript(!showTranscript)}>
                    {t("transcript.button")}
                </StyledButton>
                <br />
                <br />
                {showTranscript
                    && <div>
                        {t("transcript.body")}
                        <br />
                        {constants.candidDotOrg}
                        <br />
                        {constants.atCandidDotOrg}
                        <br />
                        {constants.hashTagWeAreCandid}
                        <br />
                        {t("transcript.tagline")}
                    </div>
                }
                <br />
                <br />
            </div>

            <div style={{ fontSize: "25px" }}>
                {t("body")}
            </div>
            <br />

            <Link to="/mission-vision-values">
                <StyledButton>
                    {t("buttonLink")}
                </StyledButton>
            </Link>
            <br />
            <br />
        </Container>
    );
};

export default AboutPage;