document.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("skills-img");
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("caption");
    const closeBtn = document.querySelector(".close");

    // Open modal on click
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    // Close modal
    closeBtn.onclick = function () {
        modal.style.display = "none";
    }

    // Zoom functionality inside modal
    let scale = 1;
    modalImg.onwheel = function (event) {
        event.preventDefault();
        if (event.deltaY < 0) {
            scale += 0.1;
        } else {
            scale -= 0.1;
        }
        if (scale < 1) scale = 1;
        modalImg.style.transform = `scale(${scale})`;
    };
});
