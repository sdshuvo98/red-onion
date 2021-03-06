import React from 'react';
import GoogleIcon from '../../images/social-icon/google.png'
import FacebookIcon from '../../images/social-icon/facebook.png'
import GithubIcon from '../../images/social-icon/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useToken from '../../Hooks/useToken';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialMediaLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/home'

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user);

    if (token) {
        navigate(from, { replace: true });
    }
    return (
        <div className='flex justify-center pl-5 my-8'>
            <div>
                <div className='flex justify-center items-center opacity-60'>
                    <div className='w-[180px] h-[1px] bg-rose-300'></div>
                    <p className='mx-2'>or</p>
                    <div className='w-[180px] h-[1px] bg-rose-300'></div>
                </div>
                <div className='flex justify-center items-center gap-8 mt-5'>
                    <button onClick={() => signInWithGoogle()}><img className='h-[55px] border rounded-full p-2' src={GoogleIcon} alt="" /></button>
                    <button><img className='h-[60px] border rounded-full p-2' src={FacebookIcon} alt="" /></button>
                    <button><img className='h-[60px] border rounded-full p-2' src={GithubIcon} alt="" /></button>
                </div>
            </div>
        </div>
    );
};

export default SocialMediaLogin;