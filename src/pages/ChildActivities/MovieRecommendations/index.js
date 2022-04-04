import React, { useState } from 'react';
import './index.css';

export default function MovieRecommendations() {
    const [currentTrailerIndex, setCurrentTrailerIndex] = useState(0);
    const changePage = idx => setCurrentTrailerIndex(idx);

    const prevIcon = (
        <svg width="27" height="35" viewBox="0 0 27 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 2L4 26.5L25 51" stroke="#038C3E" strokeWidth="5" />
        </svg>
    )
    const nextIcon = (
        <svg width="27" height="35" viewBox="0 0 27 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 51L23 26.5L2 2" stroke="#038C3E" strokeWidth="5" />
        </svg>
    )

    const previousTrailer = () => {
        if (currentTrailerIndex === 0) return;
        changePage(currentTrailerIndex - 1)
    };

    const nextTrailer = () => {
        if (currentTrailerIndex === (videoIds.length - 1)) return;
        changePage(currentTrailerIndex + 1)
    };
    const videoIds = [
        {
            label: 'Encanto (2021)',
            video_id: 'zRMicKd9IH8'
        },
        {
            label: 'Luca (2021)',
            video_id: 'E7_4ZUpyoWM'
        },
        {
            label: 'Shrek (2001)',
            video_id: 'Cvf19P42sNo'
        },
        {
            label: 'Soul (2020)',
            video_id: 'hWBxoH4-4yw'
        },
        {
            label: 'Turma da Monica - Laços (2019)',
            video_id: 'Mjz_IqLtI58'
        },
        {
            label: 'Viva - A vida é uma festa (2018)',
            video_id: 'iLmZZV-Nkuk'
        },
        {
            label: 'Moana (2017)',
            video_id: 'LKFuXETZUsI'
        },
        {
            label: 'O pequeno príncipe (2015)',
            video_id: '7WoO-luLshk'
        },
        {
            label: 'Divertida Mente (2015)',
            video_id: 'ukQeR3zYncw'
        },
        {
            label: 'Float (2019)',
            video_id: 'JG7Xgy1akzI'
        },
        {
            label: 'Hair Love (2019)',
            video_id: 'kNw8V_Fkw28'
        },
        {
            label: 'La Luna (2011)',
            video_id: 'r-SG6sTTygw'
        },
        {
            label: 'Ex ET (2008)',
            video_id: 'ilJri3gRLME'
        },
        {
            label: 'Aprender a aprender (2005)',
            video_id: 'GvsEqthCTxU'
        },
    ]

    return (
        <div className="movie-recommendations" >
            <h1 className="text-title">Indicações de filmes</h1>
            <span>
                Nada melhor do que ter momentos em família, né?! Para deixá-los ainda mais
                divertidos sugerimos algumas indicações de filmes e curtas que com certeza
                vão agradar a toda família!
            </span>
            <center>
                <div style={{ border: '3px solid #038C3E', maxWidth: 800 }}>
                    <div className="d-flex">
                        <div
                            style={{ border: '3px solid #038C3E', width: '10%', cursor: 'pointer', textAlign: 'center' }}
                            onClick={previousTrailer}
                            disabled={currentTrailerIndex === 0}>
                            {prevIcon}
                        </div>
                        <div
                            style={{ border: '3px solid #038C3E', width: '10%', cursor: 'pointer', textAlign: 'center' }}
                            onClick={nextTrailer}
                            disabled={currentTrailerIndex === videoIds.length - 1}
                        >
                            {nextIcon}
                        </div>
                        <div style={{ border: '3px solid #038C3E', width: '81%', cursor: 'pointer', paddingTop: 5, textAlign: 'center' }}>
                            {videoIds[currentTrailerIndex].label}
                        </div>
                    </div>
                    <iframe
                        width="100%"
                        height="370"
                        title={videoIds[currentTrailerIndex].label}
                        src={
                            "https://youtube.com/embed/" +
                            videoIds[currentTrailerIndex].video_id +
                            "?mute=1"
                        }>
                    </iframe>
                </div>
            </center>
        </div>
    );
}