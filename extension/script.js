var pagetop = document.getElementsByClassName('pagetop')[0];
var bellIconHolder = document.createElement('div');
var myId = document.getElementById('me').innerText;

bellIconHolder.id = 'esBellIcon';
bellIconHolder.style.float = 'right'

pagetop.parentNode.insertBefore(bellIconHolder, pagetop.nextSibling);

//Register
fetch('https://hnnotifier.engagespot.co/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username: myId})
});

Engagespot.render('#esBellIcon', {
    apiKey: 'td11pqkaifs7wjmu1hcc',
    userId: myId,
    theme:{
        colors:{
            brandingPrimary:"#ff6600"
        }
    }
});