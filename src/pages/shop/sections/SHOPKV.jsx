import './SHOPKV.css'
import shopgiftbox1 from '../../../assets/images/shopgiftbox1.svg'
import shopgiftbox2 from '../../../assets/images/shopgiftbox2.svg'

export default function SHOPKV() {
    return (
        <>
            <div className='shopkvwrap'>
                <div className='KVimg'>
                    <div className='kvsub'>
                        <img src={shopgiftbox1} alt="giftbox" />
                        <p>忙しい日々の中でも、<br />
                            そっと心がほどけるような<br />
                            “ほっとする甘さ”を、<br />
                            大切な人へやさしさと一緒にお届けします。</p>
                    </div>
                    <img src={shopgiftbox2} alt="giftbox" />
                </div>
            </div>
        </>
    )
}