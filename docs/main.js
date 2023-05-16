var app = document.getElementById('app');
var loading = document.getElementById('loading');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 150
});

typewriter.typeString('Hola mundo! 🌎')
    .pauseFor(1)
    .deleteAll()

    .start();

var typewriter = new Typewriter(loading, {
    loop: false,
    cursor: '.',
    delay: 500
});

typewriter.typeString('...')
    .pauseFor(100)
    .start();