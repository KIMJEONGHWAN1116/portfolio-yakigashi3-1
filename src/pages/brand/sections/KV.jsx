import { useEffect, useRef, useState } from "react";
import "./KV.css";

import kvgiftBox from "../../../assets/images/kvgiftbox.png";
import kv1 from "../../../assets/images/kv1.png";
import kv6 from "../../../assets/images/kv6.png";
import kv3 from "../../../assets/images/kv3.png";
import kv4 from "../../../assets/images/kv4.png";
import kv5 from "../../../assets/images/kv5.png";

export default function KVHero() {
    const wrapRef = useRef(null);
    const [play, setPlay] = useState(false);

    useEffect(() => {
        const el = wrapRef.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setPlay(true);
            },
            { threshold: 0.4 }
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section ref={wrapRef} className={`kv ${play ? "is-play" : ""}`}>
            <div className="kvInner">

                <div className="kvText">
                    <p>
                        忙しい日々の中でも、<br />
                        ひと息の贈り物を。
                    </p>
                </div>
                <div className="KVimggroup">
                    <div className="particles">
                        {Array.from({ length: 18 }).map((_, i) => (
                            <span key={i} className="particle" />
                        ))}
                    </div>

                    <img className="giftBox" src={kvgiftBox} alt="gift box" />


                    <img className="petal p1" src={kv1} alt="cookie 1" />
                    <img className="petal p2" src={kv6} alt="cookie 2" />
                    <img className="petal p3" src={kv3} alt="cookie 3" />
                    <img className="petal p4" src={kv4} alt="cookie 4" />
                    <img className="petal p5" src={kv5} alt="cookie 5" />

                </div>
            </div>
        </section>
    );
}
