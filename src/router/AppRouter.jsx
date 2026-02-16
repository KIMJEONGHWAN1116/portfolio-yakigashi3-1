import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Brandtop from '../pages/brand/Brandtop.jsx';
import Shoptop from '../pages/shop/Shoptop.jsx';
import HeaderShop from '../layouts/shop/HeaderShop.jsx';
import ProductDetail from '../pages/shop/sections/ProductDetail.jsx';
import ScrollRestoration from '../pages/ScrollRestoration';
import CartPage from '../pages/shop/CartPage';
import Checkout from '../pages/shop/Checkout';
import ThankYou from '../pages/shop/ThankYou';
import GiftDetail from '../pages/shop/sections/GiftDetail.jsx';
import FooterShop from '../layouts/shop/FooterShop.jsx';

function Layout({
    cartItems,
    addToCart,
    onIncrease,
    onDecrease,
    onRemove,
    onClear,
}) {
    const location = useLocation();
    const isBrandPage = location.pathname === '/';
    const [keyword, setKeyword] = useState('');
    return (
        <>
            <ScrollRestoration />
            {!isBrandPage && <HeaderShop cartItems={cartItems} onSearch={setKeyword} />}

            <Routes>
                <Route path="/" element={<Brandtop />} />

                <Route path="/shop" element={<Shoptop keyword={keyword} />} />

                <Route
                    path="/shop/:slug"
                    element={<ProductDetail onAddToCart={addToCart} />}
                />

                <Route
                    path="/cart"
                    element={
                        <CartPage
                            cartItems={cartItems}
                            onIncrease={onIncrease}
                            onDecrease={onDecrease}
                            onRemove={onRemove}
                        />
                    }
                />

                <Route
                    path="/checkout"
                    element={
                        <Checkout
                            cartItems={cartItems}
                            onClear={onClear}
                        />
                    }
                />

                <Route
                    path="/shop"
                    element={<Shoptop keyword={keyword} />}
                />

                <Route path="/thankyou" element={<ThankYou />} />

                <Route
                    path="/shop/gift/:slug"
                    element={<GiftDetail onAddToCart={addToCart} />}
                />
            </Routes>
            {!isBrandPage && <FooterShop />}
        </>
    );
}

export default function AppRouter() {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);


    const addToCart = (product, qty) => {
        setCartItems(prev => {
            const exist = prev.find(item => item.slug === product.slug);

            if (exist) {
                return prev.map(item =>
                    item.slug === product.slug
                        ? { ...item, qty: item.qty + qty }
                        : item
                );
            }

            return [...prev, { ...product, qty }];
        });
    };


    const increaseQty = slug => {
        setCartItems(prev =>
            prev.map(item =>
                item.slug === slug
                    ? { ...item, qty: item.qty + 1 }
                    : item
            )
        );
    };


    const decreaseQty = slug => {
        setCartItems(prev =>
            prev
                .map(item =>
                    item.slug === slug
                        ? { ...item, qty: item.qty - 1 }
                        : item
                )
                .filter(item => item.qty > 0)
        );
    };


    const removeItem = slug => {
        setCartItems(prev =>
            prev.filter(item => item.slug !== slug)
        );
    };


    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cart');
    };

    return (
        <BrowserRouter>
            <Layout
                cartItems={cartItems}
                addToCart={addToCart}
                onIncrease={increaseQty}
                onDecrease={decreaseQty}
                onRemove={removeItem}
                onClear={clearCart}
            />
        </BrowserRouter>
    );
}
