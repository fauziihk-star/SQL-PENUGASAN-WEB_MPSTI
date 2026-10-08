// Kode JavaScript dasar sederhana
// Menampilkan pesan selamat datang di konsol browser
console.log("Website Kelompok IT Berhasil Dimuat.");

const certificateModal = document.querySelector("#certificate-modal");
const certificateModalImage = document.querySelector("#certificate-modal-image");
const certificateModalTitle = document.querySelector("#certificate-modal-title");
const modalCloseButton = document.querySelector(".modal-close");

document.querySelectorAll(".certificate-link").forEach((link) => {
	link.addEventListener("click", (event) => {
		event.preventDefault();
		certificateModalImage.src = link.href;
		certificateModalTitle.textContent = link.dataset.title;
		certificateModal.hidden = false;
		document.body.classList.add("modal-open");
		modalCloseButton.focus();
	});
});

function closeCertificateModal() {
	certificateModal.hidden = true;
	certificateModalImage.src = "";
	document.body.classList.remove("modal-open");
}

modalCloseButton.addEventListener("click", closeCertificateModal);
certificateModal.addEventListener("click", (event) => {
	if (event.target === certificateModal) {
		closeCertificateModal();
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && !certificateModal.hidden) {
		closeCertificateModal();
	}
});