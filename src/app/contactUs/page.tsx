import React from 'react';
import NavBar from '../../reusable_components/nav_bar/page'; 
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"





function MyComponent() {
    return (
        <div className='landingpage'>
            <NavBar />
            <h1>Contact Us</h1>
            <Input type="Name" placeholder='Name' className="w-96" />
            <Input type="Email" placeholder='Email' className="w-96" />
            <Input type="Phone Number" placeholder='Phone Number' className="w-96" />
            <Input type="Messages" placeholder='Messages' className="w-96" />
            <Button variant="outline">Button</Button>
        </div>
    );
}

export default MyComponent;
