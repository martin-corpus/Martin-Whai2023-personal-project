
import imageUrl from '../name.png'

export default function Body() {
  return (
    <div className="body">
      <div>
        <img src={imageUrl} alt="Name" id="name"/>
      </div>  
      <p>Hello</p>
    </div>
  )
}