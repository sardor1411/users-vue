

function Navbar({usersLength}) {
  return (
    <div className="border border-white h-12">
      <div className="flex justify-evenly">
        <h1 className='mt-3'>User List</h1>
        <h3 className='mt-3'>{usersLength > 0 ? `You have: ${usersLength}` : `No user :(`}</h3>
      </div>
    </div>
  )
}

export default Navbar