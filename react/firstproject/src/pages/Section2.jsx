import React from 'react'

function Section2() {
    const button1=()=>{
        alert("meat is clicked")
    }
    const button2=()=>{
        alert("fish is clicked")
    }
    const button3=()=>{
        alert("drink is clicked")
    }
    return (
        <>
            <div class="container">
                <h4 className='text-center text-warning mt-4'>Delicious</h4>
                <h2 className='text-center'>Food Categories</h2>
                <div class="row">
                    <div class="card ms-5 mt-5 mb-5" style={{ width: '18rem' }}>
                        <img src="../src/assets/images/dish.png" class="card-img-top mt-2" alt="" style={{width:'200px'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Meat</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                            <button type="button" class="btn btn-warning" onClick={button1}>see more</button>
                        </div>
                    </div>
                    <div class="card ms-5 mt-5 mb-5" style={{width:'18rem'}}>
                        <img src="../src/assets/images/dish (1).png" class="card-img-top mt-2" style={{ width: '200px' }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Fish</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                            <button type="button" class="btn btn-warning" onClick={button2}>see more</button>
                        </div>
                    </div>
                    <div class="card ms-5 mt-5 mb-5" style={{width:'18rem'}}>
                        <img src="../src/assets/images/dish (2).png" class="card-img-top text-center mt-2" style={{width:'160px'}} alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Drinks</h5>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                                <button type="button" class="btn btn-warning" onClick={button3}>see more</button>
                            </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Section2