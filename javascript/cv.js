
// var maxPdfWidth = 700;

window.addEventListener('load', function() {
    const pdfObject = document.querySelector('.cvpdf');
    const updateHeight = () => {
        var width = pdfObject.clientWidth;
        // if (width >= maxPdfWidth) {
        //    width = maxPdfHeight;
        // }

       
        pdfObject.style.height = `${width * 1.413}px`; //Replace with your desired multiplier
    };
    updateHeight(); //Set height on load
    window.addEventListener('resize', updateHeight); //Update height on resize
}); 