window.onload = () => {

    /* ----- */
    // this function starts the typewriter on the HOME page
    (function typeWriter() {
        const typewriter = new Typewriter('#typewriter', {
            loop: true,
        });

        typewriter.typeString('Digital Presence.')
            .pauseFor(500)
            .deleteAll()
            .typeString('Wed Design.')
            .pauseFor(500)
            .deleteChars(7)
            .typeString('<strong>Develop.<strong>')
            .pauseFor(500)
            .deleteAll()
            .typeString('Marketing.')
            .pauseFor(500)
            .deleteAll()
            .start();
    })();

}