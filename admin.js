document.addEventListener('DOMContentLoaded', () => {
    // Auth Check
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || !currentUser.isAdmin) {
        alert('Access Denied. Admins only.');
        window.location.href = 'index.html';
        return;
    }

    // Logic for Logout
    document.getElementById('adminLogout').addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('currentUser');
        window.location.href = 'index.html';
    });

    // Tab Navigation
    const tabs = document.querySelectorAll('.nav-tab');
    const sections = document.querySelectorAll('.admin-section');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tab.getAttribute('data-target')).classList.add('active');
        });
    });

    // Load Data
    let foodData = JSON.parse(localStorage.getItem('foodData')) || [];
    let orders = JSON.parse(localStorage.getItem('orders')) || [];

    // --- Dashboard Stats ---
    function renderDashboard() {
        document.getElementById('statTotalOrders').textContent = orders.length;
        document.getElementById('statTotalItems').textContent = foodData.length;
        
        const rev = orders.reduce((sum, order) => sum + (parseFloat(order.total) || 0), 0);
        document.getElementById('statTotalRevenue').textContent = '₹' + rev.toFixed(2);
    }

    // --- Orders Management ---
    function renderOrders() {
        const tbody = document.querySelector('#ordersTable tbody');
        tbody.innerHTML = '';
        
        // Render in reverse chronological order
        [...orders].reverse().forEach((order, index) => {
            // Because reversing creates a copy, calculating real index in original array
            const realIndex = orders.length - 1 - index;
            
            const tr = document.createElement('tr');
            
            let itemsPreview = order.items.map(i => `${i.name} (x${i.quantity})`).join(', ');
            if (itemsPreview.length > 30) itemsPreview = itemsPreview.substring(0, 30) + '...';

            let statusColor = '';
            if (order.status === 'Preparing') statusColor = 'status-Preparing';
            else if (order.status === 'Out for Delivery') statusColor = 'status-Out';
            else if (order.status === 'Delivered') statusColor = 'status-Delivered';
            else statusColor = 'status-Preparing'; // Default

            tr.innerHTML = `
                <td>${order.id}</td>
                <td>${order.customerName}</td>
                <td>${new Date(order.timestamp).toLocaleDateString()}</td>
                <td title="${order.items.map(i => i.name).join(', ')}">${itemsPreview}</td>
                <td>₹${parseFloat(order.total).toFixed(2)}</td>
                <td><span class="status-badge ${statusColor}">${order.status || 'Preparing'}</span></td>
                <td>
                    <button class="action-btn btn-status" onclick="updateOrderStatus(${realIndex})" title="Change Status"><i class="fas fa-truck"></i></button>
                    <button class="action-btn btn-delete" onclick="deleteOrder(${realIndex})" title="Delete"><i class="fas fa-trash"></i></button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    window.updateOrderStatus = function(index) {
        const statuses = ['Preparing', 'Out for Delivery', 'Delivered'];
        let currentStatus = orders[index].status || 'Preparing';
        let nextIndex = (statuses.indexOf(currentStatus) + 1) % statuses.length;
        orders[index].status = statuses[nextIndex];
        
        localStorage.setItem('orders', JSON.stringify(orders));
        renderOrders();
    };

    window.deleteOrder = function(index) {
        if(confirm('Are you sure you want to delete this order?')) {
            orders.splice(index, 1);
            localStorage.setItem('orders', JSON.stringify(orders));
            renderOrders();
            renderDashboard();
        }
    };

    // --- Menu Management ---
    const modal = document.getElementById('menuItemModal');
    const form = document.getElementById('menuItemForm');

    function renderMenu() {
        const tbody = document.querySelector('#menuTable tbody');
        tbody.innerHTML = '';
        
        foodData.forEach((item, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${item.id}</td>
                <td><img src="${item.image}" alt="${item.name}" style="width: 50px; border-radius: 4px;"></td>
                <td>${item.name}</td>
                <td style="text-transform: capitalize;">${item.category}</td>
                <td>₹${parseFloat(item.price).toFixed(2)}</td>
                <td>
                    <button class="action-btn btn-edit" onclick="editMenuItem(${index})"><i class="fas fa-edit"></i></button>
                    <button class="action-btn btn-delete" onclick="deleteMenuItem(${index})"><i class="fas fa-trash"></i></button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }

    document.getElementById('addMenuItemBtn').addEventListener('click', () => {
        form.reset();
        document.getElementById('itemId').value = '';
        document.getElementById('modalTitle').textContent = 'Add Menu Item';
        modal.style.display = 'flex';
    });

    document.getElementById('cancelMenuBtn').addEventListener('click', () => {
        modal.style.display = 'none';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const idInput = document.getElementById('itemId').value;
        const newItem = {
            id: idInput ? parseInt(idInput) : Date.now(),
            name: document.getElementById('itemName').value,
            category: document.getElementById('itemCategory').value,
            price: parseFloat(document.getElementById('itemPrice').value),
            description: document.getElementById('itemDescription').value,
            image: document.getElementById('itemImage').value
        };

        if (idInput) {
            // Edit
            const idx = foodData.findIndex(f => f.id === parseInt(idInput));
            if(idx > -1) foodData[idx] = newItem;
        } else {
            // Add
            foodData.push(newItem);
        }

        localStorage.setItem('foodData', JSON.stringify(foodData));
        renderMenu();
        renderDashboard();
        modal.style.display = 'none';
    });

    window.editMenuItem = function(index) {
        const item = foodData[index];
        document.getElementById('itemId').value = item.id;
        document.getElementById('itemName').value = item.name;
        document.getElementById('itemCategory').value = item.category;
        document.getElementById('itemPrice').value = item.price;
        document.getElementById('itemDescription').value = item.description;
        document.getElementById('itemImage').value = item.image;
        
        document.getElementById('modalTitle').textContent = 'Edit Menu Item';
        modal.style.display = 'flex';
    };

    window.deleteMenuItem = function(index) {
        if(confirm('Are you sure you want to delete this menu item?')) {
            foodData.splice(index, 1);
            localStorage.setItem('foodData', JSON.stringify(foodData));
            renderMenu();
            renderDashboard();
        }
    };

    // Initial render
    renderDashboard();
    renderOrders();
    renderMenu();
});
