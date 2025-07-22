import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@ruffle-rs/ruffle";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={styles.wrapper}>
      <motion.h2
        style={styles.title}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
      Shootr Game
      </motion.h2>

      <motion.div
        style={styles.gameContainer}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        whileHover={{ scale: 1.02, boxShadow: '0 0 30px #00d4ff88' }}
      >
        <object
          data="/shoot.swf"
          type="application/x-shockwave-flash"
          width="800"
          height="600"
        >
          <param name="movie" value="/shoot.swf" />
        </object>
      </motion.div>
    </div>
  );
}

const styles = {
  wrapper: {
    background: 'linear-gradient(to right, #141e30, #243b55)',
    color: '#f5f5f5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    padding: '2rem'
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1.5rem',
    color: '#00d4ff',
    textShadow: '1px 1px 4px #000'
  },
  gameContainer: {
    background: '#000',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer'
  }
};

export default App;
