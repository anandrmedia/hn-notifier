const button = document.getElementById("saveEmail");

function validateEmail(email) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.match(validRegex)){
    return false;
  }

  return true;
}

button.addEventListener("click", async () => {
    const email = document.getElementById("email").value;

    if(email.trim() == ''){
        alert('Please enter an email id');
        return;
    }

    if(!validateEmail(email)){
      alert('Invalid email id');
        return;
    }

    button.disabled = true;
    button.innerText = "..."
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    console.log("Send");
    chrome.tabs.sendMessage(tabs[0].id, "message", (response) => {
      console.log("Recv response = " + response?.userId);

      if (!response?.userId) {
        alert(
          "You must be on the HackerNews website to update your notification preferences"
        );

        button.disabled = false;
            button.innerText = "💾"

        return;
      } else {

        const userId = response.userId;
        console.log("Updating ",email,"to ",userId);
        fetch("https://api.engagespot.co/v3/profile/", {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-ENGAGESPOT-API-KEY":"otktz21s4eccxe0fip3th",
            "X-ENGAGESPOT-USER-ID":userId
          },
          body: JSON.stringify({ email: email }),
        }).then(res => {

            button.disabled = false;
            button.innerText = "💾"

            if (res.status === 200){
                alert("✅ You'll now receive email notifications!");
            }else{
                alert("Oops! some error occured. please try again");
            }
        });
      }
    });
  });
});
