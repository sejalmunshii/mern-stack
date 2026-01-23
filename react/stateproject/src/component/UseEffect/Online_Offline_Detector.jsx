import React, { useEffect, useState } from 'react'

function Online_Offline_Detector() {
    const [status, setStatus] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => {
            setStatus(true);
            console.log("you are online");
        }

        const handleOffline = () => {
            setStatus(false);
            console.log("you are Offline");
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);


        return () => {

            const handleOffline = () => {
                window.removeEventListener("online", handleOnline);
                window.removeEventListener("offline", handleOffline);
            };
        }
    })

    return (
        <>

            <div className="container bg-warning p-1 m-5">
                <h1 className='text-center mt-3'>Online-Offline Detector</h1>
                <div
                style={{
                    padding: "20px",
                    borderRadius: "8px",
                    width: "250px",
                    textAlign: "center",
                    marginLeft:"100px",
                    backgroundColor: status ? "#c8ffc8" : "#ffd2d2",
                    color: status ? "green" : "red",
                    fontWeight: "bold"
                }}
            >
                {status ? "Your are Online" : "Your are Offline"}
            </div>
            </div>
        </>

    )
}

export default Online_Offline_Detector