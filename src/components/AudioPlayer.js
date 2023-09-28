import React, { useState, useRef } from 'react';
import tracks from '../data/tracks';
import styles from '../styles/AudioPlayer.module.css';
import { MdKeyboardArrowLeft } from 'react-icons/md'; //back button icon
import { FaPlay } from 'react-icons/fa'; //play button icon
import { FaPause } from 'react-icons/fa'; //pause button icon
import { IoMdShuffle } from 'react-icons/io'; //shuffle button icon
import { BiSolidVolumeFull } from 'react-icons/bi'; //volume button icon
import { BiSolidVolumeMute } from 'react-icons/bi'; //mute button icon

export default function AudioPlayer() {

    //state

    const [isPlaying, setIsPlaying] = useState(false); //set to false bc we don't want the player to play automatically!
    const [isVolumeOn, setIsVolumeOn] = useState(true);

    //references
    const audioPlayer = useRef();

    const togglePlayPause = () => { //This function switches the play/pause buttons depending on
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);   //if the isPlaying state is true or false.
        if (!prevValue) {
            audioPlayer.current.play();
        } else {
            audioPlayer.current.pause();
        }
    }

    const toggleVolumeMute = () => { //This function switches the volume/mute buttons depending on
        setIsVolumeOn(!isVolumeOn);  //if the setIsVolumeOne state is true or false.
        if (isVolumeOn) {
            audioPlayer.current.volume();
        } else {
            audioPlayer.current.muted();
        }
    }

    //This link doesn't work (it's a free audio download from Pixabay that I was trying to use for testing purposes)
    //Here I am conditionally rendering the Play/Pause and Volume/Mute buttons
    return (
        <div className={styles.audioPlayer}>
            <audio ref={audioPlayer} src="lofi-chill-medium-version-159456.mp3" preload="metadata"></audio>
            <button className={styles.back}><MdKeyboardArrowLeft /></button>

            <button className={styles.play} onClick={togglePlayPause}>
                { isPlaying ? <FaPause /> : <FaPlay /> }
            </button>

            <button><IoMdShuffle /></button>

            <button onClick={toggleVolumeMute}>
                { isVolumeOn ? <BiSolidVolumeFull /> : <BiSolidVolumeMute /> }
            </button>

            <input className={styles.volume} type="range" min="0" max="100" />
            
        </div>
    )
}