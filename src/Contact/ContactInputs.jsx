import React, { useState } from 'react';
import SVGfile from "./assets/admin.svg";

import axios from 'axios';

const ContactInputs = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
       
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // Here you can handle form submission, such as sending data to a server
        console.log('Form submitted:', formData);
        await axios.post("https://graycorp.io/mail/mail",formData)// You can also reset the form fields if needed
        setFormData({
            name: '',
            mobile: '',
            email: '',
            message: ''
        });
    };

    return (
        <div className='md:w-1/2 mob:w-full h-full md:p-2'>
            <form onSubmit={handleSubmit}>
                <div className='p-2 flex flex-col gap-3 justify-end relative'>
                    <div className='flex justify-between'>
                        <input type='text' placeholder='Name' name='name' value={formData.name} onChange={handleChange}
                            className='md:w-64 mob:w-1/2 h-12 pl-3 border-2 border-[#cccccc]' />
                        <input type='number' placeholder='Mobile' name='mobile' value={formData.mobile} onChange={handleChange}
                            className='md:w-64 mob:w-1/2 h-12 pl-3 border-2 border-[#cccccc]' />
                    </div>
                    <div className='flex'>
                        <input type='email' placeholder='E-Mail' name='email' value={formData.email} onChange={handleChange}
                            className='w-full h-12 pl-3 border-2 border-[#cccccc]' />

                    </div>
                    <div className='flex'>
                        <textarea placeholder='Message' name='message' value={formData.message} onChange={handleChange}
                            className='w-full h-64 pl-3 border-2 border-[#cccccc] resize-none' />

                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' name='message'
                            className='w-1/3  h-10 border-[#cccccc] bg-[#333333] text-[#cccccc]
                            hover:text-[#cccccc] hover:bg-[#666666]'>
                            Submit
                        </button>

                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactInputs;
