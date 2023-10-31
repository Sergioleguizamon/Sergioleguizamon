document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const images = carousel.querySelector(".images");
    const prevButton = carousel.querySelector(".prev");
    const nextButton = carousel.querySelector(".next");

    let currentIndex = 0;
    const totalImages = images.children.length;
    const imageWidth = images.children[0].offsetWidth;

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    });

    function updateCarousel() {
        const translateX = -currentIndex * imageWidth;
        images.style.transform = `translateX(${translateX}px)`;
    }
});
