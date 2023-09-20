"use client"

import { 
  createTheme, 
  ThemeOptions, 
  ThemeProvider 
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import { Roboto } from "next/font/google";


const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const themeOptions: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            animation: 'none !important',
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  palette: {
    
  },
  typography: {
    fontSize: 12,
    fontFamily: roboto.style.fontFamily,
  }
}

const theme = createTheme(themeOptions);

export default function ThemeRegistry({children}: {children: React.ReactNode}){
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}





