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