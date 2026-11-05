document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("certificateModal");
    const triggerLinks = document.querySelectorAll(".certificate-link");
    const closeBtn = document.querySelector(".close-btn");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const imageCounter = document.getElementById("imageCounter");

    let currentImages = [];
    let currentIndex = 0;

    function updateModalContent() {
        modalImage.src = currentImages[currentIndex];
        imageCounter.textContent = `Sertifikat ${currentIndex + 1} dari ${currentImages.length}`;
        
        if (currentImages.length <= 1) {
            prevBtn.style.display = "none";
            nextBtn.style.display = "none";	
            imageCounter.style.display = "none";
        } else {
            prevBtn.style.display = "block";
            nextBtn.style.display = "block";
            imageCounter.style.display = "block";
        }
    }

    triggerLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            modalTitle.textContent = this.getAttribute("data-title");
            
            const certsAttr = this.getAttribute("data-certificates");
            currentImages = certsAttr ? certsAttr.split(",").map(item => item.trim()) : [];
            currentIndex = 0;

            if (currentImages.length > 0) {
                updateModalContent();
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            }
        });
    });

    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % currentImages.length;
        updateModalContent();
    });

    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        updateModalContent();
    });

    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });

    window.addEventListener("click", function(e) {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const singleLinks = document.querySelectorAll(".single-link");
    if (singleLinks.length > 0) {
        singleLinks.forEach(link => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                const modal = document.getElementById("certificateModal");
                const modalImage = document.getElementById("modalImage");
                const modalTitle = document.getElementById("modalTitle");
                
                // Sembunyikan tombol slider karena ini hanya 1 foto
                document.getElementById("prevBtn").style.display = "none";
                document.getElementById("nextBtn").style.display = "none";
                document.getElementById("imageCounter").style.display = "none";

                modalTitle.textContent = this.getAttribute("data-title");
                modalImage.src = this.getAttribute("data-img");
                
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        });
    }
});