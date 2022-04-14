function toBeHired() {
    var wage = document.getElementById('hourly_wage');

    if (document.getElementById('hiring').checked) {
        wage.style.display = 'inline';
        console.log("hello");
    }
    else {
        wage.style.display = 'none';
    }
}