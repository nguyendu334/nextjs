import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

import { auth, db } from '../config/firebase';
import Login from './login';
import '../styles/globals.css';
import Loading from '../components/Loading';

function MyApp({ Component, pageProps }: AppProps) {
    const [loggedInUser, loading, _error] = useAuthState(auth);

    useEffect(() => {
        const setUseInDb = async () => {
            try {
                await setDoc(
                    doc(db, 'users', loggedInUser?.email as string),
                    {
                        email: loggedInUser?.email,
                        lastSeen: serverTimestamp(),
                        photoURL: loggedInUser?.photoURL,
                    },
                    { merge: true },
                );
            } catch (error) {
                console.log(error);
            }
        };
        if (loggedInUser) {
            setUseInDb();
        }
    }, [loggedInUser]);

    if (loading) {
        return <Loading />;
    }
    if (!loggedInUser) {
        return <Login />;
    }
    return <Component {...pageProps} />;
}

export default MyApp;
