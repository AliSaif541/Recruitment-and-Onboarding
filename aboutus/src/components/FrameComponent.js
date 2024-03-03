import "../styles/FrameComponent.css"

const FrameComponent = () => {
  return (
    <div className="home-frame-wrapper">
      <div className="home-frame">
        <img className="home-frame-child" alt="" src="/rectangle-330.svg" />
        <div className="home2">Home</div>
        <div className="about1">About</div>
        <div className="career-page1">Career Page</div>
        <div className="contact-us2">Contact Us</div>
        <button className="text3">
          <div className="sign-in1">Sign in</div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;