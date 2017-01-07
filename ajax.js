	var ajax = {
		request: function(method, url, args, callback, err, progress) {
			if (Object(args) === args) {
				args = Object.keys(args).map(function(key) {
					return encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
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
				if (this.status > 199 && this.status < 400) {
					callback(this.response, e);
				} else {
					err(this.statusText, e);
				}
			};
			xhr.onerror = function(e) {
				err(this.statusText, e);
			};
			xhr.open(method, url + (method === 'GET' ? '?' + args : ''), true);
			xhr.send(method === 'POST' ? args : null);
		}
	};
