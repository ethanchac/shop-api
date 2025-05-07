import { useState, useEffect } from 'react'
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

    function addCart(productName){
        const tempArr = [];
        tempArr.push(productName);
        setCart(prevcart => [...prevcart, productName]);
    }

    function removeCart(productName){
        if(cart.includes(productName)){
            setCart(prevCart => 
                prevCart.filter(item => item !== productName)
            );
        }
    }
    useEffect(() =>{
        console.log(cart);
    }, [cart])


    return (
        <>
            <h1>Shop</h1>
            <div className="products">
                {products.map(product =>(
                    <div key={product.id} className="product-card">
                        <img
                            src={product.image}
                        />
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                        <button onClick={() => addCart(product.title)}>+</button>
                        <button onClick={() => removeCart(product.title)}>-</button>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Shop