'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import axios from 'axios';
import { FaCloudUploadAlt } from 'react-icons/fa';
import Dragger from 'antd/es/upload/Dragger';

export default function ApplyJob(props) {
  
  const { applyPosition } = props

  const [opened, setOpened] = useState(false)
  const [position, setPosition] = useState('') // To track the selected position
  const [myFile, setMyFile] = useState(null) // To track the uploaded file
  const [open, setOpen] = useState(false) // To track the modal state

  // Handler for file selection using Dragger
  const handleFileChange = (info) => {
    const { status, originFileObj } = info.file;
    setMyFile(info.file)
    console.log(myFile)
  };

  // Handler for the position change (if you're adding a position selection)
  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async () => {
  if (!myFile) {
    message.error('Please upload a file.');
    return;
  }

  const formData = new FormData();
  formData.append("position", applyPosition)
  formData.append("file", myFile);

  try {
    const response = await axios.post("http://192.168.1.93:8000/email/send-cv/", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 200) {
      message.success('File uploaded successfully.');
    } else {
      message.error(`Upload failed with status code: ${response.status}`);
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    message.error('There was an error uploading the file.');
  }

  // Close modal after submission
  setOpen(false);
  setOpened(false);
};

  return (
    <div className="flex justify-center">
      <div className='h-16'></div> 
      <button className='text-center border-b-4 border-[#333333] p-[0.25vh]' onClick={() => setOpen(true)}>
        <h1 className='text-[#333333] font-semibold text-4xl'> Apply </h1>
      </button>

      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-center shadow-xl p-2 w-1/3">
              <div className="px-1 pb-4 sm:p-6 sm:pb-4 w-full h-80 flex text-center justify-center border-[#666666]">
                <div className="sm:flex sm:items-start flex justify-center w-full">
                  <div className="flex flex-col gap-3 justify-center text-center sm:ml-4 sm:mt-0 sm:text-left w-full p-2">
                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900 flex flex-col gap-5">
                      <Dragger onChange={handleFileChange} showUploadList={true} beforeUpload={() => false}>
                        <p className="text-3xl">Upload Your CV</p>
                        <div className='h-3'></div>
                        <div className='flex justify-center'>
                          <FaCloudUploadAlt className='text-6xl' />
                        </div>
                        <div className='h-6'></div>
                        <p className="font-normal">drag and drop to upload</p>
                        <p className='text-xs font-normal'>or</p>
                        <p className='text-xl'>browse files</p>
                      </Dragger>
                    </DialogTitle>
                  </div>
                </div>
              </div>
              <div className="flex p-2 justify-end">
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="inline-flex justify-center bg-[#f2f2f5] p-2 px-4 w-1/2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="inline-flex justify-center bg-[#333333] text-sm font-semibold text-white shadow-sm hover:bg-[#666666] sm:ml-3 sm:w-auto w-1/2 p-2 px-4"
                >
                  Apply
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
