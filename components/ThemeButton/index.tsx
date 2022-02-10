import * as React from 'react';
import { useIsMounted } from '../../hooks/useIsMounted';
import { useThemeToggle } from '../../hooks/useThemeToggle';
import Icon from './Icon';

const ThemeSwitchButton = () => {
  const mounted = useIsMounted();
  const [theme, toggleTheme] = useThemeToggle();

  if (!mounted) return null;

  return (
    <button
      className="ml-6 transition duration-150 rounded bg-blue-2 hover:bg-blue-4 dark:bg-yellow-2 dark:hover:bg-yellow-4 active:outline-none"
      onClick={toggleTheme}
    >
      <Icon theme={theme} />
    </button>
  );
};

export default ThemeSwitchButton;
