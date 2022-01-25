<p class="blog-title">Creating the Blog</p>

<div class="blog-item-type-date">
    <p class="blog-item-date">Jan 22, 2022</p>
    <p class="blog-item-hyphen">-</p>
    <p class="blog-item-type dev-blog">Dev Blog</p>
</div>

Hi, I finally got around to creating a blog so I can document my work and stop making excuses for why I can't finish doing stuff.

This Blog was made with pure [**HTML**](https://github.com/SleazeStiKs/SleazeStiKs.github.io), [**CSS**](https://github.com/SleazeStiKs/SleazeStiKs.github.io) and [**Javascript**](https://github.com/SleazeStiKs/SleazeStiKs.github.io). The posts are basic markdown files which are converted to HTML using [**marked**](https://marked.js.org/).

As you might have noticed, all blogs are redirected to the same page but with different content. This is done by using  **query strings**. I use javascript to generate the links with the query parameters:

```javascript
function addParameter(name) {
    window.location.href = "/blog/post/?id=" + name;
}
```

As soon as the [post page](https://github.com/SleazeStiKs/SleazeStiKs.github.io/blob/main/blog/post/index.html) loads, I get the query string from the URL and use its value, to find and display the corresponding markdown file:

```javascript
function getURLParameter(parameter)
{
    var pageURL = window.location.search.substring(1);
    var URLVariables = pageURL.split('&');
    for (var i = 0; i < URLVariables.length; i++) 
    {
        var parameterName = URLVariables[i].split('=');
        if (parameterName[0] == parameter) 
        {
            return parameterName[1];
        }
    }
}
```

In the future I plan to add custom features, to be able to display charts, syntax highlighted code, etc.
