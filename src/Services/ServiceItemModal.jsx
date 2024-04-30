import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import './service.css';

export const ItSolutionServices = () => {
    const ItSolutionServices = [
        {
            title: "Website Development",
            description: `IT solutions encompass technology-based approaches to address business needs, 
                          including software, hardware, cloud services, 
                          security measures, and tailored digital solutions.`,
        },
        {
            title: "Mobile app Development",
            description: `IT solutions encompass technology-based approaches to address business needs, 
                          including software, hardware, cloud services, 
                          security measures, and tailored digital solutions.`,
        },
        {
            title: "Fullstack Development",
            description: `IT solutions encompass technology-based approaches to address business needs, 
                          including software, hardware, cloud services, 
                          security measures, and tailored digital solutions.`,
        },
        {
            title: "Supporting & Maintenance",
            description: `IT solutions encompass technology-based approaches to address business needs, 
                          including software, hardware, cloud services, 
                          security measures, and tailored digital solutions.`,
        },
    ];
    
  
    const [selectedService, setSelectedService] = useState(null);
    const [open, setOpen] = useState(false);
    const showModal = (index) => {
        setSelectedService(ItSolutionServices[index]);
        setOpen(true);
    };

    const closeModal = () => {
        setSelectedService(null);
        setOpen(false);
    };

    return (
        <div className='serviceItemsSub'>
            {ItSolutionServices.map((service, index) => (
                <button key={index} className='serviceItemButton' onClick={() => showModal(index)}>
                    {service.title}
                </button>
            ))}
            <Modal
                title={selectedService ? selectedService.title : ""}
                open={open}
                onOk={closeModal}
                onCancel={closeModal}
                okButtonProps={{
                    style: {
                        backgroundColor: '#999999',
                        borderColor: '#666666',
                        borderRadius: "0px",
                    }
                }}
                footer={null}
            >
                {selectedService && <p>{selectedService.description}</p>}
            </Modal>
        </div>
    );
};

export const MarketingServices = () => { 
  const [selectedService, setSelectedService] = useState(null);
    const [open, setOpen] = useState(false);
    const showModal = (index) => {
        setSelectedService(MarketingServices[index]);
        setOpen(true);
    };

    const closeModal = () => {
        setSelectedService(null);
        setOpen(false);
    };
  const MarketingServices = [
    {
        title: "Product Branding",
        description: `IT solutions encompass technology-based approaches to address business needs, 
                      including software, hardware, cloud services, 
                      security measures, and tailored digital solutions.`,
    },
    {
        title: "Business Promotion",
        description: `IT solutions encompass technology-based approaches to address business needs, 
                      including software, hardware, cloud services, 
                      security measures, and tailored digital solutions.`,
    },
    {
        title: "Digital Marketing",
        description: `IT solutions encompass technology-based approaches to address business needs, 
                      including software, hardware, cloud services, 
                      security measures, and tailored digital solutions.`,
    },
    {
        title: "Social Media Marketing",
        description: `IT solutions encompass technology-based approaches to address business needs, 
                      including software, hardware, cloud services, 
                      security measures, and tailored digital solutions.`,
    },
];
  return (
    <div className='serviceItemsSub'>
    {MarketingServices.map((service, index) => (
        <button key={index} className='serviceItemButton' onClick={() => showModal(index)}>
            {service.title}
        </button>
    ))}
    <Modal
        title={selectedService ? selectedService.title : ""}
        open={open}
        onOk={closeModal}
        onCancel={closeModal}
        footer={null}
        okButtonProps={{
            style: {
                backgroundColor: '#999999',
                borderColor: '#666666',
                borderRadius: "0px",
            }
        
        }}
    >
        {selectedService && <p>{selectedService.description}</p>}
    </Modal>
</div>
)
}

export const ConsultingSupporting = () => { 
  const [selectedService, setSelectedService] = useState(null);
    const [open, setOpen] = useState(false);
    const showModal = (index) => {
        setSelectedService(Services[index]);
        setOpen(true);
    };

    const closeModal = () => {
        setSelectedService(null);
        setOpen(false);
    };
    const Services = [
      {
          title: "Web & Mobile app consulting",
          description: `IT solutions encompass technology-based approaches to address business needs, 
                        including software, hardware, cloud services, 
                        security measures, and tailored digital solutions.`,
      },
      {
          title: "Branding Consulting",
          description: `IT solutions encompass technology-based approaches to address business needs, 
                        including software, hardware, cloud services, 
                        security measures, and tailored digital solutions.`,
      },
      {
          title: "Promotion consulting",
          description: `IT solutions encompass technology-based approaches to address business needs, 
                        including software, hardware, cloud services, 
                        security measures, and tailored digital solutions.`,
      },
      {
          title: "Digital Supports",
          description: `IT solutions encompass technology-based approaches to address business needs, 
                        including software, hardware, cloud services, 
                        security measures, and tailored digital solutions.`,
      },
      
  ];
  return (
    <div className='serviceItemsSub'>
    {Services.map((service, index) => (
        <button key={index} className='serviceItemButton' onClick={() => showModal(index)}>
            {service.title}
        </button>
    ))}
    <Modal
        title={selectedService ? selectedService.title : ""}
        open={open}
        onOk={closeModal}
        onCancel={closeModal}
        footer={null}
        okButtonProps={{
            style: {
                backgroundColor: '#999999',
                borderColor: '#666666',
                borderRadius: "0px",
            }
        }}
    >
        {selectedService && <p>{selectedService.description}</p>}
    </Modal>
</div>
)
}