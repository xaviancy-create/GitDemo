import {lorem} from '../../../lorem';
class AdvancedCell{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clickAdvancedCell();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
        this.clickSaveBtn();
    }
    clickAdvancedCell(){
        cy.xpath("//a[contains(text(),'Advanced Cell Culture Techniques Course')]").click();
    }
    clickSaveBtn(){
        cy.xpath("//button[@type='submit']").click();
    }
}

export default AdvancedCell;
