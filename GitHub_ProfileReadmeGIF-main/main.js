var app = document.getElementById('app');
var loading = document.getElementById('loading');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 150
});

typewriter.typeString('Hola amigos!')
    .pauseFor(1)
    .deleteAll()
    .typeString('Mi nombre es <strong>Angel</strong>')
    .pauseFor(100)
    .deleteAll()
    .typeString('<strong>Bienvenidos a mi github profile</strong>')
    .pauseFor(100)
    .start();

var typewriter = new Typewriter(loading, {
    loop: false,
    cursor: '.',
    delay: 500
});

typewriter.typeString('...')
    .pauseFor(100)
    .start();