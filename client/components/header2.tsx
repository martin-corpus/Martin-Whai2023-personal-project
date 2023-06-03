
import imageUrl from '../whistle.png'

export default function Header2() {
  return (
    <>
    
      <a href="/" id="Logo">
        <div className="logoContainer">
            <img src={imageUrl} alt="Logo" id="logo"/>
            <span id="headerHome">Home</span>
        </div>
      </a>
    </>
  )
}
