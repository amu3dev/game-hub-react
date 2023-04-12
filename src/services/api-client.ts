import axios from "axios";

export default axios.create({
        
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "9e4f180eea7b40389a378fbf1eed0537",
    },
});
