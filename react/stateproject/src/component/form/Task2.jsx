import  { useState } from 'react'

function Task2() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmpass: "" })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.trim() === "") {
      alert("name is required")
    }

    if (!form.email.includes("@")) {
      alert("Invalid email");
      return;
    }

    if(form.password.length == !6){
      alert("password must be 6 letter")
    }

    if(form.confirmpass.length == form.password){
      alert("confirmpassword is not match to password")
    }
  }
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2>React Form With Validation</h2>

        <form onSubmit={handleSubmit} autoComplete='on'>
          <input
            type="text"
            name="name"
            placeholder="Enter name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmpass"
            placeholder="Enter confirm password"
            value={form.confirmpass}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Task2