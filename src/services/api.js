// https://api.themoviedb.org/3/movie/now_playing?api_key=362663ab767ca323fcb96f2cb10cd6e7&language=pt-br

import axios from "axios";
import Axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;