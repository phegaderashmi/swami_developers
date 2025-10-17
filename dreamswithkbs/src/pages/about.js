import React from "react";

export default function About() {
  const styles = {
    hero: {
      backgroundImage: "url('./bg_img.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "500px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      color: "blacks",
      textAlign: "left",
      paddingLeft: "50px",
      marginTop: "50px",
      minHeight: "400px",
      padding: "50px 20px",
    },
    heroContent: {
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "750px",
      textAlign: "left",
    },
    title: {
      fontSize: "50px", // 🔹 increased h1 font size
      fontWeight: "bold",
      marginBottom: "10px",
      lineHeight: "1.2",
    },
    description: {
      fontSize: "20px", // 🔹 increased paragraph font size
      lineHeight: "1.6",
      marginBottom: "0px",
    },
    button: {
      marginTop: "8px",
      padding: "14px 35px", // 🔹 bigger button
      fontSize: "1.1rem", // 🔹 larger text
      background: "#f1c40f",
      border: "none",
      borderRadius: "8px", // 🔹 smoother corners
      color: "black",
      cursor: "pointer",
      fontWeight: "bold",
      transition: "background 0.3s, transform 0.2s",
    },

    aboutMeSection: {
      padding: "60px 20px",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
    },
    aboutMeContainer: {
      maxWidth: "1000px",
      margin: "0 auto",
    },
    aboutMeWrapper: {
      display: "flex",
      flexWrap: "wrap", // allows cards to wrap
      justifyContent: "flex-start",
      alignItems: "stretch",
      gap: "30px",
      textAlign: "left",
    },
    aboutMeCard: {
      flex: "1 1 48%", // allows shrinking on smaller screens
      maxWidth: "700px",
      minWidth: "300px", // prevents too small cards
      background: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },

    aboutMeTitle: {
      color: "#ff4d4d",
      marginBottom: "15px",
    },
    aboutMeText: {
      color: "#555",
      lineHeight: "1.6",
      fontSize: "1.05rem",
    },

    teamSection: {
      padding: "60px 20px",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
    },
    teamContainer: {
      display: "flex",
      flexWrap: "wrap", // allows cards to stack on mobile
      justifyContent: "flex-start",
      gap: "30px",
      maxWidth: "1000px",
      margin: "0 auto",
      textAlign: "left",
    },
    teamCard: {
      flex: "1 1 30%", // responsive width
      minWidth: "250px", // prevents too small cards
      background: "#fff",
      padding: "30px",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.3s",
    },
    teamImg: {
      width: "150px",
      height: "150px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "15px",
    },
    teamTitle: {
      color: "#ff4d4d",
      marginBottom: "10px",
      fontSize: "1.2rem",
      fontWeight: "bold",
    },
    teamRole: {
      color: "#555",
      fontSize: "1rem",
      lineHeight: "1.5",
    },

    footer: {
      background: "#111",
      color: "white",
      textAlign: "center",
      padding: "15px 10px",
      fontSize: "18px",
      fontFamily: "'Roboto', Arial, sans-serif", // clean modern font
      fontWeight: "400", // normal weight
    },
  };

  const teamMembers = [
    {
      name: "Chandan Thombare",
      role: "Director",
      image: "/Chandan.jpeg",
    },
    {
      name: "Akshay Jadhav",
      role: "Partner",
      image: "/Akshay_J.jpeg",
    },
    {
      name: "Ravi Mane",
      role: "Partner",
      image: "/Ravi.jpeg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.textContainer}>
            <h1 style={styles.title}>Shiv Swami Developers & Traders</h1>
            <p style={styles.description}>
              Established in 2016, we specialize in premium residential spaces,
              plots, and trusted real estate development. Our mission is to
              provide modern, high-quality homes and commercial plots for every
              dream project.
            </p>
            <button
              style={styles.button}
              onClick={() => (window.location.href = "/contact")}
            >
              Get Started
            </button>
          </div>

          {/* <div style={styles.imageContainer}>
            <img
              src="/images/building.jpg" // 🔹 replace with your image path
              alt="Shiv Swami Developers"
              style={styles.image}
            />
          </div> */}
        </div>
      </section>

      {/* About Me Section */}
      <section style={styles.aboutMeSection}>
        <div style={styles.aboutMeContainer}>
          <h2 style={{ fontSize: "32px", marginBottom: "40px", color: "#222" }}>
            About Me
          </h2>

          <div style={styles.aboutMeWrapper}>
            <div style={styles.aboutMeCard}>
              <h2 style={styles.aboutMeTitle}>Our Mission</h2>
              <p style={styles.aboutMeText}>
                We, SS Developer Trader, started our journey in 2016 under the
                vision of Shiv Swami. Our mission is to provide high-quality
                residential buildings and premium plots for your dream home.
              </p>
            </div>

            <div style={styles.aboutMeCard}>
              <h2 style={styles.aboutMeTitle}>Our Vision</h2>
              <p style={styles.aboutMeText}>
                To become the most trusted name in real estate development and
                trading, ensuring excellence, transparency, and customer
                satisfaction in every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={styles.teamSection}>
        <div style={styles.aboutMeContainer}>
          {" "}
          {/* same container as About Me */}
          <h2 style={{ fontSize: "32px", marginBottom: "40px", color: "#222" }}>
            Our Team
          </h2>
          <div style={styles.teamContainer}>
            {teamMembers.map((member, i) => (
              <div key={i} style={styles.teamCard}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={styles.teamImg}
                />
                <h3 style={styles.teamTitle}>{member.name}</h3>
                <p style={styles.teamRole}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        © 2025 Designed & Developed by <strong>Rashmi Phegade</strong>. All
        Rights Reserved.
      </footer>
    </>
  );
}
