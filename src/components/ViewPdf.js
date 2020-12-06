import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf from "../resources/PiaResume.pdf";

const ViewPdf = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className="modal-content">
      <Document
        options={{ workerSrc: "pdf.worker.js" }}
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="buttons">
        <div>
          {pageNumber == 1 ? null : (
            <i
              onClick={() => {
                setPageNumber(pageNumber - 1);
              }}
              className="fas fa-arrow-left"
            ></i>
          )}
          Page
          <i
            onClick={() => {
              setPageNumber(pageNumber + 1);
            }}
            className="fas fa-arrow-right"
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ViewPdf;
