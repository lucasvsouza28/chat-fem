import styled from 'styled-components';
import { ThemeTokens } from '../../../../theme';

export const Container = styled.button`

    > svg {
      fill: ${ props => (props.theme as ThemeTokens).color.light_grayish_blue };
    }

    :hover {
        > svg {
            fill: ${ props => (props.theme as ThemeTokens).color.moderate_blue }; 
        }
    }

    :active {
        transform: scale(.9)
    }
`;