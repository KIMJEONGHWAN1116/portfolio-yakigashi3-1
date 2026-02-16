import './Reviews.css'
import review from '../../../assets/images/review.png'

export default function Reviews() {

    return (
        <>
            <section className='customer'>
                <h2>Customer Reviews<br />
                    <span>お客様の声</span>
                </h2>
                <div className='reviewcontainer'>
                    <div className='reviewcontainerflex'>
                        {/* <span className='sannkaku'>◀</span> */}
                        <img src={review} alt="チョコナッツケーキ" />
                        <div className="reviewtext">
                            <p>
                                私にとって頑張った時、<br />
                                そしてなごむご褒美はやっぱり3&1のおやつ！<br />
                                甘すぎずちょうどいいやさしさで、<br />
                                エナジーチャージになれます。<br />
                                つい、「もう一口だけ」「もう一口」と<br />
                                全部食べてしまうくらい（笑）<br />
                                季節ごとに味が変わるのも楽しくて、<br />
                                私の元気の源です。
                            </p>
                            <p><span>匿名</span></p>
                        </div>
                        {/* <span className='sannkaku'>▶</span> */}
                    </div>
                </div>
                <div className="map">
                    <h2>Access<br />
                        <span>アクセス</span>
                    </h2>
                    <p>３, 水入-４８-４８ 宿町 豊川市 愛知県 441-0101</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1377.3473669421392!2d137.35874641959387!3d34.808392803267914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6004cf579abfecc3%3A0x94b903d1e3ef0633!2sbench!5e0!3m2!1sja!2sjp!4v1766068866083!5m2!1sja!2sjp"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        loading="lazy"
                    />
                </div>
            </section>
        </>
    )
}