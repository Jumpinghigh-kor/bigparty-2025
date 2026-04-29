import SectionTitle from "@/components/SectionTitle";

const Welcome = () => {
  return (
    <section id="welcome">
      <div className="welcome__inner">
        <SectionTitle title="인사말" />
        <div className="welcome__content">
          <div className="welcome__content_inner">
            <div className="welcome__content_item">
              <div className="welcome__content_img">
                <img src="/images/logo/jumpinghigh_logo_black.png" alt="점핑하이 로고" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome;