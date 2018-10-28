import React from 'react'

const routes = [
  { title: 'Referenzen', href: '#' },
  { title: 'Team', href: '#' },
  { title: 'Jobs', href: '#' },
  { title: 'Magazin', href: '#' },
  { title: 'Makaira', href: '#' },
]

const Navigation = props => {
  return (
    <nav className="navigation">
      <img
        src="/assets/images/marm-logo-m.jpg"
        alt="Marmalade Logo"
        className="navigation__logo"
      />

      <div className="navigation__links">
        {routes.map(route => (
          <a href={route.href} className="navigation__link">
            {route.title}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
