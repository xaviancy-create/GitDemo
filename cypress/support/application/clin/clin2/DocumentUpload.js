class DocumentUpload{

    pdfOptions = { selectFile: "cypress/fixtures/data/sample.pdf", force: true };
    excelOptions = { selectFile: "cypress/fixtures/data/SampleExcel.xlsx", force: true };

    completeSection() {
        cy.xpath("//a[text()='Document Uploads']").click();
        cy.withSelected([
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_proposal']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_enrollment_projection_graph']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_clinical_protocol']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_regulatory_correspondence']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_manufacturing_plan']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_investigator_brochure']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_data_sharing_and_management_plan_dsmp']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_biographical_sketches_for_key_personnel']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_letters_of_support']", options: this.pdfOptions, },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_pi_other_support']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_intellectual_property_plan']", options: this.pdfOptions},
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_activity_based_budget']", options: this.excelOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_quotes_and_other_budget_data']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_eligibility_data']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_licenses_and_material_transfer_agreements']", options: this.pdfOptions },
        ]);
    }
}

export default DocumentUpload;
