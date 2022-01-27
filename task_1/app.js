document.addEventListener('click', function(event) {
    let id = event.target.dataset.toggleId;
    if (!id) return;
    if (id == 'login') {
        let elem = document.getElementById(id);

        if (elem.className == "login") {
            elem.className = "login on";
        } else {
            elem.className = "login";
        }
    }
    if (id == 'search') {
        let elem = document.getElementById(id);

        if (elem.className == "search") {
            elem.className = "search on";
        } else {
            elem.className = "search";
        }
    }


});


document.addEventListener('click', function(event) {
    let id = event.target.id;

    if ((id.indexOf('click')) != -1) {
        let idNumber = id.slice(-1);
        let count = document.getElementById('buttonCountNumber_' + idNumber);
        count.innerHTML++;
    } else {
        return;
    }
});