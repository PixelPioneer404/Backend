import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Modal from './components/Modal'
import CreateNoteForm from './components/CreateNoteForm'
import NotesSection from './components/NotesSection'
import { SignedIn, SignedOut, SignOutButton, useAuth, UserButton } from '@clerk/clerk-react'
import LandingPage from './components/LandingPage'

const App = () => {

  const [notes, setNotes] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [editTitle, setEditTitle] = useState('')
  const [editDesc, setEditDesc] = useState('')

  const { getToken } = useAuth()

  async function getNotes() {
    const token = await getToken()
    const res = await axios.get('https://notes-app-basic.onrender.com/api/notes', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    setNotes(res.data.allNotesOfTheUser)
  }

  useEffect(() => {
    getNotes()
  }, [])

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center gap-4">
      <SignedOut>
        <LandingPage />
      </SignedOut>
      <SignedIn>
        <div className="z-10 w-20 h-20 fixed top-10 left-10 flex justify-center items-center rounded-full cursor-pointer">
          <UserButton appearance={{
            elements: {
              avatarBox: {
                width: "50px",
                height: "50px",
              },
            },
          }} />
        </div>
        <CreateNoteForm getNotes={getNotes} />
        <NotesSection notes={notes} getNotes={getNotes} setEditId={setEditId} setEditTitle={setEditTitle} setEditDesc={setEditDesc} setIsEditing={setIsEditing} />
        <Modal id={editId} isEditing={isEditing} setIsEditing={setIsEditing} currentTitle={editTitle} setCurrentTitle={setEditTitle} currentDesc={editDesc} setCurrentDesc={setEditDesc} getNotes={getNotes} />
      </SignedIn>
    </div>
  )
}

export default App