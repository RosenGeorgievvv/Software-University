function encodeAndDecodeMessages() {
    let textArea = document.getElementsByTagName('textarea');
    [...document.getElementsByTagName('button')].forEach(btn => btn.addEventListener('click', message));

    function message(btn) {
        if (btn.target.textContent === 'Encode and send it') {
            let encd = [...textArea[0].value].map(e => String.fromCharCode(e.charCodeAt(0) + 1)).join('');
            textArea[1].value = encd;
            textArea[0].value = '';
        } else if (btn.target.textContent === 'Decode and read it') {
            let dcd = [...textArea[1].value].map(e => String.fromCharCode(e.charCodeAt(0) - 1)).join('');
            textArea[1].value = dcd;
        }
    } 
}