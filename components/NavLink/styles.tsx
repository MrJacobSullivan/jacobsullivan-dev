import tw, { styled, css } from 'twin.macro';
import Link from 'next/link';

interface ILink {
  isActive: boolean;
}

export const LinkContainer = styled(Link)(({ isActive = false }: ILink) => [
  tw`text-green-5`,
  isActive && tw`text-red-5`
]);

export const linkStyles = (isActive: boolean) => {
  return css(() => [tw`text-green-5`, isActive && tw`text-red-5`]);
};
