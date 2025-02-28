import React from 'react'

const Navbar = () => {
  return (
    <div className="container navbar-container">
        <section className="section-navbar">
            <span>
                <h2>Navbar</h2>
            </span>
            <ul>
                <li><a href="/">home</a> </li>
                <li><a href="/">contact us</a></li>
                <li><a href="/">about</a> </li>
            </ul>
        </section>
    </div>
  )
}

export default Navbar