import { useProgress } from "@react-three/drei";
import { usePlay } from "../contexts/Play";

export const Overlay = () => {
  const { progress } = useProgress();
  const { play, end, setPlay, hasScroll } = usePlay();
  return (
    <div
      className={`overlay ${play ? "overlay--disable" : ""}
    ${hasScroll ? "overlay--scrolled" : ""}`}
    >
      <div
        className={`loader ${progress === 100 ? "loader--disappear" : ""}`}
      />
      {progress === 100 && (
        <div className={`intro ${play ? "intro--disappear" : ""}`}>
          <h1 className="logo">
            Fahad Nur Akash
            <div className="spinner">
              <div className="spinner__image" />
            </div>
          </h1>
          <p className="intro__scroll">Scroll to begin the journey</p>
          <div className="two-btn">
            <button
              className="explore"
              onClick={() => {
                setPlay(true);
              }}
            >
              Explore
            </button>
            <button className="whatsapp">
              <a href="https://api.whatsapp.com/send/?phone=%2B8801600041610&text&type=phone_number&app_absent=0">
                WhatsApp Me
              </a>
            </button>
          </div>
        </div>
      )}
      <div className={`outro ${end ? "outro--appear" : ""}`}>
        <p className="outro__text">Wish you had a great flight...</p>
        <p className="outro__text">
          If you want again, please refresh. Thank you!
        </p>
      </div>
    </div>
  );
};
