const form = document.getElementById('form');
// const qrcode = document.getElementById('qrcode');
const url = document.getElementById('url');

const qr_div = document.getElementById("qrcode")
// qrcode.makeCode("https://zamarr0n.github.io/Friends-In-Common/");
// https://zamarr0n.github.io/Friends-In-Common/

const GetCodeQR = (e) =>{
    e.preventDefault();
    clearUI();
    
    const url = document.getElementById('url').value;
    
    if(url == ''){
        alert("Please enter a valid url");
    }else {
        new QRCode(document.getElementById('qrcode'),url);
        
        setTimeout(() => {
            const saveUrl = qr_div.querySelector('img').src;
            createSaveBtn(saveUrl); 
        }, 50);
        // createSaveBtn();
        console.log(url);
    }

}

const clearUI = () => {
    qr_div.innerHTML = '';
    const saveBtn = document.getElementById('save-link')
    if (saveBtn) saveBtn.remove();
}

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    // link.classList = definir clase del boton
    link.href = saveUrl;
    link.download = "qrcode.png";
    link.textContent = "Save QR Code";
    document.getElementById('qrcode').appendChild(link);
} 

form.addEventListener('submit', GetCodeQR);





