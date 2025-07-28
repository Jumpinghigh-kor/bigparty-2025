import React, {useState} from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
      setShow((prevShow) => !prevShow);
  }

  return (
    <header id="header">
      <div className="header__inner">
        <nav 
          className={`header__nav ${show ? "show" : ""}`} 
          role="navigation" 
          aria-label="메인 메뉴"
        >
          <ul>
            <li>
              <a href="#">점핑빅파티</a>
            </li>
            <li>
              <a href="#">행사안내</a>
            </li>
            <li>
              <a href="#">행사소식</a>
            </li>
            <li>
              <a href="#">참가신청</a>
            </li>
          </ul>
        </nav>
        <div 
          className="header__nav__mobile" 
          id="headerToggle" 
          aria-controls="primary-menu" 
          aria-expanded={show ? "true" : "false"} 
          role="button"
          tabIndex={0}
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header