import React from 'react'
import { Fade } from "react-awesome-reveal";
import './Home.css'
import homeIntro from '../assets/introHome.mp4'
import banner from '../assets/banner-removebg-preview.png'
import banner1 from '../assets/best+co+op+game+pc+gamer.png'
import banner2 from '../assets/Best+EE+Dreamies.png'
import banner3 from '../assets/Best+debut+game+awards.png'
import banner4 from '../assets/Best+horror+game+debate2020.png'
import banner5 from '../assets/best+debut+finalist.png'
import Footer from '../components/Footer';

function Home() {
    const fadeIn = { animation: 'fadeIn 8s ease-in-out forwards', '@keyframes fadeIn': { from: { opacity: 0 }, to: { opacity: 1 } } }
   
    return (
        <div id='home'>
            <video src={homeIntro} autoPlay loop muted />
            <img src={banner} alt="banner" id='banner' />
            <div id='bannerDetails'>
                <p style={{ fontWeight: 'bold' }}>Release date: <p>4th of September 2020</p> </p>
                <p style={{ fontWeight: 'bold' }}>Game genre: <p>Horror, Action, Early access</p></p>
                <p style={{ fontWeight: 'bold' }}>Developer: <p>Kinetic Games</p></p>
            </div>
            
            <div style={{ color: 'white', position: 'absolute', top: '120%', width: '100%', animation: 'fadeIn 8s ease-in-out forwards' }}>
                <h2 style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>GET THE GAME</h2>

                <div style={{ display: 'flex', width: '100%', justifyContent: 'center', gap: '5rem', marginTop: '2rem' }}>

                    <button className="btn">
                        <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                        </svg>
                        <span>PC</span>
                    </button>

                    <button className="btn">
                        <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                        </svg>
                        <span>XBOX</span>
                    </button>

                    <button className="btn">
                        <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                            <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                        </svg>
                        <span>PLAYSTATION</span>
                    </button>
                </div>

                <div style={{ color: 'white', position: 'absolute', top: '170%', width: '100%', animation: 'fadeIn 8s ease-in-out forwards' }}>
                    <h2 style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>SYSTEM REQUIREMENTS</h2>

                    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', gap: '5rem', marginTop: '2rem' }}>
                        <div>
                            <p style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>MINIMUM</p>
                            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid white', padding: '1rem', width: '100%' }}>

                                <p>OS: Windows 10 64Bit</p>
                                <p>CPU: Intel Core i5-4590 / AMD Ryzen 5 2600</p>
                                <p>RAM: 8 GB</p>
                                <p>GPU: NVIDIA GTX 970 / AMD Radeon R9 390</p>
                                <p>DirectX: Version 11</p>
                                <p>Memory: 21 GB of available space</p>
                                <p>VR compatibility: OpenXR</p>

                            </div>
                        </div>

                        <div>
                            <p style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>RECOMMENDED</p>
                            <div style={{ display: 'flex', flexDirection: 'column', border: '1px solid white', padding: '1rem', width: '100%' }}>

                                <p>OS: Windows 10 64Bit</p>
                                <p>CPU: Intel Core i5-4590 / AMD Ryzen 5 3600</p>
                                <p>RAM: 8 GB</p>
                                <p>GPU: NVIDIA RTX 2060 / AMD Radeon RX 5700</p>
                                <p>DirectX: Version 11</p>
                                <p>Memory: 21 GB of available space</p>
                                <p>VR compatibility: OpenXR</p>

                            </div>
                        </div>

                    </div>
                </div>


            </div>

            <div style={{ display: 'flex', justifyContent: 'center', width: '100%', position: 'absolute', top: '250%', gap: '5rem', flexWrap: 'wrap', animation: 'fadeIn 8s ease-in-out forwards' }}>
                <img src={banner1} alt="img" style={{ height: '40vh', width: '30vh' }} />
                <img src={banner2} alt="img" style={{ height: '40vh', width: '30vh' }} />
                <img src={banner3} alt="img" style={{ height: '40vh', width: '30vh' }} />
                <img src={banner4} alt="img" style={{ height: '40vh', width: '30vh' }} />
                <img src={banner5} alt="img" style={{ height: '40vh', width: '30vh' }} />
            </div>

            <Footer />
        </div>
    )
}

export default Home