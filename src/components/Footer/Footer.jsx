import React from 'react';
import discord from '../../assets/icons/discord.svg';
import vk from '../../assets/icons/vk.svg';
import telegram from '../../assets/icons/telegram.svg';
import './_Footer.scss'

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer__container container">
                <div className="footer__logo">
                    <a href="/" className="logo">CleanTweaking</a>
                </div>
                <div className="footer__contact">
                    <a target='_blank' href="https://discord.com/invite/GBvf9uM2"><img src={discord} alt="" className="footer__img"/></a>
                    <a target='_blank' href="https://t.me/Clean_0K"> <img src={telegram} alt="" className="footer__img"/></a>
                    <a target='_blank' href="https://vk.com/clean_ok69"><img src={vk} alt="" className="footer__img"/></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;