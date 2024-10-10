import './Moto_video.scss'
import ReactPlayer from 'react-player/youtube'
import { useState } from 'react'

// images
import play_icon from './icons/play.svg'

export default function Moto_video({ img, videoUrl }){
    const [play, setPlay] = useState(false)
    

    window.addEventListener('click', (e) => {
        let id = e.target.id

        if(id == 'playButton')
            setPlay(true)
        else
            setPlay(false)
    });

    return (
        <section className="moto_video" data-active={play}>
            <div className="content">
                <div className="image left" style={{backgroundImage: `url(${img})`}}></div>
                <div className="image right" style={{backgroundImage: `url(${img})`}}></div>
                <ReactPlayer id="video_content" playing={play} url={videoUrl} />
                <button id="playButton" onClick={() => {setPlay(true)}}><img src={play_icon} alt="" /></button>
            </div>
        </section>
    )
}

