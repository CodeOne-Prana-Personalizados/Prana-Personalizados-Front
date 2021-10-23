import React from 'react'
import Footer from 'components/Footer';
import HeaderP from 'components/HeaderP';

const LayoutP = ({Children}) => {
    return (
        <div className='mainContainer'>
            <HeaderP/>
            <div>{Children}</div>
            <Footer/>
        </div>
    );
};

export default LayoutP;
