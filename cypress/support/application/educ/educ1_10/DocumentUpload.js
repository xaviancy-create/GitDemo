class DocumentUpload{

    pdfOptions = { selectFile: "cypress/fixtures/data/sample.pdf", force: true };
    excelOptions = { selectFile: "cypress/fixtures/data/SampleExcel.xlsx", force: true };

    completeSection() {
        cy.xpath("//a[text()='Document Uploads']").click();
        cy.withSelected([
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_agenda']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_supporting_documentation']", options: this.pdfOptions },


        ]);
    }
}
export default DocumentUpload;
