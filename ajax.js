var ajax = function(method, url, args, callback, err, progress) {
    if (Object(args) === args) {
        url += '?' + Object.keys(args).map(function(k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(args[k]);
        }).join('&');
    } else {
        args = new FormData(document.getElementById(args));
    }
    var xhr = new XMLHttpRequest();
    progress = document.querySelector(progress);
    if (progress !== null) {
        xhr.upload.onprogress = function(e) {
            if (e.lengthComputable) {
                progress.value = (e.loaded / e.total) * 100;
                progress.textContent = progress.value;
            }
        };
    }
    xhr.onload = function(e) {
        this.status > 199 && this.status < 400 ? callback(this) : err(this);
    };
    xhr.onerror = function(e) {
        err(e);
    };
    xhr.open(method, url, true);
    xhr.send(method === 'POST' ? args : null);
};
