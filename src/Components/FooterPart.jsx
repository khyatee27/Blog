import React from 'react';
import './FooterPart.css';
import phoneLogo from './phone.png';
import instaLogo from './insta.png'
import emailLogo from './email.png'
import fbLogo from './fb.png'
function FooterPart() {
    return (
        <>
            <div className='footer'>
                <div className='footer_group'>
                    <p className='lbl_connect'>Connect Us</p>
                    <div className='connect_logo'>
                        <img src={phoneLogo} alt='not found'></img>
                        <img src={instaLogo} alt="log not found" />
                        <img src={emailLogo} alt="log not found" />
                        <img src={fbLogo} alt="log not found" />
                    </div>

                </div>
                <p>Copyrights @</p>
            </div>
        </>
    )
}
export default FooterPart