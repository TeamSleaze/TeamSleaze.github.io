async function fetchDate(name) {
    let response = await fetch('https://api.github.com/repos/SleazeStiKs/SleazeStiKs.github.io/commits?path=blog/posts/' + name  + ".md");

    if (response.status === 200) {
        let data = await response.json();
        data = data[0].commit.author.date.split('-');

        var monthString = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];
        
        var year = data[0];
        var month = monthString[Number(data[1] - 1)];
        var day = data[2].split('T')[0];

        var date = month + ' ' + day + ', ' + year;
        document.getElementById('latest-commit-date').innerHTML = "Last Updated - " + date;
    }
}

window.onload=()=>{
    var href = "https://github.com/SleazeStiKs/SleazeStiKs.github.io/commits/main/blog/posts/" + blogID + ".md";
    document.getElementById('latest-update-link').href = href;
}
