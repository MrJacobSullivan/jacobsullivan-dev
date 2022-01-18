import tw, { styled } from 'twin.macro';

interface INavigationContainer {}

const NavigationContainer = styled.nav<INavigationContainer>(() => [tw`flex`]);

export { NavigationContainer };
