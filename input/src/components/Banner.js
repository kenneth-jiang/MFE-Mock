import React from "react";

// should be in separate constants file
const NineNintyFinder = "990Finder";
const NineNintyFinderDescription = "Find organizations, their profiles, and 990 forms.";

// component stays here
const Banner = () => {
    return (
        <>
            <div style={{ fontSize: "70px" }}>
                {NineNintyFinder}
            </div>
            <br />
            <div style={{ fontSize: "20px" }}>
                {NineNintyFinderDescription}
            </div>
        </>
    );
};

export default Banner;