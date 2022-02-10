import * as React from 'react';
import Link from 'next/link';
import ThemeButton from '../ThemeButton';
import NavLink from '../NavLink';

import { links } from '../../config';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-between w-full h-10 px-5 py-10 mt-2 mb-10 rounded dark:bg-gray-8 bg-gray-2">
      <div className="flex items-center w-1/2">
        <Link href="/">
          <a className="text-xl font-light transition duration-150">
            Jacob Sullivan
          </a>
        </Link>
      </div>

      <nav className="w-1/2 bg-red-5">
        <NavLink href="/work" text="Work" />
        <NavLink external href="/resume" text="Resume" />
        <NavLink external href={links.githubURL} text="Github" />
        <ThemeButton />
      </nav>
    </header>
  );
};

export default Header;
