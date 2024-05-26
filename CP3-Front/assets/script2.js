document.addEventListener('DOMContentLoaded', () => {
    const data = JSON.parse(localStorage.getItem('formData'));
    document.getElementById('json-output').textContent = JSON.stringify(data, undefined, 2);
    
    if (window.location.href.includes('index2.html')) {
        document.querySelector('footer p').style.display = 'block';
    }
});
