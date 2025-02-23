import { themes } from "./themes";
import { selectedTheme } from "../store/store";

const applyThemeToDom = (theme) => {
  const root = document.documentElement;
  const themeColors = themes.find((t) => t.name === theme).colors;
  Object.keys(themeColors).forEach((key) => {
    root.style.setProperty(`--color-theme-${key}`, themeColors[key]);
  });
};
export const cycleTheme = () => {
  const currentTheme = selectedTheme.get();
  const nextIndex = (currentTheme + 1) % themes.length;
  selectedTheme.set(nextIndex);
  applyThemeToDom(themes[nextIndex].name);
};
