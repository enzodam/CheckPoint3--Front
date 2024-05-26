function goBack() {
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    const data = JSON.parse(localStorage.getItem('formData'));
    document.getElementById('json-output').textContent = JSON.stringify(data, undefined, 2);
});