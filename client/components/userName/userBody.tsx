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
    </>
  )
}
