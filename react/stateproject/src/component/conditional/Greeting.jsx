import { useState } from 'react';

function Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="p-5 text-center">
      {isLoggedIn ? (
        <>
          <h2>welcome back</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      ) : (
        <>
          <h2>guest mode</h2>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        </>
      )}
    </div>
  );
}

export default Greeting;