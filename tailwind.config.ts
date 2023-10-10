import type { Config } from 'tailwindcss'
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
    theme:{
        extend: {
            colors: {
                'primary': '#104CBA',
                'secondary': '#050D36',
                'secondary-content': '#913BFF',
            },
            fontFamily: {
                'sans': ['"Clash Display"', ...defaultTheme.fontFamily.sans]
            },
            screens: {
                'xs': '360px',
                ...defaultTheme.screens,
            }
        },
    }
}
