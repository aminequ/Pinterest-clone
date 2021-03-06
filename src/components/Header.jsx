import React, { useContext} from 'react'
import '../pages/Home/styles.scss';
import { Link } from 'react-scroll';
import { isLoginContext } from '../pages/Home/Home';



export function Logo() {
    return (
        <div className='flex'>
            <div className='h-[32px] w-[32px]'>
                <img  src='/logo.svg' alt='pinterest'/>
            </div>
            <h1 className='text-vermilion-100 text-xl ml-1'>Pinterest</h1>
        </div>
    )
}



function NavBar() {
    let [isloginPage, setLoginPage] = useContext(isLoginContext)
    
    const handleLogin = () => {
        console.log(isloginPage)
        setLoginPage(!isloginPage)
    }

    return (
        <div className='flex  justify-around '>
            <div className=''>
                <ul className='nav-menu flex'>
                    <li className='mx-3 text-lg'><a href="/about" className="bg-transparent text-black hover:underline">About</a></li>
                    <li className='mx-3 text-lg'><a href="/business" className="bg-transparent text-black hover:underline">Business</a></li>
                    <li className='mx-3 text-lg'><a href="/blog" className="bg-transparent text-black hover:underline">Blog</a></li>
                </ul>
            </div>
            <div className='w-[50%] ml-6'>
                <Link to='login'>
                    <a  onClick={handleLogin} href="login" className="mx-2 px-4 py-3 bg-vermilion-100 rounded-full text-white hover:bg-vermilion-200">Log in</a>
                </Link>
                <Link to='signup' smooth={true}>
                <a href="signup" className="px-4 py-3 bg-gray rounded-full  text-black hover:bg-gray-200">Sign up</a>
                </Link >
            </div>
        </div>
    )
}




function Header() {
    return (
        <header id='header' className='flex p-6 justify-between bg-white'>
            <Logo />
            <NavBar />
        </header>
    )
}

export default Header
