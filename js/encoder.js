
function runOperation() {
    const input = document.getElementById('input').value;
    const operation = document.getElementById('operation').value;
    let output = '';

    switch(operation) {
        case 'base64encode':
            output = btoa(input);
            break;
        case 'base64decode':
            output = atob(input);
            break;
        case 'urlencode':
            output = encodeURIComponent(input);
            break;
        case 'urldecode':
            output = decodeURIComponent(input);
            break;
        case 'md5':
            output = md5(input);
            break;
        case 'sha256':
            crypto.subtle.digest('SHA-256', new TextEncoder().encode(input)).then(hashBuffer => {
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                document.getElementById('output').value = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            });
            return;
        default:
            output = "Unsupported operation";
    }
    document.getElementById('output').value = output;
}

// MD5 implementation (very basic version)
function md5(str) {
    return CryptoJS.MD5(str).toString();
}
