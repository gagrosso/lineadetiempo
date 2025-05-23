document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            // Cierra todos los detalles abiertos, excepto el actual si ya está abierto
            timelineItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Abre o cierra el detalle del elemento clickeado
            item.classList.toggle('active');
        });
    });
});