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
                            <p className='text-center text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, placeat natus. Aspernatur modi repellat dicta laborum voluptate temporibus quia necessitatibus rem esse cumque odio, ut repellendus tempore veritatis molestiae nobis.</p>
                            <div className='text-center'>
                                <button className='contact-btn'>Contact us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video