import {lorem} from '../../../lorem';
class StatementsofBenufits{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clickStatementsofBenufits();
        cy.withSelected([
            { xpath: "//textarea", options: this.typeOptions },
        ])
        this.clickSaveBtn();
    }
    clickStatementsofBenufits(){
        cy.xpath("//a[contains(text(),'Statement of Benefit to California')]").click();
    }
    clickSaveBtn(){
        cy.xpath("//button[@type='submit']").click();
    }

}
export default StatementsofBenufits;
