import * as React from 'react';
import Link from 'next/link';
import ThemeButton from '../ThemeButton';
import NavLink from '../NavLink';

import { links } from '../../config';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex w-full h-10 px-5 py-10 mt-2 mb-10 rounded dark:bg-gray-8 bg-gray-2">
      <div className="flex items-center w-1/2 bg-red-5">
        <Link href="/">
          <a className="text-xl font-light transition duration-150 hover:underline">
            Jacob Sullivan
          </a>
        </Link>
      </div>

      <div className="flex items-center justify-end w-1/2 bg-red-5">
        <nav>
          <NavLink href="/work" text="Work" />
          <NavLink external href="/resume" text="Resume" />
          <NavLink external href={links.githubURL} text="GitHub" />
        </nav>

        <ThemeButton />
      </div>
    </header>
  );
};

export default Header;
