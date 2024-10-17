import axios from 'axios';
import React, { useState } from 'react';

function CrudTest() {
    const [myName, setMyName] = useState("");
    const [myFile, setMyFile] = useState(null);

    const handleInput = (e) => {
        setMyName(e.target.value); // Set the input's value
    }
    const handleFile = (e) => {
        setMyFile(e.target.files[0]); // Set the input's value
    }

    const handleSubmit = async () => {
        const formData = new FormData();
        formData.append("position", myName);
        formData.append("file", myFile);

        try {
            // Send the form data with axios POST
            const formSubmit = await axios.post("http://localhost:8090/mymate/upload", formData);

            // Check if the response status is 200 (success)
            if (formSubmit.status === 200) {
                console.log('Response Data:', formSubmit.data);
            }
            else {console.log(formSubmit.status)}
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <div>
            <input 
                type='text' 
                name='name' 
                placeholder='Enter your name' 
                className='border-2' 
                onChange={handleInput} // Handle input changes
                value={myName} // Bind the value to input
            />
            <input 
                type='file' 
                name='upload' 
                placeholder='Enter your name' 
                className='border-2' 
                onChange={handleFile} // Handle input changes
              // Bind the value to input
            />
            <button type='submit' onClick={handleSubmit}>Click</button>
        </div>
    );
}

export default CrudTest;
