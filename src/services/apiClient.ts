import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "92030d3c01d24f1b9ef90018c273eb62"
    }
})