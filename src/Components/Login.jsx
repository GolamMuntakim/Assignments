import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import Lottie from 'lottie-react';
import login from '../login.json'
import { Helmet } from "react-helmet-async";


const Login = () => {
    const {signIn,signInWithGoogle,user,loading} = useContext(AuthContext)
    const navigate= useNavigate()
    const location = useLocation()
    const [error, setError] = useState('')
    const from = location.state || '/'
    useEffect(()=>{
      if(user){
        navigate('/')
      }
    },[navigate, user])
    //google sign in
    const handleGoogleSignin = async() =>{
        try{
            const result = await signInWithGoogle()
            console.log(result.user)
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,{
              email: result?.user?.email,
            },{
              withCredentials:true
            }) 
            console.log(data)
            toast.success('sign  in succesfully')
            navigate(from, {replace:true})
        }catch(err){
            console.log(err)
            toast.error(err?.message)
        }
    }

    //Authentication for email and password sign in 
    const handleSignin = async e =>{
        e.preventDefault()
        setError('')
        const form = e.target
        const email = form.email.value
        const pass = form.password.value 
        console.log({email, pass})
        try{
            const result = await signIn(email,pass)
            console.log(result.user)
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`,{
              email: result?.user?.email,
            },{
              withCredentials:true
            }) 
            console.log(data)
            navigate(from, {replace:true})
            toast.success('signin succesfully')
        }catch(err){
          if(err.code === 'auth/invalid-credential'){
            toast.error('Incorrect Password')
             window.location.reload()
          }else if(err.code === 'auth/user-not-found'){
            setError('user not found')
          }else{
            setError(err.message)
          }
            console.log(err)
            toast.error(err?.message)
        }
    }
    if(user|| loading ) return <div className="min-h-screen w-full flex items-center justify-center"><span className="loading loading-infinity loading-lg  "></span></div>
    return (
        <div className="w-[350px] md:w-[400px] lg:w-[1260px] mx-auto">
          <Helmet>
            <title>
              Login
            </title>
          </Helmet>
             <div className='flex flex-col lg:flex-row items-center justify-center mx-auto'>
     <div className="w-[350px] lg:w-[400px] mx-auto"><Lottie animationData={login}></Lottie></div>
     <div className="w-[350px] lg:w-[400px] mx-auto"> 
      <div className='   rounded-lg   '>
        <div className=' mt-8 '>
          <form onSubmit={handleSignin}>
            <div className='mt-4'>
              <label
                className='block mb-2 text-sm font-medium text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                Email Address
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                placeholder="Email"
                name='email'
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='email'
                required
              />
            </div>

            <div className='mt-4'>
              <div className='flex justify-between'>
                <label
                  className='block mb-2 text-sm font-medium text-gray-600 '
                  htmlFor='loggingPassword'
                >
                  Password
                </label>
              </div>

              <input
                id='loggingPassword'
                autoComplete='current-password'
                name='password'
                placeholder="Password"
                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                type='password'
                required
              />
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
              >
                Sign In
              </button>
            </div>
          </form>

          <div className='flex items-center justify-between mt-4'>
            <span className='w-1/5 border-b  md:w-1/4'></span>

            <Link
              to='/register'
              className='text-xs text-gray-500 uppercase  hover:underline'
            >
              or sign up
            </Link>

            <span className='w-1/5 border-b  md:w-1/4'></span>
          </div>
          <div onClick={handleGoogleSignin} className='flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '>
            <div className='px-4 py-2'>
              <svg className='w-6 h-6' viewBox='0 0 40 40'>
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#FFC107'
                />
                <path
                  d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                  fill='#FF3D00'
                />
                <path
                  d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                  fill='#4CAF50'
                />
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#1976D2'
                />
              </svg>
            </div>

            <span className='w-5/6 px-4 py-3 font-bold text-center'>
              Sign in with Google
            </span>
          </div>
        </div>
      </div>
      </div>
    </div>
        </div>
    );
};

export default Login;