import HeaderBrand from '../../layouts/brand/HeaderBrand.jsx';
import KV from './sections/KV.jsx';
import Scene from './sections/Scene.jsx';
import Story from './sections/Story.jsx';
import Products from './sections/Products.jsx';
import './Brandtop.css'
import FooterBrand from '../../layouts/brand/FooterBrand.jsx';
import TimeScrollSection from '../../pages/brand/sections/TimeScrollSection.jsx';

export default function Brandtop() {
    return (
        <>
            <div className='Brandtop'>
                <HeaderBrand />
                <KV />
                <Scene />
                <TimeScrollSection />
                <Story />
                <Products />
                <FooterBrand />
            </div>
        </>
    )
}