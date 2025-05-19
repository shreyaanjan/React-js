import React from 'react'

const Video = () => {
    return (
        <section className='box'>
            <div className='video-play'>
                <video muted autoPlay >
                    <source src="https://leverage-html.codings.dev/assets/videos/colors.mp4" type="video/mp4" />
                </video>
                <div className="container " >
                    <div className='position-relative z-index center'>
                        <h2 className='videotitle'>ARE YOU READY?</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video