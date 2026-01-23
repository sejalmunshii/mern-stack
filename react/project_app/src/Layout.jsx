import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';

function Layout({children}) {
    const[theme,settheme]=useState("dark");

    useEffect(()=>{
        document.body.classList.remove("light","dark");
        document.body.classList.add(theme)
    },[theme]);


  return (
    <>
       <Navbar theme={theme} settheme={settheme} />
       {children}
    </>
  )
}

export default Layout