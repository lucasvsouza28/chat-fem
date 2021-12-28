// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
        white: string;
        pale_red: string;
        soft_red: string;
        light_grayish_blue: string;
        moderate_blue: string;
        light_gray: string;
        very_light_gray: string;
        grayish_blue: string;
        dark_blue: string;
      }
  }
}