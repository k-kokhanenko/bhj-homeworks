function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
    const parts = document.cookie.split('; ');
    const cookie = parts.find(p => p.startsWith(name + '='));
    if (cookie) 
        return cookie.substring(name.length + 1);

    return null;
}

document.addEventListener("DOMContentLoaded", () => {
    //console.log(document.cookie);
    const cookie = getCookie('MY_POPUP_CLOSE');
    if (!cookie) {
        const dlg = document.getElementById('subscribe-modal');
        if (dlg) {
            dlg.classList.add('modal_active');

            const btnClose = document.querySelector('.modal__close');
            if (btnClose) {
                btnClose.addEventListener('click', function(e) {
                    dlg.classList.remove('modal_active');
                    setCookie('MY_POPUP_CLOSE', '1');
                });            
            }
            
        }
    }        
});


