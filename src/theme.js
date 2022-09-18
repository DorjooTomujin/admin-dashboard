import {extendTheme} from '@chakra-ui/react'
const fonts = { mono: `'Menlo', monospace`}

const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px'
}

const theme = extendTheme({
    breakpoints,
    styles: {
        global: {
            body: {
                // bg
            }
        }
    },
    colors: {
        pink: {
            main: '#F1416C'
        },
        gray: {
            main: '#e9edf1',
            secondary: '#7e8299'
        },
        green: {
            main: '#50cd89',
            secondary: '#e8fff3',
        },
        blue: {
            main: '#009ef7'
        }
    }
})

export default theme