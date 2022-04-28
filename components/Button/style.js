import styled from 'styled-components';

export const StyledButton = styled.button`
    cursor: pointer;
    width: ${props => props.width ? props.width : '100%'};
    border-radius: 25px;
    border: none;
    color: ${props => props.color || 'white'};
    background-color:${props => (props.bgcolor)};
    font-size: 16px;
    padding: 8px;
    height: -webkit-fill-available;
    &:hover {
        /* transform: scale(1.01);
        transition: all 1s ease ; */
    }
`;
