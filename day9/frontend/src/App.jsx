import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Modal from './components/Modal'

const App = () => {

  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [editDesc, setEditDesc] = useState('')

  async function getNotes() {
    const res = await axios.get('http://localhost:3000/api/notes')
    setNotes(res.data.allNotes)
  }

  useEffect(() => {
    getNotes()
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    const elements = e.target.elements
    const title = elements.title.value
    const description = elements.desc.value
    await axios.post('http://localhost:3000/api/notes', {
      title, description
    })
    setTitle('')
    setDesc('')
    getNotes()
  }

  async function deleteNote(id) {
    await axios.delete(`http://localhost:3000/api/notes/${id}`)
    getNotes()
  }

  function handleEditModalOpen(id, title, description) {
    setEditId(id)
    setEditTitle(title)
    setEditDesc(description)
    setIsEditing(true)
  }

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center gap-4">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full h-20 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex justify-center items-center gap-3">
          <input name='title' onChange={(e) => { setTitle(e.target.value) }} value={title} type="text" placeholder='Enter title' className="rounded py-2 px-5 bg-white text-md font-medium text-black/60" />
          <input name='desc' onChange={(e) => { setDesc(e.target.value) }} value={desc} type="text" placeholder='Enter description' className="rounded py-2 px-5 bg-white text-md font-medium text-black/60" />
          <button className="px-5 py-2 rounded bg-emerald-400 cursor-pointer" type='submit'>Create</button>
        </form>
      </div>
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
      <Modal id={editId} isEditing={isEditing} setIsEditing={setIsEditing} currentTitle={editTitle} setCurrentTitle={setEditTitle} currentDesc={editDesc} setCurrentDesc={setEditDesc} getNotes={getNotes} />
    </div>
  )
}

export default App