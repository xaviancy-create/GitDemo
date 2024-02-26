import {lorem} from '../../../lorem';

class ValueProposition {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };

    completeSection() {
       this.ValueProposition();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ]);
        this.clickSaveBtn();

    }
    ValueProposition(){
        cy.xpath("//a[contains(text(),'Value Proposition')]").click();
    }

    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }
}

export default ValueProposition;
