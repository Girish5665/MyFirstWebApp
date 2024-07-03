document.getElementById('onButton').addEventListener('click', () => {
    fetch('/api/device/on', {
        method: 'POST'
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('offButton').addEventListener('click', () => {
    fetch('/api/device/off', {
        method: 'POST'
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
    })
    .catch(error => console.error('Error:', error));
});
