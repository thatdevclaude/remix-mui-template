import {
  Links,
  LinksFunction,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { getDesignTokens } from "./styles";
import { ThemeModeContext } from "./contexts";

export const meta: MetaFunction = () => {
  return { title: "Remix ❤ MUI" };
};

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap",
  },
];

function Document({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)");
  const initialMode = isDark ? "dark" : "light";
  const [mode, setMode] = useState<PaletteMode>("dark");

  useEffect(() => {
    const localMode = localStorage.getItem("theme-mode");
    if (localMode) {
      setMode(localMode as PaletteMode);
    } else {
      setMode(initialMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  const toggleThemeMode = useCallback(() => {
    setMode(mode === "dark" ? "light" : "dark");
  }, [mode]);

  const context = useMemo(
    () => ({
      themeMode: mode,
      toggleThemeMode,
    }),
    [mode, toggleThemeMode]
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <Document>
      <ThemeModeContext.Provider value={context}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Outlet />
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </Document>
  );
}
