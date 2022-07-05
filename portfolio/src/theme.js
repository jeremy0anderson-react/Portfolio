import { createTheme, createStyles, useColorScheme } from '@mui/material'
export const theme  = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: 'rgba(213,18,42,0.91)',
        },
        secondary: {
            main: 'rgba(15,100,227,0.95)',
        },
    },
    overrides: {
        MuiSwitch: {
            root: {
                width: 42,
                height: 26,
                padding: 0,
                margin: 8,
            },
            switchBase: {
                padding: 1,
                '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
                    transform: 'translateX(16px)',
                    color: '#fff',
                    '& + $track': {
                        opacity: 1,
                        border: 'none',
                    },
                },
            },
            thumb: {
                width: 30,
                height: 30,
            },
            track: {
                borderRadius: 13,
                border: '1px solid #bdbdbd',
                backgroundColor: '#fafafa',
                opacity: 1,
                transition: 'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            },
        },
    },
    spacing: 5,
    direction: 'rtl',
    shape: {
        borderRadius: 7,
    },
});