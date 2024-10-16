import React from 'react'
import { Slide, Fade } from 'react-awesome-reveal'
import theGameVideo from '../assets/trailer.mp4'
import emf from '../assets/emf.png'
import termometro from '../assets/termometro.png'
import uv from '../assets/uv.png'
import dots from '../assets/dots.png'
import book from '../assets/book.png'
import spirit from '../assets/spirit.png'

function TheGame() {
    return (
        <div>
            <video src={theGameVideo} autoPlay loop style={{ width: '100vw', height: 'fit-content', objectFit: 'fill' }}></video>
            <Fade triggerOnce={true} duration={8000}>
                <Slide direction='left' duration={4000} triggerOnce={true}>
                    <h1 style={{ color: 'white', display: 'flex', width: '100%', justifyContent: 'center' }}>INSTRUCTIONS</h1>
                </Slide>
            </Fade>

            <Fade triggerOnce={true} delay={2000} duration={8000}>
                <p style={{ color: 'white', display: 'flex', width: '100%', justifyContent: 'center', lineHeight: '2rem' }}>
                    Phasmophobia is a 4-player, online co-op, psychological horror game. <br />
                    You and your team of paranormal investigators will enter haunted locations filled with paranormal activity and try to gather as much evidence as you can. <br />
                    Use your ghost-hunting equipment to find and record evidence to sell on to a ghost removal team.
                </p>
            </Fade>

            <Fade triggerOnce={true} duration={8000}>
                <Slide direction='left' duration={4000} triggerOnce={true}>
                    <h1 style={{ color: 'white', paddingLeft: '5rem' }}>INVESTIGATE</h1>
                </Slide>
                <p style={{ color: 'white', paddingLeft: '5rem' }}><b style={{ color: 'rgb(41, 100, 139)' }}>Immersive Experience: </b>realistic graphics and sounds as well as a minimal user interface ensure a totally immersive experience that will keep you on your toes.</p>
                <p style={{ color: 'white', paddingLeft: '5rem' }}><b style={{ color: 'rgb(41, 100, 139)' }}> Unique Ghosts:</b> identify over 20 different ghost types, each with unique traits, personalities, and abilities to make each investigation feel different from the last.</p>
                <p style={{ color: 'white', paddingLeft: '5rem', lineHeight: '2.5rem' }}><b style={{ color: 'rgb(41, 100, 139)' }}> Equipment:</b>  Use well-known ghost-hunting equipment such as EMF Readers, Spirit Boxes, Thermometers, and Night Vision Cameras to find clues and gather as much paranormal evidence as you can. Find Cursed Possessions that grant information or abilities in exchange for your sanity.</p>
                <p style={{ color: 'white', paddingLeft: '5rem', marginBottom: '5rem' }}><b style={{ color: 'rgb(41, 100, 139)' }}> Full Voice Recognition:</b>   The Ghosts are listening! Use your actual voice to interact with the Ghosts through Ouija Boards and EVP Sessions using a Spirit Box.
                </p>
            </Fade>

            <Fade triggerOnce={true} delay={2000} duration={8000}>
                <Slide direction='left' duration={4000} triggerOnce={true}>
                    <h1 style={{ color: 'white', paddingLeft: '5rem' }}>PLAY YOUR WAY</h1>
                </Slide>
                <p style={{ color: 'white', paddingLeft: '5rem' }}><b style={{ color: 'rgb(41, 100, 139)' }}>Locations: </b> Choose from over 10 different haunted locations, each with unique twists, hiding spots, and layouts.</p>
                <p style={{ color: 'white', paddingLeft: '5rem' }}><b style={{ color: 'rgb(41, 100, 139)' }}>Game Modes:</b>  With 5 default difficulties and hand crafted weekly challenges, there are plenty of ways to test your skills.</p>
                <p style={{ color: 'white', paddingLeft: '5rem' }}><b style={{ color: 'rgb(41, 100, 139)', lineHeight: '2.5rem' }}>Teamwork:</b> Dive in head first, get your hands dirty searching for evidence while fighting for your life. If you're not feeling up to the task, play it safe and support your team from the truck by monitoring the investigation with CCTV and motion sensors.</p>
                <p style={{ color: 'white', paddingLeft: '5rem', marginBottom: '5rem' }}><b style={{ color: 'rgb(41, 100, 139)' }}>Custom Difficulty:</b>  Create your own games to tailor the difficulty to your or your group's needs, with proportional rewards and come up with crazy game modes of your own!</p>

            </Fade>

            <Fade triggerOnce={true} delay={2000} duration={8000}>
                <Slide direction='left' duration={4000} triggerOnce={true}>
                    <h1 style={{ color: 'white', paddingLeft: '5rem' }}>MULTIPLAYER</h1>
                </Slide>
                <p style={{ color: 'white', paddingLeft: '5rem' }}><b style={{ color: 'rgb(41, 100, 139)' }}>Co-operate: </b> Play alongside your friends with up to 4 players in this co-op horror where teamwork is key to your success.</p>
                <p style={{ color: 'white', paddingLeft: '5rem',  }}><b style={{ color: 'rgb(41, 100, 139)' }}>Play together: </b>  Phasmophobia supports all players together, play with your friends with any combination of input types.</p>

            </Fade>
        </div>
    )
}

export default TheGame