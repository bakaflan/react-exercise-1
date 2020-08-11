import React from 'react';
import avatarURL from '../assets/avatar.jpg'
import '../styles/avatar.css'


class Avatar extends React.Component {
    
    render() {
        return (
        <div className = 'avatar'>
            <img className = 'image-size' src = {avatarURL}></img>
            <h1>
                HELLO,
            </h1>
            <h1>
                MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV
            </h1>
        </div>
        )
    }
}

export default Avatar;