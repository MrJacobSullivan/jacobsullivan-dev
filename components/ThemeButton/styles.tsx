import tw, { styled } from 'twin.macro';
import { HiSun, HiOutlineMoon } from 'react-icons/hi';

export const Button = styled.button(() => [
  tw`ml-6 transition duration-150 rounded border-[0.2rem] bg-blue-2 hover:bg-blue-4 border-blue-6 dark:bg-yellow-2 dark:hover:bg-yellow-4 active:outline-none dark:border-yellow-6`
]);

const iconTheme = tw`w-10 h-10 p-2 text-gray-0 dark:text-gray-9`;
export const Sun = styled(HiSun)(() => [iconTheme]);
export const Moon = styled(HiOutlineMoon)(() => [iconTheme]);
