import React from 'react';
import Image from 'next/image';
import myImage from '../../images/Website Pictures/aboutus.jpg';
import NavBar from '../../reusable_components/nav_bar/page'; 




function MyComponent() {
    return (
        <div className='landingpage'>
            <NavBar />

            <Image src={myImage} alt="images" />
            <Image src={myImage} alt="images" />
            <Image src={myImage} alt="images" />
            <Image src={myImage} alt="images" />
            <Image src={myImage} alt="images" />
            <div className='text-overlay'>About Us</div>

        </div>
    );
}

export default MyComponent;
