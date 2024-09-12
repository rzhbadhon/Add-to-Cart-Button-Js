let itemCount = 0;

    function addToCart() {
        itemCount += 1;
        updateCartInfo();
    }

    function addTwo() {
        itemCount += 2;
        updateCartInfo();
    }

    function resetCart() {
        itemCount = 0;
        updateCartInfo();
    }

    function updateCartInfo() {
        document.getElementById('cartInfo').textContent = `Items: ${itemCount}`;
    }