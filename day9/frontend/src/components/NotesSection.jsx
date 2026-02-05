import { useAuth } from '@clerk/clerk-react'
import axios from 'axios'
import React from 'react'

const NotesSection = ({ notes, getNotes, setEditId, setEditTitle, setEditDesc, setIsEditing }) => {

    const { getToken } = useAuth()

    async function deleteNote(id) {
        const token = await getToken()
        await axios.delete(`https://notes-app-basic.onrender.com/api/notes/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        getNotes()
    }

    function handleEditModalOpen(id, title, description) {
        setEditId(id)
        setEditTitle(title)
        setEditDesc(description)
        setIsEditing(true)
    }

    return (
        <div className="min-w-screen flex justify-start items-center gap-4 flex-wrap px-10">
            {notes.length === 0
                ?
                <div className="w-full text-white font-medium text-2xl text-center">No Notes Yet</div>
                :
                notes.map(({ _id, title, description }, key) => (
                    <div key={key} className="min-w-80 flex justify-between items-start flex-col p-3 rounded-xl bg-slate-900">
                        <h1 className="text-white font-bold text-2xl">{title}</h1>
                        <p className="text-white/70 font-medium text-md">{description}</p>
                        <button
                            onClick={() => deleteNote(_id)}
                            className="w-full py-2 mt-4 flex justify-center items-center bg-white rounded cursor-pointer">Delete</button>
                        <button onClick={() => {
                            handleEditModalOpen(_id, title, description)
                        }} className="w-full py-2 mt-4 flex justify-center items-center bg-yellow-500 rounded cursor-pointer">Edit</button>
                    </div>
                ))
            }
        </div>
    )
}

export default NotesSection