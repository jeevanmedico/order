  
    let cart = [];
    let cartTotal = 0;

    function toggleCart() {
      const cartDisplay = document.getElementById('cartItems');
      if (cartDisplay.style.display === 'block') {
        cartDisplay.style.display = 'none';
      } else {
        cartDisplay.style.display = 'block';
      }
    }

    function addToCart(name, price) {
      cart.push({ name, price });
      cartTotal += price;
      document.getElementById('cartList').innerHTML += `<li>${name} - $${price}</li>`;
      document.getElementById('cartTotal').textContent = cartTotal.toFixed(2);
    }

    function showUserInfoForm() {
      const userInfoForm = document.getElementById('userInfoForm');
      userInfoForm.style.display = 'flex';
    }

    function submitOrder(event) {
      event.preventDefault();
      const userInfoForm = document.getElementById('userInfoForm');
      const inputs = userInfoForm.getElementsByTagName('input');
      const userDetails = {};
      for (let input of inputs) {
        userDetails[input.placeholder] = input.value;
      }

      if (Object.keys(userDetails).length < 3) {
        alert("Please fill in all details.");
        return;
      }

      if (cart.length === 0) {
        alert("Your cart is empty. Please add items before placing an order.");
        return;

      }
      function toggleCart() {
        var cart = document.getElementById("cartItems");
        if (cart.style.display === "none") {
            cart.style.display = "block";
        } else {
            cart.style.display = "none";
        }
    }

      // Form data to be sent to Web3Forms
      const formData = {
        access_key: '0a2f583d-eae2-4fc4-83d9-5b83a443ab07', // Replace with your Web3Forms access key
        ...userDetails,
        products_selected: JSON.stringify({ cart, cartTotal }),
      };

      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (response.ok) {
          // Successfully submitted
          alert("Order submitted!\nUser details: " + JSON.stringify(userDetails));
          cart = [];
          cartTotal = 0;
          document.getElementById('cartList').innerHTML = '';
          document.getElementById('cartTotal').textContent = '0.00';
          userInfoForm.style.display = 'none';
        } else {
          alert("Failed to submit the order. Please try again later.");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert("An error occurred while submitting the order. Please try again later.");
      });
    }
    function addToCart(name, price) {
        cart.push({ name, price });
        cartTotal += price;
        document.getElementById('cartList').innerHTML += `<li>${name} - $${price}</li>`;
        document.getElementById('cartTotal').textContent = cartTotal.toFixed(2);
      
        // Display the cart by removing 'display: none' style
        document.getElementById('cartItems').style.display = 'block';
      }
      window.addEventListener('scroll', function() {
        const header = document.getElementById('mainHeader');
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
      function showUserInfoForm() {
        const userInfoForm = document.getElementById('userInfoForm');
        userInfoForm.style.display = 'flex';
      }
      
      function hideUserInfoForm() {
        const userInfoForm = document.getElementById('userInfoForm');
        userInfoForm.style.display = 'none';
      }
      function showUserInfoForm() {
        const userInfoForm = document.getElementById('userInfoForm');
        userInfoForm.style.display = 'flex';
        document.addEventListener('keydown', closeOnEscape);
      }
      
      function hideUserInfoForm() {
        const userInfoForm = document.getElementById('userInfoForm');
        userInfoForm.style.display = 'none';
        document.removeEventListener('keydown', closeOnEscape);
      }
      
      function closeOnEscape(event) {
        if (event.key === 'Escape') {
          hideUserInfoForm();
        }
      }
      function addToCart(name, price) {
        cart.push({ name, price });
        cartTotal += price;
        document.getElementById('cartList').innerHTML += `<li>${name} - $${price} <button onclick="cancelItem('${name}', ${price})">Cancel</button></li>`;
        document.getElementById('cartTotal').textContent = cartTotal.toFixed(2);
      }
      
      function cancelItem(name, price) {
        const itemIndex = cart.findIndex(item => item.name === name && item.price === price);
        if (itemIndex !== -1) {
          cartTotal -= price;
          cart.splice(itemIndex, 1);
          updateCartDisplay();
        }
      }
      
      function updateCartDisplay() {
        const cartList = document.getElementById('cartList');
        cartList.innerHTML = '';
        cart.forEach(item => {
          cartList.innerHTML += `<li>${item.name} - $${item.price} <button onclick="cancelItem('${item.name}', ${item.price})">Cancel</button></li>`;
        });
        document.getElementById('cartTotal').textContent = cartTotal.toFixed(2);
      }
      function toggleCart() {
        var cart = document.getElementById("cartItems");
        if (cart.style.display === "none") {
            cart.style.display = "block";
        } else {
            cart.style.display = "none";
        }
    }
