import "./About.css"

function Testimonials() {
  const testimonials = [
    { name: "Saul Goodman", role: "CEO & Founder", text: "Proin iaculis purus..." },
    { name: "Sara Wilsson", role: "Designer", text: "Export tempor illum..." },
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title">
        <h2>Testimonials</h2>
      </div>
      <div className="container">
        {testimonials.map((t, idx) => (
          <div key={idx} className="testimonial-item">
            <p>{t.text}</p>
            <h3>{t.name}</h3>
            <h4>{t.role}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
