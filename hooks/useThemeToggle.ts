import { useTheme } from 'next-themes';

export const useThemeToggle = (): [string | undefined, () => void] => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  return [theme, toggleTheme];
};
