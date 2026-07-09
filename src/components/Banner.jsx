import './Banner.css'

const BOXES = [
  { key: 'purple', label: 'Design' },
  { key: 'pink', label: 'Motion' },
  { key: 'blue', label: 'Analytics' },
  { key: 'orange', label: 'Hosting' },
]

function Banner() {
  return (
    <section className="banner">
      <p className="banner-eyebrow">WELCOME</p>
      <h1 className="banner-headline">Hello, Claude!</h1>
      <div className="banner-box-grid">
        {BOXES.map((box) => (
          <div key={box.key} className={`banner-box banner-box--${box.key}`}>
            {box.label}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Banner
