class DocumentUpload{

    pdfOptions = { selectFile: "cypress/fixtures/data/sample.pdf", force: true };
    excelOptions = { selectFile: "cypress/fixtures/data/SampleExcel.xlsx", force: true };

    completeSection() {
        cy.xpath("//a[text()='Document Uploads']").click();
        cy.withSelected([
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_proposed_project_timeline']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_biographical_sketches_for_key_personnel']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_letters_of_support']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_medical_licenses']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_pd_other_support']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_licenses_and_material_transfer_agreements']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_quotes_and_other_budget_data']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_tables_and_figures_referenced_in_application_optional___see_below']", options: this.pdfOptions },



        ]);
    }
}

export default DocumentUpload;
