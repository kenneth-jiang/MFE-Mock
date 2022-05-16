import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Input from "@mui/material/Input";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import SearchIcon from '@mui/icons-material/Search';
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import * as constants from "../utils/constants";

const StyledLink = styled(Link)(() => ({
    color: "black",
    lineHeight: "0.8"
    // padding: "10px",
}));

const theme = createTheme({
    customTextField: {
        "& input::placeholder": {
            fontSize: "20px"
        }
    }
});



const OldHeader = () => {
    return (
        <div style={{ backgroundColor: "#febe10", borderTop: "1px solid white", color: "black", fontFamily: "Algebra Web,Georgia,serif", fontWeight: "normal", }}>
            <Container style={{ paddingTop: "20px", paddingBottom: "10px", maxHeight: "auto" }}>
                <Grid container spacing={2}>
                    <Grid item xs={2} style={{ borderRight: "1px solid white", textAlign: "left" }}>
                        <div style={{ maxHeight: "35px", maxWidth: "90%" }}>
                            <img style={{ maxWidth: "100%", height: "auto" }} src={constants.candidImage} />
                        </div>
                        <br />
                        <h2 style={{ lineHeight: "1.5", fontWeight: "normal", fontSize: "24px" }}>
                            See the world.
                            <br />
                            Make it better.
                        </h2>
                        <br />
                        <br />
                        <Link style={{ cursor: "pointer", color: "black" }} href="https://cLinkndid.org/contact-us">{constants.contactUs}</Link>
                        <br />
                        <br />
                        <span>
                            <span style={{ padding: "3px" }}>
                                <Link href="https://www.facebook.com/CandidDotOrg" target="_blank">
                                    <FacebookIcon fontSize="small" style={{ cursor: "pointer", backgroundColor: "black", color: "white" }} />
                                </Link>
                            </span>
                            <span style={{ padding: "3px" }}>
                                <Link href="https://www.twitter.com/CandidDotOrg" target="_blank">
                                  <TwitterIcon fontSize="small" style={{ cursor: "pointer", backgroundColor: "black", color: "white" }} />
                                </Link>
                            </span>
                            <span style={{ padding: "3px" }}>
                                <Link href="https://www.youtube.com/c/CandidDotOrg" target="_blank">
                                    <YouTubeIcon fontSize="small" style={{ cursor: "pointer", backgroundColor: "black", color: "white" }} />
                                </Link>
                            </span>
                            <span style={{ padding: "3px" }}>
                                <Link href="https://www.linkedin.com/company/candiddotorg/" target="_blank">
                                    <LinkedInIcon fontSize="small" style={{ cursor: "pointer", backgroundColor: "black", color: "white" }} />
                                </Link>
                            </span>
                            <span style={{ padding: "3px" }}>
                                <Link href="https://www.instagram.com/CandidDotOrg/" target="_blank" >
                                    <InstagramIcon fontSize="small" style={{ cursor: "pointer", backgroundColor: "black", color: "white" }} />
                                </Link>
                            </span>
                        </span>
                    </Grid>
                    <Grid item xs={10} style={{ paddingLeft: "20px" }}>
                        <Grid item xs={12}>
                            <span style={{ fontSize: "24px", paddingBottom: "20px" }}>
                                What do you need to move forward?
                            </span>
                        </Grid>
                        <br />
                        <Grid container>
                            <Grid item xs={6}>
                                <strong style={{ fontSize: "20px" }}>
                                    Our websites
                                </strong>
                                <Grid container>
                                    <Grid item={6}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <br />
                                                <StyledLink style={{ color: "black"}} underline="hover" href={constants.candidUrl} target="_blank">
                                                    <span>
                                                        Candid
                                                    </span>
                                                </StyledLink>
                                                <br />
                                                <br />
                                                <StyledLink style={{ color: "black"}} underline="hover" href={constants.candidLearningUrl} target="_blank">
                                                    Candid Learning
                                                </StyledLink>
                                                <br />
                                                <br />
                                                <StyledLink style={{ color: "black"}} underline="hover" href={constants.candidLearningForFundersUrl} target="_blank">
                                                    Candid Learning for Funders
                                                </StyledLink>
                                                <br />
                                                <br />
                                                <StyledLink style={{ color: "black"}} underline="hover" href={constants.cfInsightsUrl} target="_blank">
                                                    CF Insights
                                                </StyledLink>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <br />
                                                <StyledLink style={{ color: "black"}} underline="hover" href={constants.glasspocketsUrl} target="_blank">
                                                    GlassPockets
                                                </StyledLink>
                                                <br />
                                                <br />
                                                <StyledLink style={{ color: "black"}} underline="hover" href={constants.guidestarUrl} target="_blank">
                                                    GuideStar
                                                </StyledLink>
                                                <br />
                                                <br />
                                                <StyledLink style={{ color: "black"}} underline="hover" href={constants.issueLabUrl} target="_blank">
                                                    Issue Lab
                                                </StyledLink>
                                                <br />
                                                <br />
                                                <StyledLink style={{ color: "black"}} underline="hover" href={constants.philanthropyNewsDigest} target="_blank">
                                                    Philanthropy News Digest
                                                </StyledLink>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item={6}>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <strong style={{ fontSize: "20px" }}>
                                    Our products and services
                                </strong>
                                <Grid container>
                                    <Grid item={6}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={6}>
                                                <br />
                                                <StyledLink style={{ color: "black" }} underline="hover" href={constants.foundationDirectoryOnlineUrl} target="_blank">
                                                    <span>
                                                        Foundation Directory Online
                                                    </span>
                                                </StyledLink>
                                                <br />
                                                <br />
                                                <StyledLink style={{ color: "black" }} underline="hover" href={constants.foundationMapsUrl} target="_blank">
                                                    Foundation Maps
                                                </StyledLink>
                                                <br />
                                                <br />
                                                <StyledLink style={{ color: "black" }} underline="hover" href={constants.apisUrl} target="_blank">
                                                    APIs
                                                </StyledLink>
                                                <br />
                                                <br />
                                                <StyledLink style={{ color: "black" }} underline="hover" href={constants.fundingInformationNetworkUrl} target="_blank">
                                                    Funding Information Network
                                                </StyledLink>
                                                <br />
                                                <br />
                                                <StyledLink style={{ color: "black" }} underline="hover" href={constants.grantsToIndividualsUrl} target="_blank">
                                                    Grants to Individuals
                                                </StyledLink>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <br />
                                                <StyledLink style={{ color: "black" }} underline="hover" href={constants.guidestarProUrl} target="_blank">
                                                    GuideStar Pro
                                                </StyledLink>
                                                <br />
                                                <br />
                                                <StyledLink style={{ color: "black" }} underline="hover" href={constants.guidestarCharityCheckUrl} target="_blank">
                                                    GuideStar Charity Check
                                                </StyledLink>
                                                <br />
                                                <br />
                                                <StyledLink style={{ color: "black" }} underline="hover" href={constants.nonprofitCompensationReportUrl} target="_blank">
                                                    Nonprofit Compensation Report
                                                </StyledLink>
                                                <br />
                                                <br />
                                                <StyledLink style={{ color: "black" }} underline="hover" href={constants.nonprofitProfilesUrl} target="_blank">
                                                    Nonprofit profiles
                                                </StyledLink>
                                                <br />
                                                <br />
                                                <StyledLink style={{ color: "black" }} underline="hover" href={constants.nonprofitTrainingUrl} target="_blank">
                                                    Nonprofit training
                                                </StyledLink>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <div style={{ fontSize: "18px", backgroundColor: "black", color: "white", paddingTop: "14px", paddingBottom: "14px", fontFamily: "Algebra Web,Georgia,serif;" }}>
                <Container style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: "700" }}>
                        Candid gets you the information you need to do good.
                    </span>
                    <span style={{ display: "flex", alignItems: "center"}}>
                        <span>
                            Find us in your community
                            &nbsp;
                            &nbsp;
                        </span>
                        <span>
                            <ThemeProvider theme={theme}>
                                <Paper
                                    style={{ backgroundColor: "white", height: "30px", padding: "0px"}}
                                    component="form"
                                    sx={{ height: 36, backgroundColor: "white", p: '2px 4px', display: 'flex', alignItems: 'center', width: 280 }}
                                >
                                    <InputBase
                                        disabled={true}
                                        inputProps={{ style: { fontSize: "12px", marginTop: "auto" }}}
                                        size="small"
                                        sx={{ ml: 1, flex: 1 }}
                                        placeholder="Enter ZIP code, city, state, or country"
                                        style={{ display: "flex"}}
                                        />
                                    {/* <Divider sx={{ height: 36, m: 0.5 }} orientation="vertical" /> */}
                                    <SearchIcon style={{ backgroundColor: "#febe10", maxHeight: "auto", maxWidth: "auto" }} sx={{ p: '3px' }} aria-label="directions">
                                    </SearchIcon>
                                </Paper>
                            </ThemeProvider>    
                        </span>
                    </span>
                </Container>
            </div>
        </div>
    );
};

export default OldHeader;