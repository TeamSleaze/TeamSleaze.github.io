var title = document.getElementById('blog-title').innerText;
title = title.replace(/\s+/g, '-').toLowerCase();

const _text = "";
fetch('/blog/posts/' + title + ".md")
    .then(response => response.text())
    .then(text => setTextContent(text))

function setTextContent(text) {
    var content = text;
    document.getElementById('blog-content').textContent = content;
}