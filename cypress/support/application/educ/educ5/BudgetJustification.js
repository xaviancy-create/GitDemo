import {lorem} from '../../../lorem';
class BudgetJustification{

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };

completeSection(){
    this.clickBudgetJustificationLink();
    cy.withSelected([
        { xpath: "(//div[@class='fr-element fr-view'])", options: this.typeOptions },
        { xpath: "//span[@class='end-user-text']//div//textarea", options: this.typeOptions },

    ]);
    this.clickSaveBtn();
}
clickBudgetJustificationLink(){
    cy.xpath("//a[text()='Budget Justification']").click();
}

    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }

}
export default BudgetJustification;
