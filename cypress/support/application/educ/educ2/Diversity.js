import {lorem} from '../../../lorem';
class Diversity{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };

    completeSection(){
        this.clickDiversity();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
        this.clickSaveBtn();
    }
    clickSaveBtn(){
        cy.xpath("//button[@type='submit']").click();
    }
    clickDiversity(){
        cy.xpath("//a[contains(text(),'Diversity, Equity and Inclusion Plan')]").click();
    }
}

export default Diversity;
