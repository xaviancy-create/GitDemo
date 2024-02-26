class CoFunder{


    typeOrganisationName = { type: function(options, index) { return "self" } };
    enterCoFundingAmount = { type: function(options, index) { return "1600000" } };
    checkOptions = { check: true };


    completeSection(){
        this.clickCoFunderLink();
        this.selectAddcofunderbutton();
        cy.withSelected([
            // this.typeOrganisationName();
            { xpath: "//*[@id='cofunder_name']", options: this.typeOrganisationName }
        ]);
        this.clickSaveBtn();
        cy.withSelected([
            // this.enterCoFundingAmount();
            { xpath: "//input[@class='width-of-parent']", options: this.enterCoFundingAmount }
        ]);
        this.clickSaveBtn();
    }

    clickCoFunderLink(){
        cy.xpath("//a[text()='Co-funders']").click();
    }

    selectAddcofunderbutton(){
        cy.xpath("//a[text()='Add Co-funder']").click();
    }

    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }


}
export default CoFunder;
