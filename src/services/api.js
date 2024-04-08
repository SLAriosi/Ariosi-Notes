import axios from "axios";

export const api = axios.create({
   baseURL: "https://ariosinotes-api-290965fdcf66.herokuapp.comlocalhost:3333"
})