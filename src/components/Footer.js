import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className=' container'>
            <footer className="py-5 px-5 footer_bg ">
                <div className="row footer_row">
                    <p className='footer_text'>Questions? Call 000-800-040-1843</p>
                    <div className="col-6 col-md-2 mb-3 footer_col">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">FAQ</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Account</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Investor Relations</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Ways to Watch</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-3 footer_col">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Privacy</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Coporate Information</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Speed Test</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Only on Netflix</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-3 footer_col">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Help Center</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Media Center</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Jobs</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Terms of Use</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-2 mb-3 footer_col">
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Cookies Preferences</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Contact Us</a></li>
                            <li className="nav-item mb-2"><a href="/" className="nav-link p-0 ">Legal Notices</a></li>
                        </ul>
                    </div>
                    <p className='footer_text'>© 2025 Netflix India</p>
                    <p className="footer_text2">This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        <p className='footer_text2'> The information collected by Google reCAPTCHA is subject to the Google <a href='/'>Privacy Policy </a>and <a href='/'> Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).
                        </p>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer