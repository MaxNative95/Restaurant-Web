import React from 'react'
import {
    FaAt,
    FaInstagram,
    FaGithub,
    FaTwitter,
    FaLinkedin,
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements';


const Footer = () => {
    return(
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">A La Parrila &copy; 2023</SocialLogo>
                        <SocialIcons>
                        <SocialIconLink 
                            href="/" target="_blank" aria-label="Email" rel="noopener noreferrer">
                                <FaAt />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="https://www.instagram.com/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="https://github.com/MaxNative95" target="_blank" aria-label="GitHub" rel="noopener noreferrer">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="https://www.linkedin.com/in/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="https://www.twitter.com/in/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;