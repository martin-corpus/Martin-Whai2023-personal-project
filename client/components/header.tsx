import imageUrl from '/images/whistle.png'

export default function Header() {
  return (
    <>
      <header id="logo">
        <img src={imageUrl} alt="Whistle Company Logo" id="logo" />
      </header>
    </>
  )
}
