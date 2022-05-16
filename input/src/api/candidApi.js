import axios from "axios";

const baseUrl = "http://localhost:4000";

export const getEssentialsData = (data) => {
    return axios.get(baseUrl + "/search/essentials", {
        params: {
            data: data,
        },
    });
};

export const getGrantsData = (data) => {
    return axios.get(baseUrl + "/search/grants", {
        params: {
            data: data,
        },
    });
};

export const getNewsData = (data) => {
    return axios.get(baseUrl + "/search/news", {
        params: {
            data: data,
        },
    });
};