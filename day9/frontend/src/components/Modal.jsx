import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Modal = ({ id, isEditing, setIsEditing, currentTitle, currentDesc, getNotes }) => {

    const [title, setTitle] = useState(currentTitle)
    const [desc, setDesc] = useState(currentDesc)

    useEffect(() => {
        setTitle(currentTitle)
        setDesc(currentDesc)
    }, [currentTitle, currentDesc])

    async function handleEdit(e) {
        e.preventDefault()
        console.log(title, desc)
        await axios.patch(`http://localhost:3000/api/notes/${id}`, {
            title, description: desc
        })
        getNotes()
    }

    return (
        <div className={`absolute top-0 left-0 w-screen h-screen justify-center items-center bg-black/20 backdrop-blur-2xl ${isEditing ? 'flex' : 'hidden'}`}>
            <div className="w-100 flex justify-center items-center p-5 bg-slate-900 rounded">
                <form onSubmit={(e) => {
                    setIsEditing(false)
                    handleEdit(e)
                }} className="w-full flex flex-col justify-center items-center gap-3">
                    <input name='title' onChange={(e) => { setTitle(e.target.value) }} value={title} type="text" placeholder='Enter title' className="w-full px-2 py-3 rounded bg-white text-md font-medium text-black/60" />
                    <input name='desc' onChange={(e) => { setDesc(e.target.value) }} value={desc} type="text" placeholder='Enter description' className="w-full px-2 py-3 rounded bg-white text-md font-medium text-black/60" />
                    <button type='submit' className="px-6 py-2 rounded bg-emerald-400 cursor-pointer" type='submit'>Save</button>
                </form>
            </div>
        </div>
    )
}

export default Modal