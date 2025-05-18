import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [show,setShow] = useState(false);
    const histroy = useNavigate();
    
    const transitionNavBar = ()=>{
        if(window.scrollY > 100){
            setShow(true);
        }
        else{
            setShow(false);
        }
    }
    
    useEffect(()=>{
        window.addEventListener('scroll', transitionNavBar);
        return()=>
            window.removeEventListener('scroll', transitionNavBar);
    },[]);


    return (
        <>
            <div className={`navbar ${show &&'navbar_black' } `}>
                <div className='navbar_contents'>
                    <img onClick={()=>histroy('/')} className='navbar_logo' src='https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png' alt='Netflix Logo' />
                    <img onClick={()=>histroy('/profile')} className='navbar_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Netflix Avatar' />
                </div>
            </div>
        </>
    )
}

export default Navbar