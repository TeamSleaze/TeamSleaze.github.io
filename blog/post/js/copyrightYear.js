async function copyrightYear() {
    document.getElementById('copyrightYear').innerHTML = new Date().getFullYear();
}

copyrightYear();