import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

import { pdfjs } from 'react-pdf';
import { Button } from './button';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;


export default function PdfArq() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: {numPages:number}): void {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <Document
        file='/ficha-arq-1.pdf'
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} width={1000} renderTextLayer={false} renderAnnotationLayer={false}/>
      </Document>
      <div>
        <p>
          Página {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <Button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Anterior
        </Button>
        <Button
          type="button"
          disabled={pageNumber >= (numPages ?? 0)}
          onClick={nextPage}
        >
          Posterior
        </Button>
      </div>
    </>
  );
}