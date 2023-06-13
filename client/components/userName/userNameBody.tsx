import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import  HiUserName  from '../../components/hiUserName'

export default function UserNameBody() {
  
//////////////// APPLICATIONS ///

const [currentIndex, setCurrentIndex] = useState(0)


useEffect(() => {
    const applicationboxes = document.querySelectorAll('.applicationbox')
    const boxesArray = Array.from(applicationboxes) as HTMLElement[]

    const showCurrentBoxes = () => {
        const startIndex = currentIndex * 3
        const endIndex = startIndex + 3
    
        boxesArray.forEach((box: HTMLElement, index: number) => {
          if (index >= startIndex && index < endIndex) {
            box.style.display = 'block'
          } else {
            box.style.display = 'none'
          }
        })
      }

      const showNextBox = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex < Math.floor(boxesArray.length / 3) ? prevIndex + 1 : 0
        )
      }
      
      const showPreviousBox = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : Math.floor(boxesArray.length / 3)
        )
      }

    const leftArrow = document.querySelector('.leftArrow')
    const rightArrow = document.querySelector('.rightArrow')

    if (leftArrow) {
      leftArrow.addEventListener('click', showPreviousBox)
    }

    if (rightArrow) {
      rightArrow.addEventListener('click', showNextBox)
    }

    showCurrentBoxes()

    return () => {
        if (leftArrow) {
          leftArrow.removeEventListener('click', showPreviousBox)
        }
  
        if (rightArrow) {
          rightArrow.removeEventListener('click', showNextBox)
        }
      }
    }, [currentIndex])
  

//////////////// SEARCH ENGINE ///
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
        <HiUserName />
        
        
        <div className="userApplicationsContainer">
        <h3 id="applications">Applications</h3>
            <div className="userApplications">
                
                <div className="leftArrow">
                    <i className="fa-solid fa-chevron-left"></i>
                </div>

                <div className="applicationbox" id="box1">Application 1</div>
                <div className="applicationbox" id="box2">Application 2</div>
                <div className="applicationbox" id="box3">Application 3</div>
                <div className="applicationbox" id="box4">Application 4</div>
                <div className="applicationbox" id="box5">Application 5</div>
                <div className="applicationbox" id="box6">Application 6</div>
                <div className="applicationbox" id="box7">Application 7</div>

                <div className="rightArrow">
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>

        <div className="userSearchContainer">
            <h3 id="search">Search For Companies:</h3>

            <form onSubmit={handleFormSubmit}>
                <div className="userSearchParameters">
                <div className="searchLocation">
                    <label htmlFor="location" id="location">Location</label>
                    <select className="dropdown" value={location} onChange={handleLocationChange}>
                        <option value="">-- Select Location --</option>
                        <option value="North Island - North">North Island - North</option>
                        <option value="North Island - Central">North Island - Central</option>
                        <option value="North Island - South">North Island - South</option>
                        <option value="South Island - North">South Island - North</option>
                        <option value="South Island - Central">South Island - Central</option>
                        <option value="South Island - South">South Island - South</option>
                    </select>
                </div>

                <div className="searchField">
                    <label htmlFor="field" id="field">Field</label>
                    <select className="dropdown" value={field} onChange={handleFieldChange}>
                        <option value="">-- Select Field --</option>
                        <option value="Software Development and Engineering">Software Development/Engineering</option>
                        <option value="Data Science and Analytics">Data Science/Analytics</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Network Engineering">Network Engineering</option>
                        <option value="Cloud Computing">Cloud Computing</option>
                        <option value="Artificial Intelligence (AI) and Machine Learning (ML)">Artificial Intelligence (AI) and Machine Learning (ML)</option>
                    </select>
                </div>
                </div>
                <div className="submitContainer">
                    <Link to={`/username/search?location=${location}&field=${field}`}>
                        <button type="submit" className="searchSubmit">Submit</button>
                    </Link>
                </div>
            </form>
        </div>
    </>
  )
}
