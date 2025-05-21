import React from 'react'

const Video = () => {
    return (
        <section className='box'>
            <div className='video-play'>
                <video muted autoPlay >
                    <source src="https://leverage-html.codings.dev/assets/videos/colors.mp4" type="video/mp4" />
                </video>
                <div className="container " >
                    <div className='d-flex justify-content-center align-items-center vh-100'>
                        <div className='position-relative  z-index '>
                            <h2 className='videotitle text-center'>ARE YOU READY?</h2>
                            <p className='text-center videodesc'>We are driven by creativity. We create innovative things to help you achieve better results and consolidate yourself in the market.</p>
                            <div className='text-center'>
                                <button className='contact-btn2'><i className="bi bi-rocket-takeoff"></i>Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video