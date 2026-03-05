import React, { useState } from 'react';
import Ticket from './Ticket';
import Status from '../status/Status';


const tickets = fetch('/tickets.json').then((response) => response.json());

const Tickets = () => {

    const [inProgress, setInProgress] = useState([]);

    const updateProgress = (ticket) => {

        if (!inProgress.includes(ticket.title)) {

            const toalProgress = [...inProgress, ticket.title];
            setInProgress(toalProgress);
        }

    }

    const completetask = (title) => {
        const updatetask = inProgress.filter(item => item !== title);
        setInProgress(updatetask);
    }

    const [count, setCount] = useState(0);

    return (
        <>
            <div className='px-4'>
                <Status inProgress={inProgress} count={count}></Status>
            </div>
            <div className='container px-4 mx-auto flex flex-col-reverse md:flex-row gap-5'>

                <div className=''>
                    <h3 className='text-black text-2xl mb-4'>Customer Tickets</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <Ticket tickets={tickets} updateProgress={updateProgress}></Ticket>
                    </div>
                </div>
                <div className='lg:w-1/2 text-black'>
                    <h3 className=' text-2xl mb-4'>Task Status</h3>

                    {
                        inProgress.map(item => (
                            <div className='bg-white p-4 rounded-sm border border-gray-100 shadow-sm flex flex-col justify-between transition-all hover:shadow-md mb-4'>
                                <h4 className='text-sm'>{item}</h4>
                                <button onClick={() => {
                                    completetask(item);
                                    setCount(count + 1);
                                }} className="bg-[#02A53B] mt-4 p-1 text-white rounded-sm border cursor-pointer">Complete</button>
                            </div>))
                    }

                </div>
            </div >
        </>
    );
};

export default Tickets;