import React from 'react';
import {NavLink} from "react-router-dom";
import './_Tips.scss'

const Tips = () => {
    return (
        <section className={'tips'} id={'tips'}>
            <div className="tips__container container">
                <h5 className="tips__title">Полезные ссылки</h5>
                <div className="tips__content">
                    <NavLink to={'/buy'} className={'tips__item'}>Купить оптимизацию</NavLink>
                    <NavLink to={'/software'} className={'tips__item'}>Полезное ПО</NavLink>
                </div>
            </div>
        </section>
    );
};

export default Tips;