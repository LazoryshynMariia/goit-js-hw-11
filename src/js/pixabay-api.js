import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const API_KEY = "54694633-cd733223458a0ec40216cbff4";

function getImagesByQuery(query) {
    return axios.get("", {
        params: {
            key: API_KEY,
            q: query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
        }
    })
        .then(res => res.data)
};

export {getImagesByQuery};