import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart.jsx'
import './Shop.css'

function Shop(){
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const URL = 'https://fakestoreapi.com/products'
    let tempArr = [];
    useEffect(() =>{
        let isOn = false;
        fetch(URL)
            .then(response => response.json())
            .then(data =>{
                if(!isOn){
                    setProducts(data);
                }
                
            })
        return () =>{
            isOn = true;
        }
    }, [])


    useEffect(() =>{
        console.log(products);
    }, [products])

    function addCart(productName, productImage, productID){
        const existItem = cart.findIndex(item => item.title === productName);

        if(existItem >= 0){
            const updatedCart = [...cart];
            updatedCart[existItem] = {
                ...updatedCart[existItem],
                count: updatedCart[existItem].count + 1,
                
            };
            setCart(updatedCart);
        }else{
            setCart(prevCart => [...prevCart, {title: productName, count: 1, image: productImage, id: productID}]);
        }
    }

    function removeCart(productName){
        const existitem = cart.findIndex(item => item.title === productName);

        if(existitem >= 0){
            const updatedCart = [...cart];
            if(updatedCart[existitem].count > 1){
                updatedCart[existitem] = {
                    ...updatedCart[existitem],
                    count: updatedCart[existitem].count - 1
                }
                setCart(updatedCart);
            }else{
                setCart(prevCart => prevCart.filter(item => item.title !== productName));
            }
        }
    }
    useEffect(() =>{
        console.log(cart);
    }, [cart])


    return (
        <>
            <nav className="nav-bar">
                <Link to="/">Home</Link>
                <Link to="/shop">Shopping</Link>
            </nav>
            <h1>Shop</h1>
            <div className="products">
                {products.map(product =>(
                    <div key={product.id} className="product-card">
                        <img
                            src={product.image}
                        />
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <button onClick={() => addCart(product.title, product.image, product.id)}>+</button>
                        <button onClick={() => removeCart(product.title)}>-</button>
                    </div>
                ))}
            </div>
            <Cart 
                cart={cart}
            />
        </>
    )
}
export default Shop