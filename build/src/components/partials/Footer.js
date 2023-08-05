import React from 'react'
import './Footer.css'
function Footer() {
    const year=new Date().getFullYear();
  return (
    <>
      
    <footer className="footer-container">
        <div className="footer-mid-container">
            <div className="footer-first-container">
                <div className="footer-first">
                    <h2 className="footer-text-heading">Vikash`s Portfolio</h2>
                    <p className="footer-text middle">Thank you for visiting my portfolio website. Feel free to reach out to
                        me
                        for any inquiries or collaboration opportunities.</p>
                    <p className="footer-text ">Keep Rising <span className="fire-icon"> 🚀</span> . Connect with over live
                        chat!
                    </p>
                </div>
            </div>
            <div className="footer-second-container">
                <div className="footer-second">

                    <h2 className="footer-text-heading">Quick links</h2>
                    <div className="guicklinkarrow-container" id="footer-home">
                        <p className="quickarrow">
                            <span className="quickarrow-span">&#8250;</span>
                        </p>
                        <p className="quickarrow-text">Home</p>


                    </div>
                    <div className="guicklinkarrow-container" id="footer-about">
                        <p className="quickarrow">
                            <span className="quickarrow-span">&#8250;</span>
                        </p>
                        <p className="quickarrow-text">About Me</p>


                    </div>
                     
                    <div className="guicklinkarrow-container" id="footer-contact">
                        <p className="quickarrow">
                            <span className="quickarrow-span">&#8250;</span>
                        </p>
                        <p className="quickarrow-text">Contact</p>


                    </div>

                </div>


            </div>
            <div className="footer-third-container">
                <div className="footer-third contact-footer">


                    <h2 className="footer-text-heading">Contact Info</h2>
                    <div className="contact-info-container">
                        <p className="contact-info"><i className="fi-xnsuxl-phone-solid contact-info-icon"></i>
                            <a href="tel:7362885182" className="attributes">
                                <p className="contact-info-text">+91 7362885182</p>
                            </a>
                        </p>
                    </div>
                    <div className="contact-info-container">
                        <p className="contact-info"><i className="fi-xwsuxl-envelope-solid contact-info-icon"></i>
                            <a href="mailto:vikashjjp728@gmail.com" className="attributes">
                                <p className="contact-info-text">vikashjjp728@gmail.com</p>
                            </a>
                        </p>
                    </div>
                    <div className="contact-info-container">
                        <p className="contact-info"><i className="fa-solid fa-map-location-dot contact-info-icon contact-info-bottom"></i>
                            <a href="/" className="attributes">
                                <p className="contact-info-text">Madhubani (Bihar), India-847410</p>
                            </a>
                        </p>
                    </div>

                    <div className="contact-info-list-container">
                        <p className="contact-info-icon-container"><a href="https://www.linkedin.com/in/vikash-kumar-8467b0253/" target=" " className="link-container"><i className="fi-cnsuxl-linkedin  linkedin"></i></a></p>
                        <p className="contact-info-icon-container"><a href="https://github.com/vikashkrdeveloper" target=" " className="link-container"><i className="fi-xnsuxl-github  github"></i></a></p>
                        <p className="contact-info-icon-container"><a href="mailto: vikashjjp728@gmail.com" target=" " className="link-container"><i className="fi-xwsuxl-envelope-solid mailbox "></i></a></p>
                        <p className="contact-info-icon-container"><a href="https://twitter.com/vikash2696v" target=" " className="link-container"><i className="fi-xnsuxl-twitter-solid  twiter"></i></a></p>
                        <p className="contact-info-icon-container"><a href="https://web.telegram.org/k/#-623765924" target=" " className="link-container"><i className="fi-xnsuxl-telegram  telegram"></i></a>
                        </p>
                    </div>

                </div>

            </div>

        </div>

        <div className="developer-container">
            <p className="quickarrow-text"><a href="https://www.linkedin.com/in/vikash-kumar-8467b0253/" target=" " className="attributes">Developed with <span className="developer-name"> By <span className="developername">
                            @vikash kumar</span></span> </a></p>
        </div>
        <div className="copyright-container">
            <p className="quickarrow-text copy-right-text ">Copyright &#169; vikash
                kumar <span id="copy-right-year">{year}</span> All rights reserved</p>

        </div>
    </footer>
    </>
  )
}

export default Footer
