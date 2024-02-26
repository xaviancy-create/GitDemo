class DocumentUpload{

    pdfOptions = { selectFile: "cypress/fixtures/data/sample.pdf", force: true };
    excelOptions = { selectFile: "cypress/fixtures/data/SampleExcel.xlsx", force: true };

    completeSection() {
        cy.xpath("//a[text()='Document Uploads']").click();
        cy.withSelected([
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_proposal_figures']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_biographical_sketch_for_program_director']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_trainee_outcomes_table']", options: this.excelOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_institutional_letter_of_commitment']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_letters_of_collaboration']", options: this.pdfOptions },


        ]);
    }
}

export default DocumentUpload;
