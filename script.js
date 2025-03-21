const products = [
    { id: 0, image: 'https://api.learning-axis.com/images/gg-1.jpg', title: 'Z Flip Foldable Mobile', price: 120 },
    { id: 1, image: 'https://api.learning-axis.com/images/hh-2.jpg', title: 'Air Pods Pro', price: 60 },
    { id: 2, image: 'https://api.learning-axis.com/images/ee-3.jpg', title: '250D DSLR Camera', price: 230 },
    { id: 3, image: 'https://api.learning-axis.com/images/aa-1.jpg', title: 'Head Phones', price: 100 }
  ];
  
  const rootElement = document.getElementById('root');
  const cartCount = document.getElementById('count');
  const cartItemsContainer = document.getElementById('cartItem');
  const totalElement = document.getElementById('total');
  
  let cart = [];
  
  // Renderiza os produtos na página
  function renderProducts() {
    rootElement.innerHTML = products.map((item, index) => {
      return `
        <div class='box'>
          <div class='img-box'>
            <img class='images' src="${item.image}" alt="${item.title}">
          </div>
          <div class='bottom'>
            <p>${item.title}</p>
            <h2>$ ${item.price}.00</h2>
            <button onclick='addToCart(${index})'>Add to cart</button>
          </div>
        </div>`;
    }).join('');
  }
  
  // Adiciona um item ao carrinho
  function addToCart(index) {
    cart.push({ ...products[index] });
    updateCart();
  }
  
  // Remove um item do carrinho
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }
  
  // Atualiza a exibição do carrinho
  function updateCart() {
    cartCount.innerText = cart.length;
    let total = 0;
  
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "Your cart is empty";
      totalElement.innerText = "$ 0.00";
      return;
    }
  
    cartItemsContainer.innerHTML = cart.map((item, index) => {
      total += item.price;
      return `
        <div class='cart-item'>
          <div class='row-img'>
            <img class='rowimg' src="${item.image}" alt="${item.title}">
          </div>
          <p style='font-size:12px;'>${item.title}</p>
          <h2 style='font-size: 15px;'>$ ${item.price}.00</h2>
          <i class='fa-solid fa-trash' onclick='removeFromCart(${index})'></i>
        </div>`;
    }).join('');
  
    totalElement.innerText = `$ ${total}.00`;
  }
  
  // Inicializa a renderização dos produtos
  renderProducts();