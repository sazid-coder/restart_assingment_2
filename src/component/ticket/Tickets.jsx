import React, { useState } from 'react';
import Ticket from './Ticket';
import Status from '../status/Status';


const tickets = fetch('/tickets.json').then((response) => response.json());

const Tickets = () => {

    const [inProgress, setInProgress] = useState([]);

    const updateProgress = (ticket) => {
        const toalProgress = [...inProgress, ticket.title];
        setInProgress(toalProgress);
        console.log(inProgress);
    }
    <Status inProgress={inProgress}></Status>

    return (
        <>

            <div className='container mx-auto flex gap-5'>

                <div className=''>
                    <h3 className='text-black text-2xl'>Customer Tickets</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Ticket tickets={tickets} updateProgress={updateProgress}></Ticket>
                    </div>
                </div>
                <div className='w-1/3 text-black'>
                    <h3 className=' text-2xl'>Task Status</h3>

                    {
                        inProgress.map(item => (
                            <div className='bg-white p-4 rounded-sm border border-gray-100 shadow-sm flex flex-col justify-between transition-all hover:shadow-md mb-4'>
                                <h4 className='text-sm'>{item}</h4>
                                <button className="bg-[#02A53B] mt-4 p-1 text-white rounded-sm border cursor-pointer">Complete</button>
                            </div>))
                    }

                </div>
            </div>
        </>
    );
};

export default Tickets;