const cellElements = document.querySelectorAll("[data-cell]");

let isCircleTurn;

const handledClick = (e) => {
    //Colocar a marca (X ou Círculo)
    const cell = e;
    const classToAdd = isCircleTurn ? 'circle' : 'x';

    cell.classList.add(classToAdd);
    //Verificar por vitória
    //Verificar por embate
    //Mudar símbolo
};

for (const cell of cellElements) {
    cell.addEventListener("click", handledClick, { once: true });
}
