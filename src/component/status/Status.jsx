import React from 'react';

const Status = ({ inProgress }) => {
    return (
        <div >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 container mx-auto mt-10">
                <div className="h-64 rounded-2xl p-8 flex flex-col items-center justify-center text-white bg-[url(./assets/bg1.png)] bg-no-repeat bg-cover">
                    <h3 className="text-2xl font-medium mb-2">In-Progress</h3>
                    <span className="text-8xl font-bold">0</span>
                </div>
                <div className="h-64 rounded-2xl p-8 flex flex-col items-center justify-center text-white bg-[url(./assets/bg2.png)] bg-no-repeat bg-cover">
                    <h3 className="text-2xl font-medium mb-2">Resolved</h3>
                    <span className="text-8xl font-bold">0</span>
                </div>

            </div>
        </div>
    );
};

export default Status;