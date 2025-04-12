document.addEventListener('DOMContentLoaded', () => {
    
    const products = [
        { id: 1, name: 'Product 1', price: 10.99},
        { id: 2, name: 'Product 2', price: 19.99},
        { id: 3, name: 'Product 3', price: 29.99},
    ];

    let cart = [];
    loadCartFromLocalStorage();
    // renderCart();
    function loadCartFromLocalStorage(){
        const savedCart = localStorage.getItem('cart');
        if(savedCart){
            cart = JSON.parse(savedCart);
        }
    }
    
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const emptyCartMsg = document.getElementById('empty-cart');
    const cartTotalMsg = document.getElementById('cart-total');
    const totalPriceDisplay = document.getElementById('total-price');
    const checkOutBtn = document.getElementById('checkout-btn');

    products.forEach( product =>{
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <span> ${product.name} - $${product.price.toFixed(2)} </span>
            <button  data-id="${product.id}">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    })
    console.log(productList);
    renderCart();

    productList.addEventListener('click' , (e) =>{
        if(e.target.tagName === 'BUTTON'){
            const productId = parseInt(e.target.getAttribute("data-id"));
            const product = products.find(p => p.id === productId);
            addToCart(product);
            console.log("clicked");
        }
    })
    
    function addToCart(product){
        cart.push(product);
        saveCartToLocalStorage();
        renderCart();
        
    }

    function renderCart(){
        cartItems.innerHTML="";
        let totalPrice = 0;

        if(cart.length > 0){
            emptyCartMsg.classList.add('hidden');
            cartTotalMsg.classList.remove('hidden');

            cart.forEach((item,index) =>{
                totalPrice += item.price;
                const cartItem = document.createElement("div");
                cartItem.innerHTML = `
                <span>${item.name} - $${item.price.toFixed(2)}</span>
                <button data-id="${item.id}" >remove</button>
                `;
                cartItems.appendChild(cartItem);
                totalPriceDisplay.textContent=`${totalPrice.toFixed(2)}`
            });

            console.log(cartItems);

        }else{
            cartTotalMsg.classList.add('hidden');
            emptyCartMsg.classList.remove('hidden');
        }
    }
    
    cartItems.addEventListener('click' , (e)=> {
        if(e.target.tagName === 'BUTTON'){
            const productId = e.target.getAttribute("data-id");
            console.log(productId);
            
            cart = cart.filter(p => p.id !== parseInt(productId));
            saveCartToLocalStorage();
            console.log(cart);
            
            renderCart();
        }
        
    })
    checkOutBtn.addEventListener('click' ,()=>{
        cart.length = 0;
        renderCart();
        cartTotalMsg.classList.add('hidden');
        alert("Order Placed Successfully");
        saveCartToLocalStorage();
    })

    function saveCartToLocalStorage(){
        localStorage.setItem('cart', JSON.stringify(cart));
    }

})