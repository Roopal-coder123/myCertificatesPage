// function openLightbox(imgElement){
//     const lightbox = document.getElementById('lightbox');
//     const lightboxImg = document.getElementById('lightbox-img');
//     lightboxImg.src = imgElement.src;
//     lightbox.style.display = 'flex';
// }

// function closeLightbox() {
//     document.getElementById('lightbox').style.display = 'none';
// }

function openPdf(event, pdfUrl) {
    event.preventDefault(); // Prevent the default link behavior
    const modal = document.getElementById('pdf-modal');
    const pdfFrame = document.getElementById('pdf-frame');
    pdfFrame.src = pdfUrl; // Set the PDF file URL in the iframe
    modal.style.display = 'block'; // Show the modal
}

function closePdf() {
    const modal = document.getElementById('pdf-modal');
    const pdfFrame = document.getElementById('pdf-frame');
    pdfFrame.src = ''; // Clear the iframe source
    modal.style.display = 'none'; // Hide the modal
}