document.addEventListener('DOMContentLoaded', function () {
    const fruits = document.querySelectorAll('.fruit');
    const heading = document.getElementById('heading');
    const text = document.getElementById('text');
    const button = document.getElementById('button');
    const subheading = document.getElementById('subheading');

    for (let i = 0; i < fruits.length; i++) {
        fruits[i].addEventListener('mouseover', function () {
            this.style.color = 'red';
        });

        fruits[i].addEventListener('mouseout', function () {
            this.style.color = 'black';
        });
    }
});

var elements = document.getElementsByClassName("fruit");

var myFunction = function () {
    var text = this.textContent;
    var img = '';
    switch (text) {
        case "Apple":
            img = '<img src="apple_158989157.jpg">';
            heading = '<h4>Apple</h4>';
            break;
        case "Banana":
            img = '<img src="bananas-bunch.webp"></img>';
            heading = '<h4>Banana</h4>';
            break;
        case "Cherry":
            img = '<img src="sweet-cherry-fruit-seeds.jpg"></img>';
            heading = '<h4>Cherry</h4>';
            break;

        default:
            break;
    }
    document.getElementById('result').innerHTML = heading + img;
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', myFunction);
}

document.getElementById('textarea').addEventListener('keyup', function (e) {
    heading = '<h4>Your Text</h4>';
    var txt = this.value;
    txt = txt.replace(/\n\r?/g, '<br />');
    document.getElementById('result').innerHTML = heading + txt;
})