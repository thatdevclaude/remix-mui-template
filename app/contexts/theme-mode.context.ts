import { PaletteMode } from "@mui/material";
import { createContext, useContext } from "react";

export interface ThemeModeContextType {
  themeMode: PaletteMode;
  toggleThemeMode: () => void;
}

export const ThemeModeContext = createContext({} as ThemeModeContextType);

export function useThemeMode() {
  const context = useContext(ThemeModeContext);
  return context;
}

export function useThemeModeValue<TLight = unknown, TDark = unknown>(
  light: TLight,
  dark: TDark
) {
  const { themeMode } = useThemeMode();
  return themeMode === "dark" ? dark : light;
}
