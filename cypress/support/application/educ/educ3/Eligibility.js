class Eligibility{
    checkOptions = { check: true };
    completeSection(){
        this.clickEligibilityLink();
        cy.withSelected([
            { xpath: "//input[@type='checkbox']", options: this.checkOptions },

     ]);
         this.clickSaveBtn();
     }

     clickEligibilityLink(){
         cy.xpath("//a[text()='Eligibility']").click();
     }
     clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
      }

}

export default Eligibility;
