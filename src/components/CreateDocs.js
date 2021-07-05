import React from 'react'

export default function CreateDocs(props) {
    return (
        <div className="col-span-10 col-start-2 min-h-screen">
            <div className="grid grid-cols-12 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 mt-28 h-4/5 rounded-md">
                <div className="col-span-1">
                    <button className=" bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 px-8 py-2 rounded-md border border-white text-xl text-white m-10 block hover:opacity-75 hover:border-blue-200">Open</button>
                    <button onClick={props.simulateSubmitSaveDoc} className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 px-8 py-2 rounded-md border border-white text-xl text-white m-10 block hover:opacity-75 hover:border-blue-200">Save</button>
                    <button onClick={props.clearDoc} className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 px-8 py-2 rounded-md border border-white text-xl text-white m-10 block hover:opacity-75 hover:border-blue-200">Clear</button>
                </div>
                <form onSubmit={props.handleSave}className="col-span-10 col-start-3 m-6 rounded bg-white">
                    <textarea ref={props.docText} className="w-full h-full"></textarea>
                    <button id="saveDoc" type="submit" hidden></button>
                </form>
                
            </div>
        </div>
    )
}
