import { useState } from 'react'
import { FaUser } from 'react-icons/fa'

export default function NewUserBody() {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [image, setImage] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('Form submitted:', name, password, email, image)
  }

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }
  
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value)
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
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>

        <div className="formGroup">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            accept="image/*"
            required
          />
        </div>

        <div className="formGroup">
          <button type="submit" id="newUserButton">Submit</button>
        </div>
      </form>
    </>
  )
}
