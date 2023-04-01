import axios from "axios";


export default axios.create({
    baseURL:`https://api.rawg.io/api`,
    params:{
        key:`f1663a70e50442c5ab4babd094504199`

    }
})