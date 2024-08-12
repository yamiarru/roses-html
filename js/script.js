// jQuery
const scriptJQuery = document.createElement('script');
scriptJQuery.src = "https://code.jquery.com/jquery-3.5.1.slim.min.js";
scriptJQuery.integrity = "sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj";
scriptJQuery.crossOrigin = "anonymous";
document.body.appendChild(scriptJQuery);

// Popper.js
const scriptPopper = document.createElement('script');
scriptPopper.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js";
scriptPopper.integrity = "sha384-I/QJ6j8BWHxtAO0Hwa+kfj5I8MvRftZj4a/4AfZV7X0woTyW+cA82PzNTq8t5g4c";
scriptPopper.crossOrigin = "anonymous";
document.body.appendChild(scriptPopper);

// Bootstrap
const scriptBootstrap = document.createElement('script');
scriptBootstrap.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
scriptBootstrap.integrity = "sha384-pp5Gy92m3UusK8QF7IHs9zKgiuvbovUnS+2uPAlR1ymBgt6mb/Y8j6mWl2J35t1y";
scriptBootstrap.crossOrigin = "anonymous";
document.body.appendChild(scriptBootstrap);
