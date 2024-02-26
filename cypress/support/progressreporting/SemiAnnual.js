class SemiAnnual{
    typeAmount = { type: function(options, index) { return "10000" } };

completeSection(program){
    this.clickStartandView();
    this.clickQuarterlyFinancialSummary();
    cy.withSelected([
        { get: "#1_cirm_funding_to_date", options: this.typeAmount },
        { get: "#1_cirm_cumulative_total_expenditure", options: this.typeAmount },
        { get: "#1_grantee_cofunding_total_expenditure", options: this.typeAmount },
        { get: "#1_grantee_contingency_total_expenditure", options: this.typeAmount },
    ]);
    this.clickSave();
    cy.xpath(`//a[contains(text(),'Grant: ${program}-')]`).click();
    this.clickDetails();
    this.clickFAOO();
    this.clickFinancialAOO();
}
clickDetails(){
    cy.xpath("//a[text()='Details']").click()
}
clickFAOO(){
    cy.xpath("(//a[@id='become_user_glyph'])[3]").click({force:true});
}
clickFinancialAOO(){
    cy.xpath("//a[text()='Financial AOO']").click();
}
clickQuarterlyFinancialSummary(){
    cy.xpath("//a[text()='Quarterly Financial Summary']").click();
}
clickStartandView(){
        cy.xpath("//div[@id='progress_reports']//table//tbody//tr//td[7]").each(($el,index) => {
                const storetext = $el.text();
                if(storetext.includes("Start")){
                    cy.xpath("//div[@id='progress_reports']//table//tbody//tr//td[7]").eq(index).contains("Start").click();
                    cy.wait(3000);
                    cy.xpath("//div[@id='progress_reports']//table//tbody//tr//td[7]").eq(index).contains("View").click();
                }
        })
    }
    clickSave(){
        cy.xpath("//button[@type='submit']").click()
    }
}

export default SemiAnnual;
