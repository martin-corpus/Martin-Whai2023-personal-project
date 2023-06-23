import imageUrl from '/images/whistle.png'

export default function Header() {
  return (
    <>
      <h1 id="logo">
        <img src={imageUrl} alt="Whistle Company Logo" id="logo" />
      </h1>
    </>
  )
}
