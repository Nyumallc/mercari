let userId = ''
const func = () => {
    location.replace("https://www.google.com/")
    document.getElementById('res').innerHTML=resurl;
}


const resurl=(`${REQUEST_URL}?userid=${userid}&displayname=${displayname}&url=${url}&option=${option}`)
const btn = document.getElementById('submit-btn');
const url = document.getElementById('url').Value;
const option= document.getElementById('option').Value;


btn.addEventListener('click', urlSubmit);

// ページをreload
function doReload() {
    window.location.reload(true);
}
window.addEventListener('load', function () {
    // ページ表示完了した5秒後にリロード
    setTimeout(doReloadNoCache, 10);
});
