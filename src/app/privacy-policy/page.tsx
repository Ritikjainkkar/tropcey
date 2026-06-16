import React, { useState } from "react";

const PrivacyPolicy = () => {
  const currentDate = "29 May 2026";

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>Privacy Policy</h1>

        <p style={styles.lastUpdated}>Last Updated: {currentDate}</p>

        <p style={styles.paragraph}>
          Thank you for visiting our website. We hope you enjoy exploring
          Tropcey and our coconut-based products.
        </p>

        <p style={styles.paragraph}>
          Tropcey Holdings (Private) Limited, which operates out of Sri Lanka,
          values your privacy and is dedicated to safeguarding any personal
          information provided by you.
        </p>

        <p style={styles.paragraph}>
          Tropcey is the only party liable for collecting and using your
          personal information through our website, whether you are viewing it
          from within Sri Lanka or abroad, including jurisdictions such as
          Canada and the UK, where our products are sold.
        </p>

        <p style={styles.paragraph}>
          We ensure that your personal information remains safe and is handled
          carefully, following all relevant data protection and privacy
          regulations.
        </p>

        <p style={styles.paragraph}>
          Our Privacy Policy provides details on how we gather, use, and secure
          your personal information while using our website or contacting us.
        </p>

        <p style={styles.paragraph}>
          By using our website, you accept all the policies mentioned below.
        </p>

        <p style={styles.paragraph}>
          We process personal data in accordance with the Sri Lanka Personal
          Data Protection Act, No. 9 of 2022, ensuring lawful, fair, and
          transparent processing of your information.
        </p>

        <p style={styles.paragraph}>
          We collect and process personal data based on your consent,
          contractual necessity, legal obligations, and legitimate business
          interests.
        </p>

        <p style={styles.paragraph}>
          You have the right to access, correct, request deletion, and withdraw
          consent for your personal data at any time, subject to applicable
          legal limitations.
        </p>

        <h2 style={styles.subheading}>1. Types of Information We Collect</h2>

        <p style={styles.paragraph}>
          Information that we may collect includes:
        </p>

        <ul style={styles.list}>
          <li style={styles.listItem}>
            Name, mobile number, company name, and email address. (through
            contact forms)
          </li>
          <li style={styles.listItem}>
            Any information volunteered through messages
          </li>
          <li style={styles.listItem}>
            Basic technical information (IP address, browser, cookies)
          </li>
        </ul>

        <h2 style={styles.subheading}>2. How We Use Your Information</h2>

        <p style={styles.paragraph}>Your information is used to:</p>

        <ul style={styles.list}>
          <li style={styles.listItem}>Respond to your inquiries</li>
          <li style={styles.listItem}>
            Provide information about our products or business
          </li>
          <li style={styles.listItem}>Improve our website and communication</li>
        </ul>

        <h2 style={styles.subheading}>3. Cookies</h2>

        <p style={styles.paragraph}>
          We might employ cookies to improve the user experience and analyze
          website traffic. You can disable cookies in your browser settings.
        </p>

        <h2 style={styles.subheading}>4. Data Transfer</h2>

        <p style={styles.paragraph}>
          Personal data can be collected, used, and processed by Tropcey
          Holdings (Pvt) Ltd in Sri Lanka.
        </p>

        <p style={styles.paragraph}>
          Data collected on this site is used strictly for the business purposes
          of the company, including processing your requests and improving the
          service.
        </p>

        <p style={styles.paragraph}>
          We don’t sell, disclose, or transfer your personal data to any other
          party, unless required by law.
        </p>

        <p style={styles.paragraph}>
          In case you visit this website from countries other than Sri Lanka,
          please note that your data will be transferred to Sri Lanka for
          storage and processing there, which means that privacy laws may vary
          between countries.
        </p>

        <h2 style={styles.subheading}>5. Data Protection</h2>

        <p style={styles.paragraph}>
          We retain personal data only for as long as necessary to fulfil the
          purposes outlined in this policy or as required by applicable law.
        </p>

        <p style={styles.paragraph}>
          In the event of a data breach, we will take reasonable steps to notify
          affected users and relevant authorities as required under Sri Lankan
          law.
        </p>

        <p style={styles.paragraph}>
          You may contact us or the Sri Lanka Personal Data Protection Authority
          to raise concerns regarding your data privacy rights.
        </p>

        <p style={styles.paragraph}>
          Reasonable measures are taken for safeguarding your information.
          However, no online system is completely secure.
        </p>

        <h2 style={styles.subheading}>6. Third-Party Links</h2>

        <p style={styles.paragraph}>
          This website does not contain or promote links to third-party
          websites.
        </p>

        <h2 style={styles.subheading}>7. Updates</h2>

        <p style={styles.paragraph}>
          Our privacy policy might be revised at any time. The updated policy
          will be published here.
        </p>

        <h2 style={styles.subheading}>8. Contact Us</h2>

        <p style={styles.paragraph}>
          E-mail us at:{" "}
          <a href="mailto:info@tropcey.com" style={styles.link}>
            info@tropcey.com
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

        <p style={styles.paragraph}>
          Phone:{" "}
          <a href="tel:+94112857101" style={styles.link}>
            +94 112 857 101
          </a>
        </p>

        <p style={styles.paragraph}>
          Address: Porapola, Talwita, Kurunegala, Sri Lanka.
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
    marginBottom: "10px",
    color: "#000000",
    borderBottom: "2px solid #e0e0e0",
    paddingBottom: "15px",
    textAlign: "center",
  },
  lastUpdated: {
    fontSize: "1rem",
    fontStyle: "italic",
    color: "#333333",
    marginBottom: "25px",
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

export default PrivacyPolicy;
