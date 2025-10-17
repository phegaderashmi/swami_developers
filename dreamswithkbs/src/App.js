import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Swal from "sweetalert2";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Projects from "./pages/project_details";
import Upcoming from "./pages/upcoming";
import Contact from "./pages/contact";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // ✨ Show alert instantly if non-numeric entered in contact field
    if (name === "contact") {
      if (!/^\d*$/.test(value)) {
        Swal.fire({
          icon: "warning",
          title: "Invalid Input!",
          text: "Please enter numbers only for contact number.",
          timer: 1800,
          showConfirmButton: false,
        });
        return; // stop further processing
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation checks
    if (!formData.name.trim()) {
      return Swal.fire("Error", "Please enter your name.", "error");
    }
    if (!/^\d{10}$/.test(formData.contact)) {
      return Swal.fire(
        "Error",
        "Please enter a valid 10-digit contact number.",
        "error"
      );
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      return Swal.fire("Error", "Please enter a valid email address.", "error");
    }
    // if (formData.address.trim().length < 5) {
    //   return Swal.fire("Error", "Please enter a valid address.", "error");
    // }

    try {
      // ✅ Send data to backend API
      const response = await fetch(
        // "http://localhost:5000/api/visitor",
        "https://dreamsofkbs-backend.onrender.com/api/visitor",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          title: "Thank You!",
          text: "Your form has been submitted successfully.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        setIsSubmitted(true);
        setFormData({ name: "", contact: "", email: "", address: "" }); // reset form
      } else {
        Swal.fire("Error", result.message || "Something went wrong!", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "Unable to connect to the server.", "error");
    }
  };

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <div className="app">
      <Navbar />
      <div className="overlay">
        <div className="hero">
          <div className="hero-text">
            <h1>Step Into Your Dream Space.</h1>
            <p>
              Discover prime plots designed to turn your vision into reality.
              Whether you’re looking to build your dream home or invest for the
              future, our carefully selected spaces provide the perfect
              foundation for your aspirations.
            </p>
            <button className="hero-btn" onClick={goToContact}>
              Get Yours Now
            </button>

            <div className="social-icons">
              <a
                href="https://www.instagram.com/s.s_developers21/?utm_source=ig_web_button_share_sheet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/918153818569" // 👈 WhatsApp direct link
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>

              <FaFacebookF />
              {/* <FaTwitter /> */}
              <FaLinkedinIn />
            </div>
          </div>

          {/* ✨ Customer Details Form */}
          {!isSubmitted && (
            <div className="customer-form" id="customerForm">
              <h2>Customer Form</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  maxLength="10"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {/* <textarea
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea> */}
                <button type="submit" className="form-btn">
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
