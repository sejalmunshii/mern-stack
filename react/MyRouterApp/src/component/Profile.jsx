import React from 'react'
import { useNavigate } from 'react-router'

function Profile() {
    const navigate=useNavigate();

    function goBack(){
        navigate("/")
    }
  return (
    <>
    <button onClick={goBack}>go to home</button>
    </>
  )
}
export default Profile