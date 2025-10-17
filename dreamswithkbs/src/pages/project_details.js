import React from "react";

export default function Projects() {
  const styles = {
    hero: {
      backgroundImage: "url('./project.jpg')",
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
    heroTitle: {
      fontSize: "60px", // 🔹 increased from 50px to 60px
      fontWeight: "bold",
      marginBottom: "15px",
      lineHeight: "1.2",
      color: "black",
    },
    heroDescription: {
      fontSize: "24px",
      lineHeight: "1.6",
      marginBottom: "0px",
      color: "black",
    },
    projectsSection: {
      padding: "60px 20px",
      backgroundColor: "#f9f9f9",
      textAlign: "center",
    },
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    projectCard: {
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      width: "300px",
      padding: "20px",
      textAlign: "center",
    },
    projectImg: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "15px",
    },
    projectTitle: {
      fontSize: "30px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    projectDesc: {
      fontSize: "16px",
      color: "#555",
      marginBottom: "8px",
      lineHeight: "1.5",
    },
    projectLabel: {
      fontWeight: "bold",
      color: "#ff4d4d",
      fontSize: "18px",
    },
    projectValue: {
      color: "#333",
      fontSize: "18px",
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

  const projects = [
    {
      img: "viraj_paradise.jpeg",
      title: "Viraj Paradise",
      desc: "Modern residential apartments with all amenities and premium layouts.",
      status: "Completed",
      yearCompleted: 2022,
    },
    {
      img: "swapnapurti_residency.jpeg",
      title: "Swapnapurti Residency",
      desc: "Luxury plots and residences designed for comfortable family living.",
      status: "Completed",
      yearCompleted: 2022,
    },
    {
      img: "kumar_icon.jpeg",
      title: "Kumar Icon",
      desc: "Premium residential plots with secure environment and wide roads.",
      status: "Completed",
      yearCompleted: 2023,
    },
    {
      img: "dnyanesh_icon.jpeg",
      title: "Dnyanesh Icon",
      desc: "Premium residential plots with modern layouts and secure surroundings.",
      status: "Completed",
      yearCompleted: 2023,
    },
    {
      img: "swami_heights.jpeg",
      title: "Swami Heights",
      desc: "Elegant high-rise apartments in prime locations with modern facilities.",
      status: "Completed",
      yearCompleted: 2024,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Our Completed Projects</h1>
          <p style={styles.heroDescription}>
            Explore our premium residential and commercial developments.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section style={styles.projectsSection}>
        <div style={styles.container}>
          {projects.map((project, index) => (
            <div key={index} style={styles.projectCard}>
              <img
                src={project.img}
                alt={project.title}
                style={styles.projectImg}
              />
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDesc}>{project.desc}</p>

              <div style={{ textAlign: "left", marginTop: "15px" }}>
                <p style={styles.projectDesc}>
                  <span style={styles.projectLabel}>✅ Status:</span>{" "}
                  <span style={styles.projectValue}>{project.status}</span>
                </p>
                <p style={styles.projectDesc}>
                  <span style={styles.projectLabel}>📅 Year Completed:</span>{" "}
                  <span style={styles.projectValue}>
                    {project.yearCompleted}
                  </span>
                </p>
              </div>
            </div>
          ))}
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
