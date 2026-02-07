// Get DOM elements
const fetchBtn = document.getElementById('fetchBtn');
const submitForm = document.getElementById('submitForm');
const dataDisplay = document.getElementById('dataDisplay');
const responseDisplay = document.getElementById('responseDisplay');
const responseText = document.getElementById('responseText');

// API Base URL
const API_BASE = 'http://localhost:3000';

// Endpoint 1: Fetch data from server
fetchBtn.addEventListener('click', async () => {
    try {
        fetchBtn.disabled = true;
        fetchBtn.textContent = 'Loading...';
        
        const response = await fetch(`${API_BASE}/api/data`);
        const result = await response.json();
        
        if (result.status === 'success') {
            let html = '<h3>Server Response:</h3>';
            html += '<ul style="margin-top: 10px;">';
            result.data.forEach(item => {
                html += `<li><strong>ID: ${item.id}</strong> - ${item.message}</li>`;
            });
            html += '</ul>';
            dataDisplay.innerHTML = html;
        }
    } catch (error) {
        dataDisplay.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    } finally {
        fetchBtn.disabled = false;
        fetchBtn.textContent = 'Fetch Data from Server';
    }
});

// Endpoint 2: Submit form data to server
submitForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    
    try {
        const response = await fetch(`${API_BASE}/api/submit`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, message })
        });
        
        const result = await response.json();
        
        if (result.status === 'success') {
            responseText.innerHTML = `<strong>${result.message}</strong><br>`;
            responseText.innerHTML += `<small>Received: ${JSON.stringify(result.received, null, 2)}</small>`;
            responseDisplay.style.display = 'block';
            submitForm.reset();
        }
    } catch (error) {
        responseText.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        responseDisplay.style.display = 'block';
    }
});

console.log('MinimalStack frontend loaded successfully!');
console.log(`Connecting to API at: ${API_BASE}`);
