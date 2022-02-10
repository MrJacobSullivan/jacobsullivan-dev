export const linkStyles = (isActive: boolean) => {
  let style = 'ml-2 font-light hover:cursor-pointer';
  if (isActive) style += ' border-b';
  return style;
};
