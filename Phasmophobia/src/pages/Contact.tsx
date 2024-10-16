import React from 'react'
import aboutVideo from '../assets/aboutVideo.mp4'
import Footer from '../components/Footer'
function Contact() {
    return (
        <div>
            <video autoPlay loop muted style={{ width: '100vw', height: '100vh', objectFit: 'cover', position: 'fixed', zIndex: '-1' }}>
                <source src={aboutVideo} type="video/mp4" />
            </video>

            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: '1rem', position: 'relative', zIndex: '1' }}>
                <h2 style={{ color: 'white', marginTop: '10%' }}>Fill the form below to contact us</h2>

                <form action="" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', border: '1px solid white', borderRadius: '5px', padding: '1rem', backdropFilter: "blur(10px)saturate(180%)"  }}>
                    <input type="text" placeholder='Name' style={{ width: '300px', height: '30px', borderRadius: '5px', padding: '2px', backgroundColor: 'transparent', color: 'white', border: '1px solid white' }} />
                    <input type="email" placeholder='Email' style={{ width: '300px', height: '30px', borderRadius: '5px', padding: '2px', backgroundColor: 'transparent', color: 'white', border: '1px solid white' }} />
                    <input type="text" placeholder='Subject' style={{ width: '300px', height: '30px', borderRadius: '5px', padding: '2px', backgroundColor: 'transparent', color: 'white', border: '1px solid white' }} />
                    <textarea name="" id="" cols={30} rows={10} placeholder='Message' style={{ width: '300px', height: '30px', borderRadius: '5px', padding: '2px', backgroundColor: 'transparent', color: 'white', border: '1px solid white' }}></textarea>
                    <button type='submit' style={{ width: '150px', height: '40px', borderRadius: '5px', padding: '2px', backgroundColor: 'black', color: 'white', border: '1px solid white', cursor: 'pointer', margin: 'auto' }}>Submit</button>
                </form>
            </div>

            <div style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', width:'100%'}}>
                <Footer />
            </div>
        </div>
    )
}

export default Contact