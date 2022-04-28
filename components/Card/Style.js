import styled from 'styled-components';
import { PlusLg } from '@styled-icons/bootstrap/PlusLg';
import { Tick } from '@styled-icons/typicons/Tick';
import Image from 'next/image';

export const CardContainer = styled.div`
    width: 15rem;
    border-radius: 20px;
    height: 8rem;
    position:relative ;
    background-color:#aaaaaa24 ;
    margin-top: 8px;
    cursor: pointer;
    display: inline-block;
`;

export const PlusIcon = styled(PlusLg)`
    width: 60%;
    height: 60%;
    color: lightgrey;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const TickIcon = styled(Tick)`
    position: absolute;
    z-index: 2;
    color: green;
    height: 25%;
    width:25%;
    background: white;
    right: 0%;
    border-bottom-left-radius: 15px;
    border-top: 1px solid #80808030 0;
    border-right: 1px solid #80808030;
`;

export const StyledImage = styled(Image)`
    border-radius: 15px;
`