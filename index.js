const url = document.getElementById("url");
const urltext = url.value;
const option= document.getElementById("option");
const optiontext= option.Value;
const btn = document.getElementById("submit-btn");

        const resurl=(`${REQUEST_URL}?&userId=${userid}&Displayname=${displayname}&url=${url}&option=${option}`)
btn.setAttribute('onclick', 'pushButton1()');
function pushButton1() {
         alert(resurl);
        const res = fetch(resurl);
        console.log(res);
    };
