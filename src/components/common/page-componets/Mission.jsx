import React from 'react';
import { FaBullseye, FaFlagCheckered } from 'react-icons/fa';

const Mission = () => {
  return (
    <div className="mission-vision-container" style={styles.container}>
      <div className="section" style={styles.section}>
        <FaBullseye size={80} style={styles.icon} />
        <h1><strong>Our Mission</strong></h1>
        <p><b>At Metro Homes, our mission is to provide affordable, high-quality real estate that exceeds expectations, ensuring comfort and security for our clients.</b></p>
      </div>

      <div className="section" style={styles.section}>
        <FaFlagCheckered size={80} style={styles.icon} />
        <h2><strong>Our Vision</strong></h2>
        <p><b>We envision becoming the leading provider of innovative real estate solutions, offering sustainable and dream homes in the most desirable locations.</b></p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
    backgroundColor: 'white',
    textAlign: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
   section: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    width: '45%',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '10px',
  },
  icon: {
    color: '#4CAF50',
    marginBottom: '15px',
  },
};

export default Mission;
