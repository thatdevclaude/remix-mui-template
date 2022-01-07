import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useThemeMode, useThemeModeValue } from "~/contexts";

export function ThemeModeSwitch() {
  const { toggleThemeMode } = useThemeMode();

  return (
    <Tooltip
      title={useThemeModeValue("Turn off the light", "Turn on the light")}
    >
      <IconButton onClick={toggleThemeMode} color="primary" disableTouchRipple>
        {useThemeModeValue(<DarkModeOutlined />, <LightModeOutlined />)}
      </IconButton>
    </Tooltip>
  );
}
