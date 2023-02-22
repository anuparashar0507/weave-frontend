// import { useState } from "react";
// // import default react-pdf entry
// import { Document, Page, pdfjs } from "react-pdf";
// // import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
// // import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
// import workerSrc from "../../pdf-worker";
// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// // import pdfFile from "../../assets/karen.pdf";
// export default function PDFViewer() {
//   pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
//   //   const [file, setFile] = useState("./karen.pdf");
//   const [numPages, setNumPages] = useState(null);

//   function onDocumentLoadSuccess({ numPages: nextNumPages }) {
//     setNumPages(nextNumPages);
//   }

//   return (
//     <div>
//       <div>
//         <Document file={"./karen.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
//           {Array.from({ length: numPages }, (_, index) => (
//             <Page
//               key={`page_${index + 1}`}
//               pageNumber={index + 1}
//               renderAnnotationLayer={false}
//               renderTextLayer={false}
//             />
//           ))}
//         </Document>
//       </div>
//     </div>
//   );
// }
