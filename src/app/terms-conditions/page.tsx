import React from "react";

const TermsAndConditions = () => {
  const currentDate = "29 May 2026";

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Terms and Conditions</h1>

        <p style={styles.lastUpdated}>Last Updated: {currentDate}</p>

        <p style={styles.paragraph}>
          By accessing and using this website, you agree to be bound by the
          following Terms and Conditions. This website is operated in accordance
          with the applicable laws of Sri Lanka, including the Electronic
          Transactions Act No. 19 of 2006, and relevant consumer and data
          protection regulations.
        </p>

        <h2 style={styles.subheading}>1. Purpose of the Website</h2>

        <p style={styles.paragraph}>
          This website provides information about Tropcey Holdings (Private)
          Limited, a Sri Lankan producer and exporter of coconut-related goods.
          The content is for general informational and corporate communication
          purposes only and does not constitute a contractual offer.
        </p>

        <h2 style={styles.subheading}>2. Website Usage</h2>

        <ul style={styles.list}>
          <li style={styles.listItem}>
            Users must not use the website for unlawful purposes.
          </li>
          <li style={styles.listItem}>
            Submission of false or misleading information is prohibited.
          </li>
          <li style={styles.listItem}>
            Users must not attempt to disrupt or interfere with website
            functionality.
          </li>
          <li style={styles.listItem}>
            Users must comply with all applicable laws of Sri Lanka while using
            the website.
          </li>
        </ul>

        <h2 style={styles.subheading}>3. Product Information</h2>

        <p style={styles.paragraph}>
          All product descriptions are for general information only. Product
          availability and specifications may change without notice. No
          guarantee is given that all information is current, accurate, or
          complete.
        </p>

        <h2 style={styles.subheading}>4. No Online Transactions</h2>

        <p style={styles.paragraph}>
          This website does not support online ordering or payment processing.
          Any transactions must be conducted through direct communication and
          formal agreements.
        </p>

        <h2 style={styles.subheading}>5. Intellectual Property</h2>

        <p style={styles.paragraph}>
          All content including text, images, logos, and product information is
          the property of Tropcey Holdings (Private) Limited and is protected
          under applicable intellectual property laws. No content may be used or
          reproduced without prior written permission.
        </p>

        <h2 style={styles.subheading}>6. Limitation of Liability</h2>

        <ul style={styles.list}>
          <li style={styles.listItem}>
            Tropcey Holdings (Private) Limited shall not be liable for errors or
            omissions in website content.
          </li>
          <li style={styles.listItem}>
            No liability is accepted for temporary unavailability or technical
            issues.
          </li>
          <li style={styles.listItem}>
            The company is not responsible for decisions made based on website
            information.
          </li>
          <li style={styles.listItem}>
            To the maximum extent permitted by Sri Lankan law, indirect or
            consequential damages are excluded.
          </li>
        </ul>

        <h2 style={styles.subheading}>7. Third Party Links</h2>

        <p style={styles.paragraph}>
          The website may not currently include third-party links. If
          introduced, Tropcey Holdings (Private) Limited is not responsible for
          external content or practices.
        </p>

        <h2 style={styles.subheading}>8. Amendments</h2>

        <p style={styles.paragraph}>
          These Terms and Conditions may be updated at any time. Continued use
          of the website constitutes acceptance of any revisions. Users are
          encouraged to review this page periodically.
        </p>

        <h2 style={styles.subheading}>9. Governing Law</h2>

        <p style={styles.paragraph}>
          These Terms and Conditions are governed by the laws of Sri Lanka. Any
          disputes shall fall under the jurisdiction of Sri Lankan courts.
        </p>

        <h2 style={styles.subheading}>10. Contact Information</h2>

        <p style={styles.paragraph}>
          <strong>Tropcey Holdings (Private) Limited</strong>
        </p>

        <p style={styles.paragraph}>
          Porapola, Thalvita, Kurunegala, Sri Lanka
        </p>

        <p style={styles.paragraph}>
          Email:{" "}
          <a href="mailto:info@tropcey.com" style={styles.link}>
            info@tropcey.com
          </a>
        </p>

        <p style={styles.paragraph}>
          Phone:{" "}
          <a href="tel:+94112857101" style={styles.link}>
            +94 112 857 101
          </a>
        </p>

        <p style={styles.paragraph}>
          Website:{" "}
          <a
            href="https://www.tropcey.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            www.tropcey.com
          </a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#ffffff",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    padding: "100px 20px 40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  content: {
    maxWidth: "800px",
    width: "100%",
    color: "#000000",
    lineHeight: 1.7,
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "700",
    marginBottom: "5px",
    color: "#000000",
    textAlign: "center",
    borderBottom: "2px solid #e0e0e0",
    paddingBottom: "15px",
  },
  subtitle: {
    fontSize: "1.2rem",
    fontWeight: "500",
    color: "#000000",
    textAlign: "left",
    marginBottom: "5px",
    marginTop: "10px",
  },
  lastUpdated: {
    fontSize: "1rem",
    fontStyle: "italic",
    color: "#333333",
    marginBottom: "25px",
    textAlign: "left",
  },
  subheading: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginTop: "35px",
    marginBottom: "15px",
    color: "#000000",
  },
  paragraph: {
    fontSize: "1rem",
    marginBottom: "18px",
    color: "#000000",
  },
  list: {
    marginBottom: "18px",
    paddingLeft: "25px",
  },
  listItem: {
    fontSize: "1rem",
    marginBottom: "8px",
    color: "#000000",
  },
  link: {
    color: "#0056b3",
    textDecoration: "underline",
    fontWeight: 500,
    wordBreak: "break-all",
  },
};

export default TermsAndConditions;
