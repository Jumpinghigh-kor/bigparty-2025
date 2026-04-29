import SectionTitle from "@/components/SectionTitle";

const Overview = () => {
  return (
    <section id="overview">
      <div className="overview__inner">
        <SectionTitle title="행사 개요" />
        <div className="overview__content">
          <div className="overview__content_inner">
            <div className="overview__content_item">
              <div className="overview_content_img mr15">
                <img src="/images/contents/poster.png" alt="행사개요 포스터" />
              </div>
              <div className="overview__content_desc ml15">
                <h3>2025 JUMPING BIG PARTY</h3>
                <p className="small__title__desc">2025년 10월 25일 빅파티의 세계로 여러분을 초대합니다.</p>
                <p><span>일 시</span>2025년.10월.25일 토요일</p>
                <p><span>주 최</span>(주)점핑하이</p>
                <p><span>장 소</span>건양대학교 논산창의융합캠퍼스 짐나지움(미정)</p>
                <p><span>주요 프로그램</span></p>
                <p className="ml15">축하공연, 점핑 유나이티드 인 코리아, 점핑하이 팀 경연<br />마스터 스페셜 클래스, 윤하이 대표 스페셜 클래스,<br />단체 사진 촬영</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Overview;