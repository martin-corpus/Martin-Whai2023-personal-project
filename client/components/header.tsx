
import header from '../data/header'
import imageUrl from '../logo.jpg'

export default function Header() {
  return (
    <header>
      <img src={imageUrl} alt="Logo" /> {header.name}
    </header>
  )
}
