'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Select,Field } from '@headlessui/react'
import { message } from 'antd';
import axios from 'axios';


export default function CareerModal() {
const [opened, setOpened] = useState(false)
const [position, setPosition] = useState('') // To track the selected position
const [file, setFile] = useState(null) 
const [open, setOpen] = useState(false)// To track the uploaded file

// Handler for the file input change
const handleFileChange = (event) => {
  setFile(event.target.files[0]); // Set the first uploaded file
};

// Handler for the position change
const handlePositionChange = (event) => {
  setPosition(event.target.value);
};

// Function to handle form submission
const handleSubmit = async () => {
  if (!position || !file) {
    message.error('Please select a position and upload a file.');
    return;
  }

  const formData = new FormData();
        formData.append("position", position);
        formData.append("file", file);

        try {
            // Send the form data with axios POST
            const formSubmit = await axios.post("http://192.168.1.93:8000/email/send-cv/", formData);

            // Check if the response status is 200 (success)
            if (formSubmit.status === 200) {
                alert('Successfully forwarded', formSubmit.data);
            }
            else {alert(formSubmit.status)}
        } catch (error) {
            console.error('Error submitting form:', error);
        }
  setOpen(false)
  setOpened(false); 
 // Close the modal after submission
};
  

  return (
    <div className=""> 

    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 
        bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300
        data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg 
            bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 
            data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 
            data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg 
            data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="flex flex-col justify-center text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                    Upload Your CV
                  </DialogTitle>
                  <div className='h-10'></div>
                  <div className="">
                  <label className='text-sm'>Select the position </label>
                
                    <Select className="mt-3 block w-full appearance-none rounded-lg border-2 bg-white/5 py-1.5 px-3 text-sm/6 text-white',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25',
                    // Make the text of each option black on Windows
                    '*:text-black"
                    value={position} onChange={handlePositionChange}>
                      <option>
                      Associate Software Engineer - (Flutter)
                      </option>
                      <option>
                      Intern Software Engineer - (Flutter)
                      </option>
                    </Select>
                    <div className='h-12'></div>
                    <input className="block w-full text-sm text-[#333333] border border-gray-300 
                    rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none
                     dark:bg-[#cccccc] dark:border-gray-600 dark:placeholder-gray-400" 
                     id="file_input" type="file" onChange={handleFileChange}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#f6f6f6] flex p-2 justify-end">
            <button
           
                type="button"
                data-autofocus
                onClick={() => {setOpen(false)
                     
                   }}
                className="inline-flex justify-center bg-white p-2 w-1/2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="
                inline-flex justify-center bg-[#333333] 
                text-sm font-semibold text-white shadow-sm
                 hover:bg-[#666666] sm:ml-3 sm:w-auto w-1/2 p-2"
              >
                Apply
              </button>
             
            </div>
           
          </DialogPanel>
        </div>
      </div>
    </Dialog>
    </div>
  )


}

