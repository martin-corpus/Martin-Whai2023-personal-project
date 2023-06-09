import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useState } from 'react'

export default function UserNameBody() {
  
const [location, setLocation] = useState('')
const [field, setField] = useState('')
  
const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Location:', location)
    console.log('Field:', field)
}

const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(event.target.value)
}
  
const handleFieldChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setField(event.target.value)
}

return (
    <>
        <div className="userContainer">
            <div className="userCircle">
                <span className="userIcon">
                <FaUser />
                </span>
            </div>
            <div>
                <h1 id="userName">Hi username!</h1>
            </div>
        </div>

        <h3 id="applications">Applications</h3>
        <div className="userApplicationsContainer">
            <div className="userApplications">
                <div className="applicationbox">Box 1</div>
                <div className="applicationbox">Box 2</div>
                <div className="applicationbox">Box 3</div>
                <div className="applicationbox">Box 4</div>
                <div className="applicationbox">Box 5</div>
                <div className="applicationbox">Box 6</div>
                <div className="applicationbox">Box 7</div>
                <div className="applicationbox">Box 8</div>
                <div className="applicationbox">Box 9</div>
                <div className="applicationbox">Box 10</div>
                <div className="applicationbox">Box 11</div>
                <div className="applicationbox">Box 12</div>
                <div className="applicationbox">Box 13</div>
                <div className="applicationbox">Box 14</div>
                <div className="applicationbox">Box 15</div>
            </div>
        </div>

        <div className="userSearchContainer">
            <h3 id="search">Search For Companies:</h3>

            <form onSubmit={handleFormSubmit}>
                <div className="userSearchParameters">
                <div className="searchLocation">
                    <label htmlFor="location" id="location">Location</label>
                    <select className="dropdown" value={location} onChange={handleLocationChange}>
                        <option value="option1">North Island - North</option>
                        <option value="option2">North Island - Central</option>
                        <option value="option3">North Island - South</option>
                        <option value="option4">South Island - North</option>
                        <option value="option5">South Island - Central</option>
                        <option value="option6">South Island - South</option>
                    </select>
                </div>

                <div className="searchField">
                    <label htmlFor="field" id="field">Field</label>
                    <select className="dropdown" value={field} onChange={handleFieldChange}>
                        <option value="option1">Software Development/Engineering</option>
                        <option value="option2">Data Science/Analytics</option>
                        <option value="option3">Cybersecurity</option>
                        <option value="option4">Network Engineering</option>
                        <option value="option5">Cloud Computing</option>
                        <option value="option6">Artificial Intelligence (AI) and Machine Learning (ML)</option>
                    </select>
                </div>
                </div>
                <div className="submitContainer">
                <button type="submit" className="searchSubmit">Submit</button>
                </div>
            </form>
        </div>
    </>
  )
}
