export const linkStyles = (isActive: boolean) => {
  let style =
    'ml-2 font-light hover:cursor-pointer transition duration-150 hover:underline';
  if (isActive) style += ' border-b';
  return style;
};
