import axios from "axios";
const KEY = "AIzaSyATOKd6AXgLjXMyFedR4FHwUrRc6dxGPiM";

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3/playlistItems",
    params: {
        part: "snippet",
        maxResults:5,
        key : KEY
    },
    headers:{}

})