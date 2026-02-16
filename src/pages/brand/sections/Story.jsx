import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Story.css";

import nutcake from "../../../assets/images/nutcake.png";
import giftbox3 from "../../../assets/images/giftbox3.png";
import setouchilemoncake from "../../../assets/images/setouchilemoncake.png";
import tennpo from "../../../assets/images/tennpo.png";
import lemon_photo2 from "../../../assets/images/lemon_photo2.svg";
import eggs from "../../../assets/images/eggs.svg";
import komugi from "../../../assets/images/komugi.png";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const pinRef = useRef(null);
  const frontRef = useRef(null);


  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 800px)");
    const update = () => setIsMobile(mq.matches);
    update();

    mq.addEventListener?.("change", update);
    window.addEventListener("resize", update);

    return () => {
      mq.removeEventListener?.("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

 
  useEffect(() => {
    const wrap = pinRef.current;
    const front = frontRef.current;
    if (!wrap || !front) return;

    const mm = gsap.matchMedia();


    mm.add("(max-width: 800px)", () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(front);
      gsap.set(front, { clearProps: "transform" });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        gsap.killTweensOf(front);
        gsap.set(front, { clearProps: "transform" });
      };
    });


    mm.add("(min-width: 801px)", () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(front);
      gsap.set(front, { clearProps: "transform" });

      const moveDistance = window.innerHeight * 1.5;

      const tween = gsap.to(front, {
        y: -moveDistance,
        ease: "none",
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "+=120%",
          scrub: true,
          pin: true,
          markers: false, 
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();

      return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
        gsap.set(front, { clearProps: "transform" });
      };
    });

    return () => {
      mm.revert(); 
    };
  }, []);

  const Back = (
    <div className="back">
      <div className="kodawari">
        <h2>
          素材からの贈り物<span>Harvest</span>
        </h2>
        <p>
          素材ひとつひとつに、「おいしい」と「安心」を届けたいという<br />
          想いを込めて、大切な人に贈るものだから、<br />
          自分の子どもにも食べさせたい素材を選びました。<br />
        </p>

        <p>
          自然の恵みをそのままに、<br />
          体にも心にもやさしい焼き菓子を届けます。
        </p>
      </div>

      <div className="sozaicardwarp">
        <div className="sozaicard noreverse">
          <div className="sozaicardtext">
            <h3>
              <span>01</span>
              <br />
              瀬戸内レモンのやさしい酸味
            </h3>
            <p>
              愛媛県大三島で育った瀬戸内レモンを使用。<br />
              太陽と海風をたっぷり浴びたレモンは、<br />
              香り高くてやさしい酸味が特徴です。<br />
            </p>
          </div>
          <img src={lemon_photo2} alt="lemon_photo" className="lemonimg" />
        </div>

        <div className="sozaicard reverse" id="harvest">
          <div className="sozaicardtext">
            <h3>
              <span>02</span>
              <br />
              ランニングエッグのコクと香り
            </h3>
            <p>
              放し飼いではないけれど、<br />
              生で食べてもおいしい安全な卵。<br />
              素材本来のエネルギーを感じられる卵で、<br />
              やさしい甘さを引き立てます。
            </p>
          </div>
          <img src={eggs} alt="eggs" className="eggs" />
        </div>

        <div className="sozaicard noreverse">
          <div className="sozaicardtext">
            <h3>
              <span>03</span>
              <br />
              国産素材へのこだわり
            </h3>
            <p>
              旬のもの、地元のものを大切に。<br />
              作り手の手の温もりと、素材の力がひとつに<br />
              なって、“体にも心にもやさしい”焼き菓子が<br />
              生まれます。
            </p>
          </div>
          <img src={komugi} alt="komugi" className="komugi" />
        </div>
      </div>
    </div>
  );

  const Front = (
    <div className="front" ref={frontRef}>
      <div className="sikaku" aria-hidden="true" />

      <img
        src={setouchilemoncake}
        alt="setouchilemoncake"
        className="setouchilemoncake"
      />

      <div className="storywrap">
        <div className="story" id="story">
          <h2>
            やさしさのはじまり<span>scene</span>
          </h2>
          <p>
            上の子が小さいころ、毎日やんちゃな二人を連れて<br />
            朝から公園をまわる日々を過ごしていました。<br />
            孤独と疲れを感じながらも、帰り道に見つけたパン屋さんやお菓子屋さんで<br />
            小さなお菓子を買って、子どもたちがお昼寝したときに<br />
            こっそり食べる時間が、なによりの楽しみでした。<br />
            そのとき感じた「ひと息つける幸せ」を、<br />
            あの頃の自分のように頑張る人たちにも届けたい。<br />
            そんな想いから、{"3&1"}は生まれました。
          </p>

          <div className="storyimggrid">
            <img src={nutcake} alt="nutcake" className="nutcake" />
            <img src={giftbox3} alt="giftbox" className="giftbox3" />
            <img src={tennpo} alt="店舗" className="tennpo" />
          </div>
        </div>
      </div>

      <div className="circlewrap" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, i) => (
          <div className="circle" key={i} />
        ))}
      </div>
    </div>
  );

  return (
    <section className="stage">
      <div className="pin" ref={pinRef}>
        {isMobile ? (
          <>
            {Front}
            {Back}
          </>
        ) : (
          <>
            {Back}
            {Front}
          </>
        )}
      </div>
    </section>
  );
}