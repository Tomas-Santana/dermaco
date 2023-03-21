import * as React from "react"
import "../styles/global.scss"

const IndexPage = () => {
  return (
    <main>
      <Header />
    </main>
  )
}

const Header = () => {
  
  return (
    <header id="hero">
      <div id="hero-content">
        <div id="hero-text">
          <h1>El jabon de tus sueños</h1>
          <p>Cuidamos de tu piel sabrosamente. Te amamos muuucho</p>
        </div>
      </div>
      <div id="bubbles">
        <div className="bubble-text">
          <div className="bubble"></div>
          <p>Perfecto para pieles sensibles</p>
        </div>
        <div className="bubble-text">
          <div className="bubble"></div>
          <p>Perfecto para pieles sensibles</p>
        </div><div className="bubble-text">
          <div className="bubble"></div>
          <p>Perfecto para pieles sensibles</p>
        </div><div className="bubble-text">
          <div className="bubble"></div>
          <p>Perfecto para pieles sensibles</p>
        </div>
      </div>
    </header>
  )
}

export default IndexPage

export const Head = () => <title>Dermaco</title>
