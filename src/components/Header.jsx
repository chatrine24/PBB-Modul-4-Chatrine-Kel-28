const NAV = ['Catalog', 'About', 'Contact']

function Header({ tab, onTab }) {
  return (
    <header className="header">
      <span className="brand display">Bore &amp; Barrel</span>
      <nav className="nav" aria-label="Main navigation">
        {NAV.map((item) => (
          <button
            key={item}
            type="button"
            className={tab === item ? 'nav-link active' : 'nav-link'}
            onClick={() => onTab(item)}
            aria-current={tab === item ? 'page' : undefined}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header