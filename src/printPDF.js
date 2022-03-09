import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function print(quality = 6) {
    const filename = "resumePDF.pdf";

    html2canvas(document.querySelector(".preview"),
                 {scale: quality}
                                    ).then(canvas => {
        let pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0,0,211,298);
        pdf.save(filename);
    })
}

export default print;