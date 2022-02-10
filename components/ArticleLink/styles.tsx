import tw, { styled, css } from 'twin.macro';

const Card = styled.article(() => [tw`p-4 rounded bg-gray-5 `]);

const linkStyles = css(() => [tw`text-gray-9 hover:cursor-pointer`]);

export { Card, linkStyles };
