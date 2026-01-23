import React, { useState } from 'react';

function Formtask() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [pass, setPass] = useState('')

   const emailHandler=(e)=>{
       setEmail(e.target.value)
   }

    const nameHandler=(e)=>{
       setName(e.target.value)
   }

    const passHandler=(e)=>{
       setPass(e.target.value)
   }
   const prevent=(e)=>{
      e.preventDefault();
   }
  return (
    <>
      <div className="d-flex">
        <div className="container py-4" style={{ maxWidth: 540 }}>
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-3">Sign up</h5>


              <form onSubmit={prevent}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Your full name"
                     value={name}
                    onChange={nameHandler}
                  />
                </div>


                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                    value={email}
                    onChange={emailHandler}
                  />
                </div>


                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter a secure password"
                     value={pass}
                    onChange={passHandler}
                  />
                </div>


                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    
                    Create account
                  </button>
                </div>
              </form>


              <hr />
              
            </div>
          </div>
        </div>
        <div className="container py-4" style={{ maxWidth: 540 }}>
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-3">Information</h5>

              <h3>Name</h3>
              <span className='bg-dark text-light px-5'>{name}</span>

               <h3>email</h3>
              <span className='bg-dark text-light px-5'>{email}</span>

               <h3>password</h3>
              <span className='bg-dark text-light px-5'>{pass}</span>


            


             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Formtask;
