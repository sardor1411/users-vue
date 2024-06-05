
import { useState } from "react";

function NewUserForm({ addUser }) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    age: null,
    from: '',
    image: '',
    job: '',
    gender: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    addUser(user)
  }



  return (
    <div className="border border-white w-[30%] fixed left-[35%] h-[auto] backdrop-blur outline-none shadow-inner">
      <div className="">
        <div className="modal"><br />
          <h2 className="text-center">Create New User</h2>
          <form onSubmit={handleSubmit} className="grid m-auto">
            <label className=" m-auto"><br />
              <input className="rounded-[8px] text-center" type="url" placeholder="Image URL"
                onChange={(e) => setUser((prev) => {
                  return { ...prev, image: e.target.value }
                })}
                required
              /> <br />
            </label>
            <label className=" m-auto"> <br />
              <input className="rounded-[8px] text-center" type="text" placeholder="First Name"
                onChange={(e) => setUser((prev) => {
                  return { ...prev, firstName: e.target.value }
                })}
                required
              /> <br />
            </label>
            <label className=" m-auto"> <br />
              <input className="rounded-[8px] text-center" type="text" placeholder="Last Name"
                onChange={(e) => setUser((prev) => {
                  return { ...prev, lastName: e.target.value }
                })}
                required />
            </label>
            <label className=" m-auto "> <br />
              <input className="rounded-[8px] text-center" type="number" placeholder="Age"
                onChange={(e) => setUser((prev) => {
                  return { ...prev, age: e.target.value }
                })}
                required />
            </label>
            <label className=" m-auto"> <br />
              <input className="rounded-[8px] text-center" type="text" placeholder="From"
                onChange={(e) => setUser((prev) => {
                  return { ...prev, from: e.target.value }
                })}
                required />
            </label>
            <label className=" m-auto"> <br />
              <input className="rounded-[8px] text-center" type="text" placeholder="Job"
                onChange={(e) => setUser((prev) => {
                  return { ...prev, job: e.target.value }
                })}
                required />
            </label>
            <div className=" m-auto"> <br />
              <label className="">
                <small>Male</small>
                <input className="mr-[15px]" type="radio"
                  onChange={(e) => setUser((prev) => {
                    return { ...prev, gender: e.target.value }
                  })}
                  required name="gender" value="male" />
              </label>
              <label className=" m-auto">
                <small>Female</small>
                <input type="radio"
                  onChange={(e) => setUser((prev) => {
                    return { ...prev, gender: e.target.value }
                  })}
                  required name="gender" value="female" className="" />
              </label>
            </div><br />
            <button className="border border-white w-[45%] m-auto mb-4 rounded-[8px]">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUserForm;