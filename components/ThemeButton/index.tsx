import * as React from 'react';
import { useIsMounted } from '../../hooks/useIsMounted';
import { useThemeToggle } from '../../hooks/useThemeToggle';
import { Button, Sun, Moon } from './styles';

const ThemeSwitchButton = () => {
  const mounted = useIsMounted();
  const [theme, toggleTheme] = useThemeToggle();

  if (!mounted) return null;

  return (
    <Button onClick={toggleTheme}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </Button>
  );
};

export default ThemeSwitchButton;
