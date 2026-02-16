
import { useEffect, useRef, useState } from "react";
import "./TimeScrollSection.css";
import { timeCards } from "../../../data/timeData";

export default function TimeScrollSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const total = Math.max(rect.height - window.innerHeight, 1); // ✅ 0 방지
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      setProgress(scrolled / total);
    };

    onScroll(); 
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const currentIndex = progress < 0.33 ? 0 : progress < 0.66 ? 1 : 2;
  const current = timeCards[currentIndex];

 
  const hourDeg = (current.hour % 12) * 30 + progress * 30;
  const minuteDeg = progress * 360;

  return (
    <section className="time-section" ref={sectionRef}>
      <div className="sticky-wrap">
      
        <div className="clock">
          <div className="clock-face">
            <div className="hour-hand" style={{ transform: `rotate(${hourDeg}deg)` }} />
            <div className="minute-hand" style={{ transform: `rotate(${minuteDeg}deg)` }} />
          </div>
          <p className="clock-label">{current.label}</p>
        </div>


        <div className="card-area">
          <div key={current.id} className="time-card">
            <img src={current.image} alt={current.title} />
            <div className="card-text">
              <h3>{current.title}</h3>
              <span>{current.subtitle}</span>
              <p>{current.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}