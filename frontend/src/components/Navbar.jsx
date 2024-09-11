import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const logout = async (e) => {
    
  
      e.preventDefault();
  
      try {
          navigate("/logout")
      } catch (error) {
          alert(error)
      } 
  };
  const settings = async (e) => {
    e.preventDefault();
    try{
      navigate("/settings");
    } catch(error){
      alert(error);
    }
  }
  const home = async (e) => {
    e.preventDefault();
    try{
      navigate("/home");
    } catch(error){
      alert(error);
    }
  }

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <a href="/" style={styles.title}>TaskFlow</a>
        <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={home}>
            Home
          </button>
          <button style={styles.button}  onClick={settings}>
            Settings
          </button>
          <button style={styles.button} onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    textDecoration: 'none',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#666',
    fontSize: '14px',
    cursor: 'pointer',
    padding: '8px 12px',
    borderRadius: '4px',
    transition: 'background-color 0.3s, color 0.3s',
  },
};