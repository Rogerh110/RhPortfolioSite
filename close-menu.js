var checkbox = document.querySelector('#checkboxInput');
var icon = document.querySelector('#menu');
var listener = function (e) {
    if (e.target != checkbox && e.target != icon) {
        checkbox.checked = false;
        document.removeEventListener('click', listener);
    }
};

checkbox.addEventListener('click', function () {
    if (this.checked) {
        document.addEventListener('click', listener);
    }
});