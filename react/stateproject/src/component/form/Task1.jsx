import { useState } from "react";

 function Task1(){
  const [form, setForm] = useState({ name: "", msg:"" ,number:""});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.trim() === "") {
      alert("Name is required");
      return;
    }
    if(form.msg.length!==20){
      alert("msg must be 20 letter")
    }
    if(form.number.length!==10){
      alert("number must be 10 digit")
    }

  

    alert("Form submitted successfully");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Form With Validation</h2>

      <form onSubmit={handleSubmit}>
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
          placeholder="Enter email"
          value={form.msg}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="number"
          placeholder="Enter email"
          value={form.number}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default  Task1