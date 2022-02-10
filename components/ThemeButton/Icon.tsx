import * as React from 'react';
import { HiSun, HiOutlineMoon } from 'react-icons/hi';

const Icon: React.FC<{ theme: string | undefined }> = ({ theme }) => {
  if (theme === 'dark') {
    return <HiSun className="w-10 h-10 p-2 text-gray-0 dark:text-gray-9" />;
  }

  return (
    <HiOutlineMoon className="w-10 h-10 p-2 text-gray-0 dark:text-gray-9" />
  );
};

export default Icon;
