import React, {useState} from 'react';
import '../mystyle.css';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';
const Header = ()=>{
    const links = ['home', 'about', 'follow']
    const [slideIn, determinant] = useState('')
    
    return(
        <header>
            <Router>
                <nav>
                    <div className='hambugger' onClick={() => {
                        if (slideIn === 'slide-in') {
                            determinant('slide-out')
                        } else if (slideIn === 'slide-out') {
                            determinant('slide-in')
                        } else {
                            determinant('slide-in')
                        }
                    }}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='logo'>
                        Radiance
                </div>
                    <div className={`sub ${slideIn}`}>
                        {links.map(link => (
                            <div>
                                <Link to={'/' + link}
                                onClick = {()=>{
                                    determinant('slide-out')
                                }}
                                >{link}</Link>
                            </div>
                        ))}
                    </div>
                </nav>
            </Router>
        </header>
    )
};
export default Header