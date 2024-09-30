import React from 'react';
import Tab from "../Tab/Tab.jsx";
import './_Services.scss'

const Services = () => {
    return (
        <section className="services" id={'services'}>
            <div className="services__container container">
                <h2 className="services__title">Услуги</h2>
                <Tab/>
            </div>
        </section>
    );
};

export default Services;