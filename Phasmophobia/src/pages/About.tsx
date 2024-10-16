import React from 'react'
import aboutVideo from '../assets/aboutVideo.mp4'
import Footer from '../components/Footer'

function About() {
  return (
    <div style={{ backgroundColor: 'transparent' }}>
      <video src={aboutVideo} autoPlay loop muted style={{ position: 'fixed', width: '100vw', objectFit: 'cover', zIndex: '-1',  height: '100vh'  }}></video>

      <h1 style={{ color: 'white', display: 'flex', width: '100%', justifyContent: 'center', zIndex: '1', position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)' }}>ABOUT US</h1>
      <p style={{ color: 'white', display: 'flex', width: '100%', justifyContent: 'center', zIndex: '1', position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        Founded in 2020, Kinetic Games is a small team from the UK. </p>

      <p style={{ color: 'white', display: 'flex', width: '100%', justifyContent: 'center', zIndex: '1', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }}>  We set out to create the most unique, genre-defining games and provide some of the best community interaction in the industry.</p>
      
      {/* youtube */}
      <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" style={{ position: 'absolute', top: '65%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
      <path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"/>
      </svg>
      {/* twitter */}
      <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" style={{ position: 'absolute', top: '65%', left: '40%', transform: 'translate(-50%, -50%)', color: 'white' }}>
      <path fill="currentColor" d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.2 4.2 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.52 8.52 0 0 1-5.33 1.84q-.51 0-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"/>
      </svg>
      {/* discord */}
      <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" style={{ position: 'absolute', top: '65%', left: '60%', transform: 'translate(-50%, -50%)', color: 'white' }}>
      <path fill="currentColor" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"/>
      </svg>
      <div style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', width:'100%'}}>
        <Footer/>
      </div>
      
    </div>
  )
}

export default About