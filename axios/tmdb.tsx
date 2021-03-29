import axios from 'axios';
// default https://api.themoviedb.org/3/trending/movie/week?api_key=7ec07ec0ddc329b21a41969c6c481383
import Constants from 'expo-constants';

const TmAxios = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 10000,
    params: {
        'api_key': Constants.manifest.extra.TMDB_TOKEN
    }
});
TmAxios.interceptors.request.use((config) => {
    config.params = config.params || {};
    config.params['api_key'] = Constants.manifest.extra.TMDB_TOKEN;
    return config;
});

export default TmAxios