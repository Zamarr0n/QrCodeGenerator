const form = document.getElementById('form');
// const qrcode = document.getElementById('qrcode');
const url = document.getElementById('url');

// qrcode.makeCode("https://zamarr0n.github.io/Friends-In-Common/");
// https://zamarr0n.github.io/Friends-In-Common/
const GetCodeQR = (e) =>{
    e.preventDefault();
    const url = document.getElementById('url').value;
    // const urlValue = url.value;
    
    if(url == ''){
        alert("Please enter a valid url");
    }else {
        new QRCode(document.getElementById('qrcode'),url);
        console.log(url);
    }
}


form.addEventListener('submit', GetCodeQR);





