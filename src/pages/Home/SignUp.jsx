import React, {useRef} from 'react'
import {Link} from 'react-scroll';
import { Icon } from '@iconify/react';



function Form(){


    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const ageRef = useRef(null)

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            email: emailRef.current.value,
            message: passwordRef.current.value,
            ageRef: ageRef.current.value,
        }
        alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
    }

    return(
        <>
            <form onSubmit={handleSubmit} className='flex flex-col mt-4 w-full mx-auto'>
            <input 
                type="email" 
                name="email"
                id="email"
                className="email border-gray text-black border-2 p-3 mt-1 h-[50px] rounded-2xl w-[60%] mx-auto"
                placeholder="Email"
                ref={emailRef}
                tabindex="1" 
            /> 
            <input 
                type="password" 
                name="password"
                id="password"
                className="password border-gray text-blac border-2 p-3 mt-1 h-[50px] rounded-2xl w-[60%] mx-auto"
                placeholder="Password"
                ref={passwordRef}
                tabindex="2" 
            />        
            <input 
                type="age" 
                name="age"
                id="age"
                className="age border-gray text-black border-2 p-3 mt-1 h-[50px] rounded-2xl w-[60%] mx-auto"
                placeholder="Age"
                ref={ageRef}
                tabindex="3" 
            /> 
                 
            </form>
        </>
    )
}

function SignUp({position}) {


    return (


            <div id='signup' className={`signup  w-screen bg-black flex flex-row-reverse justify-between bg-black/[.7] absolute ${position} `}>
                <div className='h-screen w-[700px] bg-white rounded-3xl relative flex flex-col'>
                        <button className='rounded-full bg-transparent hover:bg-gray h-[40px] w-[40px] flex justify-center items-center absolute right-3 top-3'><Icon icon="bi:x" width="38" /></button>
                    <div className='w-[40px] h-[40px] mt-4 mx-auto'>
                        <img className='w-[100%] h-[100%]' src="/logo.svg" alt="pinterest logo" />
                    </div>
                    <h1 className='text-center text-4xl mt-1 text-[#333333] mx-auto'>Welcome to Pinterest</h1>
                    <Form />
                    <a href='/forgetpassword' className='forgetpassword text-black text-start w-[60%] mx-auto hover:decoration-solid decoration-black'>Forgot your password?</a>
                    <button className='w-[60%] text-center mx-auto rounded-2xl py-2 mt-3 text-white bg-vermilion-100 hover:bg-vermilion-200'>Log in</button>
                    <p className='text-center text-[16px] my-2 text-[#333333]'>OR</p>
                    <button className='facebooklogin w-[60%] text-center mx-auto rounded-full py-1 px-4 text-lg text-white bg-blue flex justify-between items-center'><Icon icon="bx:bxl-facebook-circle" color="white" width="32" /> Continue with Facebook</button>
                    <button className='googlelogin w-[60%] text-center mx-auto rounded-full py-1 px-4 text-lg  mt-1 text-[#333333] border-2 border-gray bg-transparent flex justify-between items-center'><Icon icon="flat-color-icons:google" color="white" width="32" />Continue with Google</button>
                    <p className='termsservices w-[80%] mx-auto text-center text-[12px] mt-2'>
                    By continuing, you agree to Pinterest's <strong>Terms of Service </strong> and acknowledge you've read our <strong>Privacy Policy </strong>
                    </p>
                    <span className='w-[40%] mx-auto bg-gray mt-1 rounded-full h-[0.5px]'></span>
                    <a href="/signup" className='w-[60%] mx-auto text-center text-[12px] mt-1 text-[#333333] cursor-pointer'>Already a member? Log in</a>
                    <p className='w-[60%] mx-auto text-center text-[12px] mt-1 text-black cursor-pointer'>Are you a business? Get started here!</p>
                </div>
                <div className='w-[20%] relative'>
                <Link to='header' smooth={true}>
                    <button className={`up-arrow flex items-center justify-center rounded-full h-[54px] w-[54px] bg-darkYello absolute top-6`} ><Icon icon="ep:arrow-down-bold" color="white" width="36"/></button>
                    </Link>
                </div>
                <div>
                    <h1 className='text-7xl text-white text-center'>Sign up to access more ideas</h1>
                </div>
            </div>
        )
}

export default SignUp
