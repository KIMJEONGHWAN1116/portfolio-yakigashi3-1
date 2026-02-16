import './Kodawari.css'
import sozai1 from '../../../assets/images/sozai1.svg'
import sozai2 from '../../../assets/images/sozai2.svg'
import sozai3 from '../../../assets/images/sozai3.svg'
import sozai4 from '../../../assets/images/sozai4.svg'
import sozai5 from '../../../assets/images/sozai5.svg'

export default function Kodawari() {

    return (
        <>
            <section className="Kodawarisozai">
                <h2>こだわりの素材</h2>
                <div className='sozaicardwrap'>
                    <div className="sozaicardgrid">
                        <div>
                            <img src={sozai1} alt="岡崎のランニングエッグ" />
                            <h3>岡崎の<br />
                                ラ  ン  ニ  ン  グ<br />
                                エッグ</h3>
                        </div>
                    </div>
                    <div className="sozaicardgrid">
                        <div>
                            <img src={sozai2} alt="瀬戸内の無農薬レモン" />
                            <h3>瀬戸内の<br />
                                無  農  薬<br />
                                レモン</h3>
                        </div>
                    </div>
                    <div className="sozaicardgrid">
                        <div>
                            <img src={sozai3} alt="安心の国産小麦" />
                            <h3>安心の<br />
                                国  産  小  麦</h3>
                        </div>
                    </div>
                    <div className="sozaicardgrid">
                        <div>
                            <img src={sozai4} alt="優しい甘さのきび砂糖" />
                            <h3>優しい甘さの<br />
                                き  び  砂  糖</h3>
                        </div>
                    </div>
                    <div className="sozaicardgrid">
                        <div>
                            <img src={sozai5} alt="確かな美味しさ北海道バター" />
                            <h3>確かな美味しさ<br />
                                北  海  道  バ  タ  ー</h3>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}