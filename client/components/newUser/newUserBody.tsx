import { useState, FormEvent, ChangeEvent, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'
import { NewUser } from "../../models/users"
import { addNewUser } from "../../apiClient"

const initialFormData = {
  name: '',
  password: '',
  email: '',
  image: null,
}

interface Props {
  newUser: NewUser[]
  setNewUser: (newUser: NewUser[]) => void
}

export default function PostNewUser(props: Props) {
  const [form, setForm] = useState(initialFormData)

  const checkIfEmailExists = (email: string): boolean => {
    const existingEmails = ['john@example.com', 'jane@example.com']
    return existingEmails.includes(email)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const { name, password, email, image } = form
      const emailExists = checkIfEmailExists(email)

      if (emailExists) {
        console.log('Email already exists');
      } else {
        console.log('Form submitted:', name, password, email, image)

      const newUserToAdd = await addNewUser(form)
      props.setNewUser([...props.newUser, newUserToAdd])
      setForm(initialFormData)
      }
    }catch(error) {
      console.log(error)
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  return (
    <>
      <div className="centerContainer">
        <div className="newUserDiv">
          <div className="newUserCircle">
            <div className="newUserIcon">
              <FaUser />
            </div>
          </div>
          <h1 className="newUser">Welcome to Whistle!</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="formContainer">
        <div className="formGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={form.name}
            onChange={handleChange}
            name="name"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={form.password}
            onChange={handleChange}
            name="password"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            name="email"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            onChange={handleChange}
            accept="image/*"
            name="image"
          />
        </div>

        <div className="formGroup">
          <button type="submit" id="newUserButton">Submit</button>
        </div>
      </form>
    </>
  )
}
