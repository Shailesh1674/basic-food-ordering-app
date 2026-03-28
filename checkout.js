document.addEventListener('DOMContentLoaded', () => {
    // Check if cart is empty or not logged in
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
        alert('Please login to proceed with checkout.');
        window.location.href = 'login.html';
        return;
    }

    if (savedCart.length === 0) {
        alert('Your cart is empty!');
        window.location.href = 'index.html';
        return;
    }

    // Populate user info if available
    document.getElementById('shipName').value = currentUser.name;

    // Render Order Summary
    const checkoutItemsList = document.getElementById('checkoutItemsList');
    let total = 0;

    savedCart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const div = document.createElement('div');
        div.className = 'summary-item';
        div.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <span>₹${itemTotal.toFixed(2)}</span>
        `;
        checkoutItemsList.appendChild(div);
    });

    document.getElementById('checkoutTotalAmount').textContent = total.toFixed(2);
    document.getElementById('payBtnAmount').textContent = total.toFixed(2);

    // Payment Method Toggle
    const methods = document.querySelectorAll('.payment-method');
    methods.forEach(method => {
        method.addEventListener('click', function() {
            methods.forEach(m => m.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelectorAll('.payment-details').forEach(d => d.classList.remove('active'));
            const methodType = this.getAttribute('data-method');
            if (methodType === 'card') {
                document.getElementById('cardDetails').classList.add('active');
                document.querySelectorAll('#cardDetails input').forEach(i => i.setAttribute('required', 'true'));
                document.querySelectorAll('#upiDetails input').forEach(i => i.removeAttribute('required'));
            } else {
                document.getElementById('upiDetails').classList.add('active');
                document.querySelectorAll('#upiDetails input').forEach(i => i.setAttribute('required', 'true'));
                document.querySelectorAll('#cardDetails input').forEach(i => i.removeAttribute('required'));
            }
        });
    });

    // Form submission
    const form = document.getElementById('checkoutPaymentForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Disable button
        const btn = form.querySelector('button[type="submit"]');
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        btn.disabled = true;

        // Simulate network request
        setTimeout(() => {
            // Save Order to admin system
            const order = {
                id: 'ORD' + Math.floor(Math.random() * 100000),
                userId: currentUser.email,
                customerName: document.getElementById('shipName').value,
                address: document.getElementById('shipAddress').value,
                items: savedCart,
                total: total,
                status: 'Preparing',
                timestamp: new Date().toISOString()
            };

            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push(order);
            localStorage.setItem('orders', JSON.stringify(orders));

            // Clear cart
            localStorage.setItem('cart', JSON.stringify([]));

            // Show success receipt
            document.getElementById('receiptOrderId').textContent = order.id;
            document.getElementById('receiptModal').style.display = 'flex';

            // Start Tracking Animation (60s total)
            let progress = 0;
            const bar = document.getElementById('trackingProgressBar');
            const text = document.getElementById('trackingStatusText');
            
            const interval = setInterval(() => {
                progress += (100 / 60); // 100% over 60s
                if (progress >= 100) {
                    progress = 100;
                    clearInterval(interval);
                    text.textContent = 'Delivered! Enjoy your food 🍔😋';
                    
                    // Update order status in localStorage to Delivered
                    const currentOrders = JSON.parse(localStorage.getItem('orders')) || [];
                    const myOrder = currentOrders.find(o => o.id === order.id);
                    if (myOrder) {
                        myOrder.status = 'Delivered';
                        localStorage.setItem('orders', JSON.stringify(currentOrders));
                    }

                } else if (progress > 66) {
                    text.textContent = 'Out for Delivery 🛵💨';
                } else if (progress > 33) {
                    text.textContent = 'Food is being Prepared 👨‍🍳🔥';
                }
                bar.style.width = progress + '%';
            }, 1000);

        }, 1500);
    });
});
