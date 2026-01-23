import React from "react";

function Footer() {
  return (
    <footer className="footer py-3 bg-light mt-5">
      <div className="container text-center">
        <p>© {new Date().getFullYear()} Sejal Munshi. All Rights Reserved.</p>
        <div className="d-flex justify-content-center">
          <a href="#" className="me-2"><i className="bi bi-twitter"></i></a>
          <a href="#" className="me-2"><i className="bi bi-linkedin"></i></a>
          <a href="#" className="me-2"><i className="bi bi-github"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
