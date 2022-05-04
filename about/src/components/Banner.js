import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

const StyledButton = styled(Button)(() => ({
    color: "black",
    backgroundColor: "#febe10",
}));

// should be in separate constants file
const AboutDescription = "Candid gets you the information you need to do good.";
const AboutDescriptionSecond = "We envision a social sector capable of tackling the critical challenges and opportunities of our time."
const AboutButtonText = "Our mission, vision, and values";
const AboutYoutubeLink = "https://www.youtube.com/embed/ik3ZXkDNvs8";

// component stays here
const Banner = () => {
    return (
        <>
            <div style={{ fontSize: "70px" }}>
                {AboutDescription}
            </div>
            <br />
            <iframe 
                width="844"
                height="475"
                src={AboutYoutubeLink}>
            </iframe> 
            <div style={{ fontSize: "25px" }}>
                {AboutDescriptionSecond}
            </div>
            <br />
            <StyledButton>
                {AboutButtonText}
            </StyledButton>
        </>
    );
};

export default Banner;