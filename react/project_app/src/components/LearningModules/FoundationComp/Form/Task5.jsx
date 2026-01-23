import React, { useState } from 'react'

function Task5() {

    const [step, setStep] = useState(1);
    const [form, setForm] = useState({ name: "", email: "", review: "", submit: "" });
    const next = () => {

        if (step === 1) {
            if (form.name.trim() === "") {
                alert("Please enter your name");
                return;
            }
        }
        if (step === 2) {
            if (form.email.trim() === "") {
                alert("Please enter your email");
                return; removeEventListener
            }

            if (!form.email.includes("@")) {
                alert("@ is missing");
                return;
            }
        }
        setStep(step + 1);
    }
    const prev = () => {
        setStep(step - 1);
    }
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const submit = (e) => {
        e.preventDefault();
        if (step === 3) {
            if (form.review.trim() === "") {
                alert("please enter your review")
                return;
            }
        }
        alert("form is submit")
    }
    return (
        <>
            <div className="container mt-5">
                <div className="col-md-12 mx-auto">
                    <div className="card p-4 shadow">
                        <h3 className="text-center mb-4">Feedback Form</h3>



                        {step == 1 && (
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    value={form.name}
                                    onChange={handleChange}
                                    name="name"
                                />
                                <button className='btn btn-warning mx-3 my-3' onClick={next}>Next</button>
                            </div>
                        )}

                        {step == 2 && (
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    value={form.email}
                                    onChange={handleChange}
                                    name="email"
                                />
                                <button className='btn btn-warning my-3 mx-3' onClick={next}>Next</button>

                            </div>
                        )}
                        <form onSubmit={submit}>
                            {step == 3 && (

                                <div className="mb-3">
                                    <label className="form-label">Review</label>
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        placeholder="Write your review..."
                                        name="review"
                                        value={form.review}
                                        onChange={handleChange}
                                    ></textarea>
                                    <button type="submit" className="btn btn-primary w-100 my-3 mx-3">
                                        Submit
                                    </button>
                                </div>

                            )}

                            {step > 1 && (<button onClick={prev} className='btn btn-danger my-3 mx-3'>prev</button>)}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Task5;