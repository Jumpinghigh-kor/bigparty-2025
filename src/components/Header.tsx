"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [show, setShow] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  const toggleMenu = () => {
      setShow((prevShow) => !prevShow);
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header" className={`${isScrolled ? "scrolled" : ""} ${isMainPage ? "main-page" : ""}`}>
      <div className="header__inner">
        <nav 
          className={`header__nav ${show ? "show" : ""}`} 
          role="navigation" 
          aria-label="메인 메뉴"
        >
          <div className="header__logo">
            <Link href="/">
              <img src={isMainPage ? "/images/logo/bigparty_blue_logo.png" : "/images/logo/bigparty_white_logo.png"} alt="빅파티 로고" />
            </Link>
          </div>
          <div className="header__nav__menu">
            <ul>
              <li className="dropdown">
                <Link href="/main/about-bigparty/overview">점핑빅파티</Link>
                <ul className="dropdown-menu">
                  <li><Link href="/main/about-bigparty/overview">행사개요</Link></li>
                  <li><Link href="/main/about-bigparty/welcome">인사말</Link></li>
                  <li><Link href="#">초대의글</Link></li>
                </ul>
              </li>
              <li>
                <Link href="#">행사안내</Link>
              </li>
              <li>
                <Link href="#">행사소식</Link>
              </li>
              <li>
                <Link href="#">참가신청</Link>
              </li>
            </ul>
          </div>
          <div className="header__nav__btn">
            <Link href="https://jumping-high.com/" target="_blank">
              <img src="/images/logo/web_logo.png" alt="웹사이트 로고" />
            </Link>
            <Link href="https://www.instagram.com/jumpinghigh_official/" target="_blank">
              <img src="/images/logo/instagram_logo.png" alt="인스타그램 로고" />
            </Link>
            <Link href="https://www.youtube.com/user/hihpt" target="_blank">
              <img src="/images/logo/youtube_logo.png" alt="유튜브 로고" />
            </Link>
          </div>
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