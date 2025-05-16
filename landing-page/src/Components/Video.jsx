import React from 'react'

const Video = () => {
    return (
        <section className=''>
            <div className='video-play'>
                <video muted autoPlay >
                    <source src="https://leverage-html.codings.dev/assets/videos/colors.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    )
}

export default Video