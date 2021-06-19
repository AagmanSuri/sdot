import React from 'react';
import './Content.css';
import img from './contentimg.svg'
function Content() {
    return (
        <div>
            <h1 className='heading'>Data Analytics<br></br>solutions for startup <br></br>Agency</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua.</p>
            <small>
                <ul className='mdn'>
                    <li>✓ Learn with our comprehensive and experiencd  </li><br></br>
                    <li>✓ Step into the world of practical data science  </li>
                </ul>
            </small>
             <img className='contentimg' alt='Loading' src={img}></img>
             <ul className='Learn'>
                 <li>Learn More</li>
             </ul>
             
        </div>
    )
}

export default Content;
