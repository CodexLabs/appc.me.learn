window.onload = function () {
    parent.appLoaded(execute, clean);
};

/**
 * Wrap eval so that we can execute across the iframe.
 * @param code
 */
function execute(code) {
    eval(code);
}

function clean() {
    document.getElementById("TiUIContainer").innerHTML = '';
    // TODO: we need to be more thorough with this. What if they setInterval, etc?
}