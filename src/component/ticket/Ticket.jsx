import { Key } from 'lucide-react';
import React, { use } from 'react';

const Ticket = ({ tickets, updateProgress }) => {
    const fetchTicket = use(tickets);
    const ticketData = fetchTicket.tickets;
    return (
        <>
            {
                ticketData.map(ticket => (
                    <div onClick={() => updateProgress(ticket)} key={ticket.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between transition-all hover:shadow-md cursor-pointer">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-[17px] font-bold text-gray-800 leading-tight">{ticket.title}</h3>


                            {ticket.status == "Open" ? (

                                <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                                    {ticket.status}
                                </div>
                            ) : (
                                <div className="flex items-center gap-2 bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                                    <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
                                    In- Progress
                                </div>
                            )}



                        </div>
                        <p className="text-gray-500 text-[14px] leading-relaxed mb-6 line-clamp-2">
                            {ticket.description}
                        </p>
                        <div className="flex justify-between items-center text-[11px] font-bold tracking-wider uppercase">
                            <div className="flex gap-4 items-center">
                                <span className="text-gray-400">{ticket.id}</span>

                                {ticket.priority == "High" && <span className="text-red-500">High Priority</span>}
                                {ticket.priority == "Medium" && <span className="text-amber-500">Medium Priority</span>}
                                {ticket.priority == "Low" && <span className="text-emerald-500">Low Priority</span>}
                            </div>
                            <div className="flex items-center gap-4 text-gray-500 lowercase first-letter:uppercase">
                                <span className="capitalize">{ticket.customer}</span>
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                    {ticket.date}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default Ticket;