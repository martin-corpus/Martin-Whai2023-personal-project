import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa'

export default function UserBody() {
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
        <div className="userApplications">

        </div>
    </>
  )
}
