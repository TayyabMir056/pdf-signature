import { Document, Page, pdfjs } from 'react-pdf';
import dummyPdf from '../assets/dummy.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs`;


function PdfViewer({ pdfFile }) {
  
  return (
    <Document file={pdfFile}>
      <Page pageNumber={1} />
    </Document>
  );
}

export default PdfViewer;