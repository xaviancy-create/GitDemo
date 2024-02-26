class Progress{
    pdfOptions = { selectFile: "cypress/fixtures/data/sample.pdf", force: true };
    completeSection(program){
        this.clickStartandView();
        this.clickUploadDocuments();
        cy.withSelected([
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_scientific_progress_report']", options: this.pdfOptions },
        ])
        cy.xpath(`//a[contains(text(),'Grant: ${program}-')]`).click();
        this.clickDetails();
        this.clickPILogin();
        this.clickYourAwards();
    }



    clickDetails(){
        cy.xpath("//a[text()='Details']").click()
    }
    clickPILogin(){
        cy.xpath("(//a[@id='become_user_glyph'])[1]").click({force:true})
    }
    clickYourAwards(){
        cy.xpath("(//a[text()='Your Awards'])[2]").click()
    }

    clickStartandView(){
        cy.xpath("//div[@id='progress_reports']//table//tbody//tr//td[7]").each(($el,index) => {
            const storetext = $el.text();
            if(storetext.includes("Start")){
                    cy.xpath("//div[@id='progress_reports']//table//tbody//tr//td[7]").eq(index).contains("Start").click();
                    cy.wait(1000);
                    cy.xpath("//div[@id='progress_reports']//table//tbody//tr//td[7]").eq(index).contains("View").click();
                }
        })
    }
    clickUploadDocuments(){
        cy.xpath("//a[text()='Uploaded Documents']").click();
    }
}

export default Progress;
