// import React, { useEffect } from "react";
// import { getEssentialsData, getGrantsData, getNewsData } from "../../api/candidApi";

// const ResultsContent = () => {
//     useEffect(() => {
//         getNewsData("candid").then((res) => console.log(res))
//     }, []);

//     return (
//         <div>
//             Hello World
//         </div>
//     );
// };

// export default ResultsContent;

import React, { useState, useEffect, useContext } from 'react';
import { UNSAFE_NavigationContext } from "react-router-dom";
import { getNewsData } from "../../api/candidApi";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';

export default ({ newsArticles }) => {
    // const [ newsArticles, setNewsArticles ] = useState([]);
    // const { navigator } = useContext(UNSAFE_NavigationContext);

    // useEffect(() => {
    //     const getAsyncNewsData = async () => {
    //         console.log(navigator.location, "THIS IS SPARta")
    //         if (navigator.location.search !== "") {
    //             console.log("BOFJDKLSF", navigator.location.search)
    //             let response = await getNewsData(navigator.location.search.split("?=")[0]);
    //             console.log(response.data.data);
    //             setNewsArticles(response.data.data);
    //         };
    //     };
    //     getAsyncNewsData();
    // }, [navigator.location]);

    const unixTimestampToTimeAgo = (date) => {
        let time = Date.parse(date) / 1000;
        let currentTime = Date.parse(new Date()) / 1000;
        let differenceInTime = Math.floor((currentTime - time) / 60);
        if (differenceInTime < 0) {
            return "";
        } else if (differenceInTime > 1440) {
            let days = Math.floor(differenceInTime / 1440);
            if (days === 1) {
                return days + " day ago";
            };
            return days + " days ago";
        } else if (differenceInTime > 60) {
            let hours = Math.floor(differenceInTime / 60);
            if (hours === 1) {
                return hours + " hour ago";
            };
            return hours + " hours ago";
        } else if (differenceInTime < 60) {
            if (differenceInTime === 1) {
                return differenceInTime + " minute ago";
            };
            return differenceInTime + " minutes ago"
        } else if (differenceInTime < 1) {
            return "Less than 1 minute ago";
        };
    };

    return (
        newsArticles &&
        <Paper elevation={0} style={{ padding: "30px 20px 30px 20px", overflow: "auto", maxWidth: "100%" }}>
            {newsArticles.map((newsArticle, index) => {
                return (
                    <div key={newsArticle + index}>
                        <Grid container spacing={3} style={{ maxWidth: "100%", paddingBottom: "30px" }}>
                            <Grid item xs={3}>
                                <img src={newsArticle.image} style={{ textAlign: "center", maxHeight: "180px", maxWidth: "200px" }} />
                            </Grid>
                            <Grid item xs={9} style={{ maxHeight: "100%" }}>
                                <Card elevation={2} style={{ maxWidth: "100%", maxHeight: "100%" }}>
                                    <CardContent>
                                        <Grid container spacing={0}>
                                            <Grid item xs={8}>
                                                <strong style={{ cursor: "pointer" }} onClick={() => window.open(newsArticle.link)}>
                                                    {newsArticle.title}
                                                </strong>
                                                <br />
                                                <span style={{ fontSize: "smaller" }} dangerouslySetInnerHTML={{ __html: newsArticle.content }} />
                                                <br />
                                                <br />
                                                <br />
                                                <div>
                                                    <span style={{ fontSize: "13px" }}>
                                                        Subjects: &nbsp;
                                                    </span>
                                                    {newsArticle.philanthropy_classification_system.subjects.map((subject, index) => {
                                                        let lastIndex = newsArticle.philanthropy_classification_system.subjects.length - 1;
                                                        if (index !== lastIndex) {
                                                            return (
                                                                <span style={{ fontSize: "13px" }}>{subject.taxonomy_code_description + ", "}</span>
                                                            );
                                                        }
                                                        return <span style={{ fontSize: "13px" }}>{subject.taxonomy_code_description}</span>
                                                    })}
                                                </div>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <img src={newsArticle.icon_url} style={{ height: "100px", width: "100px", float: "right" }} />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    {/* <br /> */}
                                    <div style={{ flexGrow: 1 }} />
                                    <Divider />
                                    <CardActions style={{ maxHeight: "40px" }}>
                                        <img src={newsArticle.icon_url} style={{ height: "20px", width: "20px" }} />
                                        &nbsp;
                                        &nbsp;
                                        <span style={{ cursor: "pointer", fontSize: "smaller" }} onClick={() => window.open(newsArticle.base_url)}>
                                            {newsArticle.base_url}
                                        </span>
                                        <div style={{ flexGrow: 1 }} />
                                        <span style={{ fontStyle: "italic", fontSize: "smaller" }}>
                                            {unixTimestampToTimeAgo(newsArticle.added_date)}
                                        </span>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                );
            })}
        </Paper>
    );
};