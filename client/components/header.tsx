
import header from '../data/header'
import imageUrl from '../big.png'

export default function Header() {
  return (
    <header className="header">
      <img src={imageUrl} alt="Logo" id="logo"/>
    </header>
  )
}
