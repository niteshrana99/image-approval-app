import styled from 'styled-components';

export const FormContainer = styled.div`
    width:100% ;
    position: relative;
`;

export const ImageContainer = styled.div`
    height: 400px;
    width: 400px;
    border: 1px solid;
    margin: 0px auto ;
    position:relative;
`;

export const ButtonContainer = styled.div`
    margin: 0px auto;
    width: 400px;
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
`;
export const ContainerInfo = styled.div`
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const Info = styled.p`
    font-size: 12px;
    padding: 16px;
    
`;