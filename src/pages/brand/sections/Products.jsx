import { useEffect, useRef } from "react";
import "./Products.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import kvgiftBox from "../../../assets/images/kvgiftbox.png";
import product2 from "../../../assets/images/product2.svg";
import product3 from "../../../assets/images/product3.svg";
import product4 from "../../../assets/images/product4.svg";
import product5 from "../../../assets/images/product5.svg";
import product6 from "../../../assets/images/product6.svg";
import product7 from "../../../assets/images/product7.svg";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    title: "ギフトボックス",
    text: "開けた瞬間、ふわっと広がる焼き菓子の香り。ひとつひとつに、“おつかれさま”や“ありがとう”の気持ちを込めました。",
    img: kvgiftBox,
  },
  {
    id: 2,
    title: "オーガニック瀬戸内レモンケーキ",
    text: "愛媛県産の無農薬レモンを使った、爽やかな香りとふんわり食感が 魅力の、やさしい甘さの焼き菓子",
    img: product2,
  },
  { id: 3, title: "ホワイトチョコレモンケーキ", text: "瀬戸内レモンピールとホワイトチョコが奏でる、爽やかさと甘さの絶妙なバランス。", img: product3 },
  { id: 4, title: "レモンガレット", text: "ほどよい酸味とサクサク食感が 魅力の、紅茶によく合う可愛らしいレモンクッキー", img: product4 },
  { id: 5, title: "チョコナッツケーキ", text: "ベルギー産のチョコを使用した生地に、アーモンドやくるみなどのナッツを たっぷり混ぜ込んだ焼き菓子です。", img: product5 },
  { id: 6, title: "ブールドネージュ", text: "ほろっとくずれる口どけと、バニラの香りがふわっと広がるクッキー。やさしい甘さでお子さまにも人気。", img: product6 },
  { id: 7, title: "フロランタン", text: "香ばしく焼き上げたキャラメルアーモンドの、サクッと広がる贅沢な味わい。", img: product7 },
];

const clamp = (v, a, b) => Math.min(Math.max(v, a), b);

export default function Products() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const ctxRef = useRef(null);
  const stId = "products-st";
  const rafRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const build = () => {

      const exists = ScrollTrigger.getById(stId);
      if (exists) return;

      if (ctxRef.current) {
        ctxRef.current.revert();
        ctxRef.current = null;
      }

      const els = cardRefs.current.filter(Boolean);
      if (!els.length) return;

      const N = els.length;
      const SCROLL_PER_CARD = 700;

      const centerStep = 520;
      const queueStep = 110;
      const queueStart = 460;

      const applyState = (floatIndex) => {
        for (let i = 0; i < N; i++) {
          const r = i - floatIndex;
          const abs = Math.abs(r);

          const visible = r > -1.8 && r < 6.0;
          if (!visible) {
            gsap.set(els[i], { opacity: 0, pointerEvents: "none" });
            continue;
          }

          let x = 0;
          if (r < 0) {
            x = r * centerStep;
          } else if (r >= 0 && r <= 1) {
            x = r * queueStart;
          } else {
            x = queueStart + (r - 1) * queueStep;
          }

          let scale;
          if (r <= 0) {
            scale = 1 - Math.min(abs, 1) * 0.34;
          } else if (r <= 1) {
            scale = 1 - r * 0.74; 
          } else {
            scale = clamp(0.26 - (r - 1) * 0.02, 0.18, 0.26);
          }

          const opacity = clamp(1 - abs * 0.18, 0.15, 1);
          const blur = abs === 0 ? 0 : clamp(abs * 0.8, 0, 3);
          const zIndex = Math.round(1000 - abs * 120);

          gsap.set(els[i], {
            x,
            y: 0,
            scale,
            opacity,
            zIndex,
            filter: `blur(${blur}px)`,
            pointerEvents: abs < 0.5 ? "auto" : "none",
          });
        }
      };

      ctxRef.current = gsap.context(() => {
     
        applyState(0);

        ScrollTrigger.create({
          id: stId,
          trigger: section,
          start: "top top",
          end: () => `+=${(N - 1) * SCROLL_PER_CARD}`,
          pin: true,
          scrub: 0.05,
          anticipatePin: 1,
          fastScrollEnd: true,
          snap: {
            snapTo: 1 / (N - 1),
            duration: 0.18,
            delay: 0,
            ease: "power3.out",
          },
          onUpdate: (self) => {
            const floatIndex = self.progress * (N - 1);
            applyState(floatIndex);
          },
          invalidateOnRefresh: true,
       
        });

      
        ScrollTrigger.refresh();
      }, section);
    };

    const ensure = () => {
   
      if (!ScrollTrigger.getById(stId)) build();
    };

    const ensureRaf = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        ensure();
      });
    };

   
    build();

    window.addEventListener("scroll", ensureRaf, { passive: true });
    window.addEventListener("resize", ensureRaf);
    document.addEventListener("visibilitychange", ensureRaf);

    return () => {
      window.removeEventListener("scroll", ensureRaf);
      window.removeEventListener("resize", ensureRaf);
      document.removeEventListener("visibilitychange", ensureRaf);

      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      const st = ScrollTrigger.getById(stId);
      st?.kill(true);
      if (ctxRef.current) {
        ctxRef.current.revert();
        ctxRef.current = null;
      }
    };
  }, []);

  return (
    <section className="products" ref={sectionRef}>
      <div className="products-inner">
        <h2 className="products-title">商品紹介</h2>

        <div className="products-stage">
          {cards.map((card, idx) => (
            <article
              className="pCard"
              key={card.id}
              ref={(el) => (cardRefs.current[idx] = el)}
            >
              <span className="pNum">{String(card.id).padStart(2, "0")}</span>

              <div className="pImg">
                <img src={card.img} alt={card.title} />
              </div>

              <h3 className="pTitle">{card.title}</h3>
              <p className="pText">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}