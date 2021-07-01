import React from 'react'

export default function CreateDocs() {
    return (
        <div className="col-span-10 col-start-2 min-h-screen">
            <div className="grid grid-cols-12 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 mt-20 h-4/5 rounded-md">
                <div className="col-span-1">
                    <button className=" bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 px-8 py-2 rounded-md border border-white text-xl text-white m-10 block">Open</button>
                    <button className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 px-8 py-2 rounded-md border border-white text-xl text-white m-10 block">Save</button>
                    <button className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 px-8 py-2 rounded-md border border-white text-xl text-white m-10 block">Clear</button>
                </div>
                <div className="col-span-10 col-start-3 m-6 rounded bg-white">
                    <textarea className="w-full h-full"></textarea>
                </div>
            </div>
        </div>
    )
}
