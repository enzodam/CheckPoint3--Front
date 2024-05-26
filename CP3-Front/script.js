document.getElementById('cadastro').addEventListener('click', function(event) {
    event.preventDefault();
    
    var senha = document.getElementById('senha').value;
    var conf_senha = document.getElementById('conf_senha').value;
    
    if (senha !== conf_senha) {
        alert('As senhas não coincidem');
        return;
    }
    
    var form1 = new FormData(document.getElementById('form1'));
    var form2 = new FormData(document.getElementById('form2'));
    var form3 = new FormData(document.getElementById('form3'));
    
    var data = {};
    form1.forEach((value, key) => { data[key] = value });
    form2.forEach((value, key) => { data[key] = value });
    form3.forEach((value, key) => { data[key] = value });
    
    localStorage.setItem('formData', JSON.stringify(data));
    window.location.href = 'index2.html';
    
    if (window.innerWidth <= 991) {
        document.getElementById('footer-message').style.display = 'none';
    }
});

function goBack() {
    window.location.href = 'index.html';
}
