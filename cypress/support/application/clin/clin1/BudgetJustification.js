import {lorem} from '../../../lorem';
class BudgetJustification{

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };

completeSection(){
    this.clickBudgetJustificationLink();
    cy.withSelected([
        { xpath: "(//div[@class='fr-element fr-view'])[1]", options: this.typeOptions },
        { xpath: "(//div[@class='fr-element fr-view'])[2]", options: this.typeOptions },
        { xpath: "//textarea[@class='width-of-parent']", options: this.typeOptions },
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
