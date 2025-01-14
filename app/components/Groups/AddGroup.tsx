"use client"

import React, { useState } from 'react';

interface Props {
    isOpen: boolean
    onAdd: (name: string) => void;
    onClose: () => void;
}

const AddGroup: React.FC<Props> = ({ isOpen, onAdd, onClose }) => {
    if (!isOpen) return null;
    const [name, setName] = useState("");

    const submit = () => {
        onAdd(name);
        setName("");
        onClose()
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl">
                <h1 className="text-3xl font-bold px-4 py-4">
                    Add/Edit Group
                </h1>
                <div> 
                    <div className="flex items-center justify-between py-2 px-4">
                        <input
                        className="border border-gray-300 bg-gray-50 rounded-lg p-2.5 w-2/3 mr-4"
                        placeholder="School Name"
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="px-4 flex justify-end">
                    <button onClick={onClose} className="text-1xl font-bold underline px-4"
                        style={{color:'#006330'}}>
                        Cancel
                    </button>
                    <button onClick={submit} className="rounded-full px-6 py-2"
                            style={{backgroundColor:'#B7E394'}}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddGroup;