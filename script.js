 
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