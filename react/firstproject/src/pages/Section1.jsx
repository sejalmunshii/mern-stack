import React from 'react'

function Section1() {
    const button=()=>{
        alert("explored");
    }
    return (
        <>
            <section>
                <div class="container">
                    <div class="row">
                        <div className="col-sm pt-3">
                            <h1 className='pt-2'>Eat, drink and
                                Enjoy.</h1>
                                <h3 className='Pt-4'>Your Restaurant is Waiting For You.</h3>
                                <p className='Pt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                                <button type="button" class="btn btn-warning mt-3" onClick={button} >Explore</button>
                        </div>
                        <div class="col-sm">
                           <img src="../src/assets/images/Ilustration.png" class="img-fluid pt-3" alt="Responsive image"></img>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section1