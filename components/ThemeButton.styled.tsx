import tw, { styled } from 'twin.macro';
import { SunIcon } from '@heroicons/react/outline';
import { MoonIcon } from '@heroicons/react/solid';

const Button = styled.button(() => [
  tw`transition duration-150 rounded bg-blue-2 dark:bg-yellow-2 hover:bg-blue-3 dark:hover:bg-yellow-3 active:outline-none ml-6`
]);

const iconTheme = tw`w-10 h-10 p-2 text-gray-0 dark:(text-gray-9)`;
const Sun = styled(SunIcon)(() => [iconTheme]);
const Moon = styled(MoonIcon)(() => [iconTheme]);

export { Button, Sun, Moon };
