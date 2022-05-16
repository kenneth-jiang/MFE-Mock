import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";

export default () => {
    return (
        <Container style={{ borderLeft: "1px solid #febe10" }}>
            <div style={{ maxWidth: "850px", fontFamily: "Algebra Web,Georgia,serif", fontWeight: 400, lineHeight: "27px" }}>

                <div style={{ height: "50px" }} />
                <p style={{ fontSize: "60px" }}>
                    Mission ,vision, values
                </p>
                <p style={{ fontSize: "18px" }}>
                    For a combined 88 years, Foundation Center and GuideStar each helped change the world by giving people the information they needed to do good.
                </p>
                <Divider sx={{ backgroundColor: "black", borderBottomWidth: 1 }} />

                <div style={{ height: "30px" }} />
                <p style={{ fontSize: "60px" }}>
                    Our Mission
                </p>
                <p style={{ fontSize: "36px" }}>
                    Candid gets you the information you need to do good.
                </p>
                <Divider sx={{ backgroundColor: "black", borderBottomWidth: 1 }} />

                <div style={{ height: "30px" }} />
                <p style={{ fontSize: "60px" }}>
                    Our vision
                </p>
                <p style={{ fontSize: "24px" }}>
                    We envision a social sector capable of tackling the critical challenges and opportunities of our time.
                    Learn more about our 2030 vision.
                </p>
                <Divider sx={{ backgroundColor: "black", borderBottomWidth: 1 }} />

                <div style={{ height: "30px" }} />
                <p style={{ fontSize: "60px" }}>
                    Our values 
                </p>
                <p style={{ fontSize: "24px", lineHeight: "36px" }}>
                    We're driven. We make an impact in everything we do.
                    <br />
                    We're direct. We communicate with integrity and clarity.
                    <br />
                    We're accessible. We ask, “How can we help?” and we mean it.
                    <br />
                    We're curious. We listen, collaborate, and innovate.
                    <br />
                    We're inclusive. We incorporate equity, inclusion, and respect for diverse perspectives in all our work.
                </p>
                <Divider sx={{ backgroundColor: "black", borderBottomWidth: 1 }} />

                <div style={{ height: "30px" }} />
                <p style={{ fontSize: "48px", lineHeight: "60px" }}>
                    Our diversity, equity, and inclusion commitment
                </p>
                <p style={{ fontSize: "18px" }}>
                    Candid is committed to creating an environment where our employees and stakeholders feel safe and supported showing up as their whole selves. We incorporate equity, inclusion, and respect for diverse perspectives in all our work. We value and celebrate the diversity of our ideas, backgrounds, and experiences as they help us better understand one another and better serve our communities and constituents.
                    While we are steadfast in our commitment, we acknowledge that we may make mistakes. We recognize that race, equity, access, diversity, and inclusion efforts are emergent and evolving. They require us to learn, adapt, and iterate. We encourage and invite feedback from our staff and stakeholders so that we can be responsive to their needs. And we look to engage with and seek guidance from experts in the field to continue learning and improving. Together, we strive to deepen our understanding, strengthen our commitment, and align our policies, procedures, practices, programs, products, and services to ensure our employees and stakeholders thrive.
                </p>
                <Divider sx={{ backgroundColor: "black", borderBottomWidth: 1 }} />

                <div style={{ height: "30px" }} />
                <p style={{ fontSize: "60px" }}>
                    What we do 
                </p>
                <p style={{ fontSize: "18px" }}>
                    Every year, millions of nonprofits spend trillions of dollars around the world. Candid finds out where that money comes from, where it goes, and why it matters. Through research, collaboration, and training, Candid connects people who want to change the world to the resources they need to do it. Candid's data tools on nonprofits, foundations, and grants are the most comprehensive in the world. Foundation Center and GuideStar joined forces to become Candid, a 501c3 nonprofit organization.
                </p>
                <Divider sx={{ backgroundColor: "black", borderBottomWidth: 1 }} />

            </div>
        </Container>
    );
};