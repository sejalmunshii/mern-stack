import React,{useState} from 'react'

function Task3_4() {
    const [form, setForm] = useState({ name: "", msg: "", tel: "" })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.name.trim() === "") {
            alert("name is required")
        }
        if (form.msg.length <= 20) {
            alert("msg should be 20 letter ")
        }
        if (form.tel.length !==10) {
            alert("number must be 10 digit")
        }

       
    }
    return (
        <>
            <div style={{ padding: "20px" }}>
                <h2>React Form With Validation</h2>

                <form onSubmit={handleSubmit} autoComplete="on">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="msg"
                        placeholder="messege"
                        value={form.msg}
                        onChange={handleChange}
                    />
                    <input
                        type="tel"
                        name="tel"
                        placeholder="tel"
                        value={form.tel}
                        onChange={handleChange}
                    />


                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Task3_4