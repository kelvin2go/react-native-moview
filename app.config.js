
import 'dotenv/config'

export default ({ config }) => {
    const appConfig = ({
        ...config,
        name: 'Moview',
        version: process.env.VERSION || "0.0.1",
        //override anything you want
        extra: {
            TMDB_TOKEN: process.env.EXPO_TMDB_TOKEN,
            IMG_BASE: process.env.EXPO_IMG_BASE
        }
    });
    return appConfig;
}