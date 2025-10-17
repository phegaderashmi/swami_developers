import React from "react";

export default function UpcomingProjects() {
  const styles = {
    hero: {
      backgroundImage: "url('./upcoming.jpg')",
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
    section: {
      padding: "60px 20px",
      textAlign: "center",
      backgroundColor: "#f9f9f9",
    },
    projectsGrid: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "30px",
      marginTop: "30px",
    },
    projectCard: {
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      width: "300px",
      textAlign: "left",
      overflow: "hidden",
      position: "relative",
    },
    badge: {
      position: "absolute",
      top: "10px",
      left: "-40px", // move it outside the top-left corner
      backgroundColor: "#ff4d4d",
      color: "#fff",
      padding: "5px 60px 5px 33px", // wide enough for diagonal
      fontWeight: "bold",
      fontSize: "1.00rem",
      transform: "rotate(-45deg)", // rotate in opposite direction for left corner
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      zIndex: 2,
      textAlign: "left",
    },
    projectImg: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
    },
    projectContent: {
      padding: "15px 20px",
    },
    projectTitle: {
      marginBottom: "10px",
      color: "#333",
      fontSize: "35px",
      fontFamily: "Roboto, sans-serif",
    },
    projectDesc: {
      marginBottom: "10px",
      color: "#555",
      fontFamily: "Roboto, sans-serif",
    },
    projectFeatures: {
      marginBottom: "15px",
      paddingLeft: "20px",
      color: "#555",
      fontFamily: "Roboto, sans-serif",
    },
    bookBtn: {
      display: "block", // change from inline-block to block
      width: "fit-content", // keeps button width as per content
      margin: "10px auto 0 auto", // top 10px, horizontally centered
      padding: "10px 20px",
      backgroundColor: "#f1c40f",
      color: "#000",
      fontWeight: "bold",
      borderRadius: "8px",
      textDecoration: "none",
      cursor: "pointer",
      transition: "transform 0.2s",
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

  const residentialProjects = [
    {
      title: "Shambhavi Heights",
      img: "shambhavi_heights.jpeg",
      desc: "Luxurious residential tower by KBS Developers...",
      features: [
        "Strong RCC Structure",
        "Modern Electrical Setup",
        "Anti-Skid Bathroom Tiles",
        "24x7 Security & CCTV",
      ],
      link: "contact.html",
    },
  ];

  const plottingProjects = [
    {
      title: "Shiv Swami Developers Plotting",
      img: "plotting.jpeg",
      desc: "Premium plots near Swaminarayan Temple, ideal for building your dream home.",
      highlights: [
        "Clear Land Plots",
        "Proper Road & Drainage",
        "Green & Peaceful Location",
        "Easy Access to Amenities",
      ],
      location: "Near Swaminarayan Temple",
      offer: "Pre-booking Available!",
      link: "contact.html",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Upcoming Projects</h1>
          <p style={styles.heroDescription}>
            Explore our future residential and plotting developments.
          </p>
        </div>
      </section>

      {/* Residential Projects */}
      <section style={styles.section}>
        <h2>🏢 Residential / Building Projects</h2>
        <div style={styles.projectsGrid}>
          {residentialProjects.map((project, i) => (
            <div key={i} style={styles.projectCard}>
              <span style={styles.badge}>Book Now</span>
              <img
                src={project.img}
                alt={project.title}
                style={styles.projectImg}
              />
              <div style={styles.projectContent}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDesc}>{project.desc}</p>
                <ul style={styles.projectFeatures}>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <a
                  href={project.link}
                  style={styles.bookBtn}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plotting Projects */}
      <section style={styles.section}>
        <h2>🏡 Plotting Projects</h2>
        <div style={styles.projectsGrid}>
          {plottingProjects.map((project, i) => (
            <div key={i} style={styles.projectCard}>
              {/* Booking Started Badge */}
              <span style={styles.badge}>Book Now</span>

              <img
                src={project.img}
                alt={project.title}
                style={styles.projectImg}
              />
              <div style={styles.projectContent}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDesc}>{project.desc}</p>

                <h4 style={{ textAlign: "left", marginBottom: "10px" }}>
                  Highlights:
                </h4>
                <ul style={styles.projectFeatures}>
                  {project.highlights.map((hl, idx) => (
                    <li key={idx}>{hl}</li>
                  ))}
                </ul>

                <p style={styles.projectText}>
                  <strong>📍 Location:</strong> {project.location}
                </p>
                <p style={styles.projectText}>
                  <strong>💰 Offer:</strong> {project.offer}
                </p>

                <a
                  href={project.link}
                  style={styles.bookBtn}
                  onMouseEnter={(e) =>
                    (e.target.style.transform = "scale(1.05)")
                  }
                  onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                >
                  Book Now
                </a>
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
