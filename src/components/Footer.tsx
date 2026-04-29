import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__inner flex-between">
        <div />
        <div className="footer__inner__cont">
          <div className="footer__logo mr50">
            <img src="/images/logo/bigparty_white_logo.png" alt="빅파티 로고" />
          </div>
          {/* 푸터 저보 */}
          <div className="footer__info">
            <div className="flex-between">
              <ul className="mr15">
                <li>주소</li>
                <li>문의전화</li>
                <li>통신판매업신고</li>
              </ul>
              <ul>
                <li>(07798) 서울특별시 강서구 마곡서로 133 704동 2층</li>
                <li>070-5055-4754(시간 09:00~18:00 점심시간 : 13:00~14:00)</li>
                <li>제2019-서울영등포-0932호</li>
              </ul>
            </div>
            <div className="mt20">
              <ul className="flex-start">
                <li><Link href="/policy?type=terms">이용약관</Link></li>
                <li className="ml10 mr10">|</li>
                <li><Link href="/policy?type=privacy">개인정보처리방침</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 점핑하이 로고 */}
        <div className="footer__copyright">
          <img src="/images/logo/jumpinghigh_logo.png" alt="점핑하이 로고" />
          <p className="mt20">JUMPINGHIGH &copy;2014. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;