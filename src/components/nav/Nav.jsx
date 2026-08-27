import "./Nav.css";
import LogoImg from '../../assets/Logo.png';

export default function Nav() {
  return (
    <nav className="nav">
      {/* Left side */}
      <div className="nav-left">
        <img src={LogoImg} alt="Logo" className="logo" />
        <span className="location"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 12.7998C13.8502 12.7998 15.3499 11.3001 15.3499 9.4499C15.3499 7.59978 13.8502 6.09995 12 6.09995C10.1498 6.09995 8.65004 7.59978 8.65004 9.4499C8.65004 11.3001 10.1498 12.7998 12 12.7998Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
        <path d="M12 2.75C5.3001 2.75 4.18345 8.33325 5.3001 12.5654C6.28275 16.2726 9.23071 18.8074 11.1737 20.8844C11.2783 20.9995 11.4059 21.0915 11.5482 21.1545C11.6905 21.2175 11.8444 21.25 12 21.25C12.1556 21.25 12.3095 21.2175 12.4518 21.1545C12.594 21.0915 12.7217 20.9995 12.8263 20.8844C14.7693 18.8074 17.7172 16.2726 18.6999 12.5654C19.8165 8.33325 18.6999 2.75 12 2.75Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
        </svg>
        Mysore , India </span>
      </div>

      {/* Center */}
      <div className="nav-center">
        <button className="design-btn" onClick={() =>
            document.getElementById("journey").scrollIntoView({ behavior: "smooth",})}>
            My Journey
        </button>
        <a href="#contact">Contact Us</a>
      </div>

      {/* Right side */}
      <div className="nav-right">
        <span className="email">gauravgope9@gmail.com</span>
        <a href="mailto:so7oki@gmail.com" className="icon">✈️</a>
        <a href="www.linkedin.com/in/gaurav-kumar-gope-2293a7259" target="_blank" rel="noreferrer" className="icon">in</a>
      </div>
    </nav>
  );
}
