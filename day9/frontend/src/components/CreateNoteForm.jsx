import { useAuth } from '@clerk/clerk-react'
import axios from 'axios'
import React, { useState } from 'react'

const CreateNoteForm = ({ getNotes }) => {

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const { getToken } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        const token = await getToken()
        const elements = e.target.elements
        const title = elements.title.value
        const description = elements.desc.value
        await axios.post('https://notes-app-basic.onrender.com/api/notes', {
            title, description
        }, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        })
        setTitle('')
        setDesc('')
        getNotes()
    }

    return (
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full h-20 flex justify-center items-center">
            <form onSubmit={handleSubmit} className="flex justify-center items-center gap-3">
                <input name='title' onChange={(e) => { setTitle(e.target.value) }} value={title} type="text" placeholder='Enter title' className="rounded py-2 px-5 bg-white text-md font-medium text-black/60" />
                <input name='desc' onChange={(e) => { setDesc(e.target.value) }} value={desc} type="text" placeholder='Enter description' className="rounded py-2 px-5 bg-white text-md font-medium text-black/60" />
                <button className="px-5 py-2 rounded bg-emerald-400 cursor-pointer" type='submit'>Create</button>
            </form>
        </div>
    )
}

export default CreateNoteForm