// style
import './App.css'

import { useState } from 'react'
// components
import Navbar from './components/navbar/Navbar'
import UserList from './components/userlist/UserList'
import NewUserForm from './components/newuser/NewUserForm'


function App() {
  const [showModal, setShowModal] = useState(false)
  const [users, setUsers] = useState([])
  
  
  // delete user
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id
      })
    })
  }

  // add user
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
    setShowModal(false)
  }

  // close modal
  const closeModal = (e) => {
     if (e.target.classList.value === 'overlay') setShowModal(false)
     if (e.key === "Escape") setShowModal(false)
  }


  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length}/>
        <main>
          {!users.length && <div className='no-users'>
            <h2 className='text-center absolute top-[50%] left-[46%] w-[150px] text-[25px] text-gray-400'>No users</h2>
          </div> }
        </main>
      <button onClick={() => setShowModal(true)} className='border border-white w-[10%] h-[40px] flex items-center justify-center mt-4 m-auto'>Create User</button>
      {showModal && <NewUserForm addUser={addUser}/>}
          <UserList users={users} deleteUser={deleteUser} />
    </div>
  )
}

export default App