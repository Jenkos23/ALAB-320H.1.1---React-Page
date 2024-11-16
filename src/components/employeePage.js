import { Header2 } from "./header";
import React from "react";

export default function EmployeePage(){

    const profileData = {
        img: 'https://via.placeholder.com/150', // Replace with your image URL
        name: 'John Doe',
        jobTitle: 'Software Engineer',
        phone: '(123) 456-7890',
        email: 'john.doe@example.com',
        officeNumber: '(098) 765-4321'
      };

    return(
      <div >
     <Header2/>
      <div style={styles.container}>
      <img src={profileData.img} alt="Profile" style={styles.image} />
      <h2 style={styles.name}>{profileData.name}</h2>
      <p style={styles.jobTitle}>{profileData.jobTitle}</p>
      <p style={styles.contactInfo}><strong>Phone:</strong> {profileData.phone}</p>
      <p style={styles.contactInfo}><strong>Email:</strong> {profileData.email}</p>
      <p style={styles.contactInfo}><strong>Office Number:</strong> {profileData.officeNumber}</p>
      <button style={styles.button} onClick={() => window.location.href = `tel:${profileData.officeNumber}`}>
        Call Office
      </button>
    </div>

    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    width: '300px',
    margin: '20px auto',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  image: {
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    marginBottom: '20px',
  },
  name: {
    fontSize: '24px',
    margin: '10px 0',
  },
  jobTitle: {
    fontSize: '18px',
    color: '#555',
  },
  contactInfo: {
    fontSize: '16px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
  }
};