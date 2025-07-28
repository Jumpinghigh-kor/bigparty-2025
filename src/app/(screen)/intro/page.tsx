const Intro = () => {
  return (
  <section id="intro">
    <div className="intro__inner">
      <div className="intro__title_cont">
        <h2 className="intro__title">
          2025년 다시 심장이 뛰는 시간!<br />
          WELCOME TO BIGPARTY<br />
          빅파티로 초대합니다.
        </h2>
      </div>
      <div className="intro__desc_cont mt80">
        <p className="intro__desc">
          이제 빅파티는 더이상 그 나라만의 축제가 아닙니다.<br />
          SNS와 공식사이트를 통해서 세계 각국의 빅파티를 구경하고 함께 합니다.<br />
          이 행사로 우리는 이 운동의 고유함을 확인하고 한 가족으로서의 동질감을 느낍니다.<br />
          대한민국의 빅파티를 전세계의 점퍼들이 기다리고 있습니다.<br />
          이제 여러분들이 오리지널의 중심이 한국이라는 사실을 보여줄 차례입니다.<br /><br />
          우리와 함께 하시겠습니까?
        </p>
      </div>
      <div className="intro__man_cont">
        <div>
          <img src="/images/contents/intro_man001.png" alt="우주비행사1" />
          <p>프로그램 일정</p>
        </div>
        <div>
          <img src="/images/contents/intro_man001.png" alt="우주비행사2" />
          <p>행사위치</p>
        </div>
        <div>
          <img src="/images/contents/intro_man001.png" alt="우주비행사3" />
          <p>빅파티X프로스펙스</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Intro;