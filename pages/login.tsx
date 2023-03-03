import Button from '@mui/material/Button';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import WhatsAppLogo from '../assets/whatsapplogo.png';
import { auth } from '../config/firebase';

const StyledContainer = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
    background-color: whitesmoke;
`;

const StyledLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 4px 14px -3px rgba(0, 0, 0, 0.7);
`;

const StyledImageWrapper = styled.div`
    margin-bottom: 50px;
`;

export default function Login() {
    const [signInWithGoogle, _user, _loading, _error] = useSignInWithGoogle(auth);

    const signIn = () => {
        signInWithGoogle()
    }
    return (
        <StyledContainer>
            <Head>
                <title>Login</title>
            </Head>

            <StyledLoginContainer>
                <StyledImageWrapper>
                    <Image src={WhatsAppLogo} alt="whatsapp logo" height="200px" width="200px" />
                </StyledImageWrapper>
                <Button variant="outlined" onClick={signIn}>
                    Sign in with GG
                </Button>
            </StyledLoginContainer>
        </StyledContainer>
    );
}
