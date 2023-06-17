var pagetop = document.getElementsByClassName('pagetop')[0];
var bellIconHolder = document.createElement('div');
var myId = document.getElementById('me').innerText;

bellIconHolder.id = 'esBellIcon';
bellIconHolder.style.float = 'right'

pagetop.parentNode.insertBefore(bellIconHolder, pagetop.nextSibling);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const userId = document.getElementById("me")?.innerText;
    sendResponse({ userId: userId});  
    return true;
});

//Register
//prod https://hnnotifier.engagespot.co
//loc http://localhost:3002
fetch('https://hnnotifier.engagespot.co/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username: myId})
});

Engagespot.render('#esBellIcon', {
    apiKey: 'otktz21s4eccxe0fip3th',
    userId: myId,
    theme:{
        colors:{
            brandingPrimary:"#ff6600"
        }
    }
});