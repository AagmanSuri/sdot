import React from 'react';
import './Content.css';
import img from './contentimg.svg'
function Content() {
    return (
        <div>
            <h1 className='heading'>Data Analytics<br></br>solutions for startup <br></br>Agency</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.</p>
            <small>✓ Learn with our comprehensive and experiencd  </small>
             <img className='contentimg' alt='Loading' src={img}></img>
        </div>
    )
}

export default Content;
