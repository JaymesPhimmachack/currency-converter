import React from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="row">
            <div className="mx-auto">
            <p className="d-inline-block">&copy; 2019 Jaymes Phimmachack. All rights reserved</p>
            
                <div className="d-inline-block">
                    <a href="https://github.com/JaymesPhimmachack" className="mx-2"><FaGithubSquare /></a> 
                    <a href=" https://www.linkedin.com/in/jaymesphimmachack/"><FaLinkedin /></a>
                </div>
           </div>
        </footer>
    );
};


export default Footer; 