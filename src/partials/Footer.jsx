import React from 'react'
import { Link }  from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-nav">
                    <Link to="/" className="secondary-text">Support</Link>
                    <Link to="/" className="secondary-text">Learning</Link>
                    <Link to="/" className="secondary-text">Русская версия</Link>
                </div>
                <p className="secondary-text">© 2020 Your Name</p>
            </div>
        </footer>
    )
}
