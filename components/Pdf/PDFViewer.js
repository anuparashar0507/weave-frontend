import { useState } from "react";
// import default react-pdf entry
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
import pdfFile from "../../assets/karen.pdf";
export default function PDFViewer({ file }) {
  // const [file, setFile] = useState("./karen.pdf");
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      <div>
        <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
