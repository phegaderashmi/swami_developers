import React, { useState } from "react";
import Swal from "sweetalert2";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ API call when user submits the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://dreamsofkbs-backend.onrender.com/api/visitor",
        {
          // 👉 use your deployed backend URL here when live
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
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        Swal.fire("Error", result.message || "Something went wrong!", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "Unable to connect to the server.", "error");
    }
  };

  const styles = {
    section: {
      padding: "60px 20px",
      backgroundColor: "#f0f2f5",
      minHeight: "100vh",
    },
    heading: {
      textAlign: "center",
      fontSize: "2.2rem",
      fontWeight: "bold",
      marginBottom: "40px",
      color: "#222",
      marginTop: "30px",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
      maxWidth: "1200px",
      margin: "0 auto",
      gap: "40px",
    },
    mapContainer: {
      flex: "1 1 500px",
      minHeight: "500px",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    },
    formContainer: {
      flex: "1 1 500px",
      backgroundColor: "#fff",
      padding: "40px",
      borderRadius: "10px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "20px",
    },
    label: {
      marginBottom: "5px",
      fontWeight: "bold",
      color: "#555",
    },
    input: {
      padding: "12px 15px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    textarea: {
      padding: "12px 15px",
      borderRadius: "8px",
      border: "1px solid #ccc",
      fontSize: "16px",
      minHeight: "120px",
      resize: "vertical",
    },
    submitBtn: {
      display: "block",
      width: "fit-content",
      margin: "20px auto 0 auto",
      padding: "12px 30px",
      backgroundColor: "#f1c40f",
      color: "black",
      fontWeight: "bold",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "transform 0.2s",
      fontSize: "18px",
    },
    contactInfo: {
      marginTop: "20px",
      lineHeight: "1.8",
      color: "#333",
      fontSize: "16px",
      fontFamily: "'Roboto', Arial, sans-serif", // clean modern font
    },
    map: {
      width: "100%",
      height: "100%",
      border: 0,
    },
  };

  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>🏡 Contact Our Team</h2>
      <div style={styles.container}>
        {/* Form Right */}
        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                style={styles.input}
                required
              />
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                style={styles.input}
                required
              />
            </div>
            {/* 
            <div style={styles.formGroup}>
              <label style={styles.label}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message"
                style={styles.textarea}
                required
              />
            </div> */}

            <button
              type="submit"
              style={styles.submitBtn}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              Send Message
            </button>

            {/* Contact Info Below Form */}
            <div style={styles.contactInfo}>
              <p>📍 Viraj paradise manajinagar narhe 411041 pune</p>
              <p>📧 ssdevelopers081@gmail.com</p>
              <p>📞 +91 8554877663, +91 9503548286, +91 9130878004</p>
            </div>
          </form>
        </div>

        {/* Map Left */}
        <div style={styles.mapContainer}>
          <iframe
            title="office-map"
            src="https://maps.google.com/maps?q=Viraj%20Paradise%2C%20Manajinagar%2C%20Narhe%2C%20Pune%20411041%2C%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
            style={styles.map}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
