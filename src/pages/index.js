import * as React from "react"
import { useState, useEffect } from "react"
import "../styles/global.scss"
import Typewriter from 'typewriter-effect/dist/core';


import logo from "../images/logo.png"
import presImg from "../images/presentation.jpg"


import  handSan  from "../images/icons/hand-sanitizer.svg"
import perfume from "../images/icons/perfume.svg"
import coconut from "../images/icons/coconut.svg"
import ena from "../images/icons/ena.svg"

const isBrowser = typeof window !== "undefined"


const IndexPage = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <Presentation />
      <Features />
      <Contact />
      <Footer />
    </main>
  )
}
console.log(logo)

const NavBar = () => {
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () =>{
    if (!isBrowser) return;
    if(window.scrollY >= 20){
      setColorChange(true);
    }
    else{
      setColorChange(false);
    }
 };
 if (isBrowser) {
  window.addEventListener('scroll', changeNavbarColor);
 }
  return (
    <div id="navbar" className={colorChange ? 'navbar scrolled' : 'navbar'}>
      <div id="navbar-logo">
        <a href="#presentation"><img src={logo} width="100" alt="Logo Dermaco" /></a>
      </div>
    </div>
  )
}
const verbs = ["cuida", "respeta", "mejora", "protege", "nutre", "hidrata", "no irrita"]


// typing logic

function Type() {
  
  var titleBold = document.getElementById("title-bold");
  var typewriter = new Typewriter(titleBold, {
    loop: true,
    delay: 75,
  });
  
  verbs.forEach((verb) => {
    typewriter.typeString(verb)
      .pauseFor(2000)
      .deleteAll()
      .start();
  });
}

const HeaderTitle = () => {
  useEffect(() => {
    Type()
  }, [])

  return (
    <h1>El jabón que <br/>
    <span id="title-bold" className="verb"></span> 
    <br/>tu piel</h1>
  )
}

const Header = () => {

  return (
        
    <header id="hero">
      <div id="hero-content">
        <div id="hero-text">
          <HeaderTitle />
        </div>
        <MailForm/>
      </div>
    </header>
    
  )
}

// function validateEmail(email) {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }
// function submitForm() {
//   //var email = document.getElementById("email").value;
//   //   if (validateEmail(email)) {
//   //     var url =
//   //       "https://script.google.com/macros/s/AKfycbwfJL7zvJ5ZzV7Zw2jQ8J1m6Q2F9XOy5t3Wz8t/exec";
//   //     var data = { email: email };
//   //     fetch(url, {
//   //       method: "POST",
//   //       mode: "no-cors",
//   //       cache: "no-cache",
//   //       credentials: "omit",
//   //       headers: {
//   //         "Content-Type": "application/json",
//   //       },
//   //       redirect: "follow",
//   //       referrerPolicy: "no-referrer",
//   //       body: JSON.stringify(data),
//   //     })
//   //       .then((response) => {
//   //         console.log(response);
//   //         var alertDiv = document.createElement("div");
//   //         alertDiv.innerHTML = "Data sent correctly!";
//   //         document.body.appendChild(alertDiv);
//   //       })
//   //       .catch((error) => console.error(error));
//   //   } else {
//   //     alert("Please enter a valid email address.");
//   //   }
//   // }
//   if (validateEmail(email)) {
//     console.log(email);
//     document.getElementById("email").value = "";
//     var alertDiv = document.createElement("div");
//     alertDiv.innerHTML = "Data sent correctly!";
//     alertDiv.style = 'color: green; transition: 0.2s ease;'
//     document.getElementById("mailing-list").appendChild(alertDiv);
//     setTimeout(() => {
//       document.getElementById("mailing-list").removeChild(alertDiv);
//     }, 3000);
//   }
//   else {
//     alert("Please enter a valid email address.");
//   }
// }
const MailForm = () => {
  
  return (
    <form name="waitlist" id="mailing-list" netlify>
          <input name="email" type="email" id="email" placeholder="listopara@cuidarmipiel.com"/>
          <input type="hidden" name="_captcha" value="false"></input>
          <button className="button1" type="submit">Únete a la lista de espera</button>
    </form>
  )
} 

const Presentation = () => {
  return (
    <section id="presentation" style={{padding: "30px"}}>
      <div id="presentation-content">
        <div id="presentation-text">
          <h2 className="section-title">¿Qué es Dermaco?</h2>
          <div className="break"></div>
          <p className="section-text">
            Dermaco es un gel de ducha formulado para ayudar a reducir la irritación en la piel de las personas con dermatitis atópica haciendo uso del aceite vigen de coco, el cual ha sido demostrado beneficioso para la condición. Usa además otros ingredientes que no alteran el equilibrio de la piel, ayudan a su regeneración y le otorgan características que de otra manera no tendrían.
            </p>
        </div>
        <div id="presentation-img">
          <img src={presImg} alt="Jabon Dermaco" />
        </div>
      </div>
    </section>
  )
}

const Feature = (props) => {
  return (
  <div className="feature">
    <div className="feature-icon">
      <img src={props.src} alt={props.alt} />
    </div>
    <div className="feature-text">
      <p className="section-text feature-text">{props.text}</p>
    </div>
    

  </div>
  )
}


const Features = () => {
  return (
    <section id="features">
      <h2 className="section-title">¿Por qué dermaco?</h2>
      <div id="features-content">
        <Feature 
        text="Ingredientes aprobados por la National Eczema Asociation."
        src={ena}
        alt="Logo ENA"
        />
        <Feature 
        text="Sin fragancias, sin colorantes y sin parabenos."
        src={perfume}
        alt="Perfume"
        />
        <Feature 
        text="Hecho aceite virgen de coco, beneficioso para pieles sensibles."
        src={coconut}
        alt="Coconut"
        />
        <Feature 
        text="Libre de esteroides."
        src={handSan}
        alt="Hand Soap"
        />
      </div>
    </section>
  )
}

const Contact = () => {
  return (
    <section id="contact">
      <div id="contact-content">
        <div id="contact-text">
          <h2 className="section-title">¿Quieres saber más?</h2>
          <div className="break"></div>
        </div>

        <a href="mailto:dermaco.main@gmail.com">
          <button className="button1">Contáctanos</button>
        </a>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer id="footer">
      <div id="footer-content">
        <div id="footer-img">
          <img src={logo} alt="" />
        </div>
        <nav id="footer-nav">
          <ul>
            <li><a className="section-text"  href="#hero">Inicio</a></li>
            <li><a className="section-text" href="mailto:dermaco.main@gmail.com">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
export default IndexPage

export const Head = () => <title>Dermaco</title>
