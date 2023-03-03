import styled from 'styled-components';
import Image from 'next/image';
import CircularProgress from '@mui/material/CircularProgress'; 

import WhatsAppLogo from '../assets/whatsapplogo.png';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const StyledImageWrapper = styled.div`
    margin-bottom: 50px;
`;

export default function Loading() {
    return (
        <StyledContainer>
            <StyledImageWrapper>
                <Image src={WhatsAppLogo} alt="whatsapp logo" height="200px" width="200px" />
            </StyledImageWrapper>
        <CircularProgress />
        </StyledContainer>
    );
}
