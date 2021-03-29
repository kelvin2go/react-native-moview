import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Movies: {
            screens: {
              Movies: 'Movies',
            },
          },
          TV: {
            screens: {
              TV: 'TV'
            }
          }
        },
      },
      NotFound: '*',
    },
  },
};
