import {lorem} from '../../../lorem';

class Reference {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };

    completeSection() {
       this.Reference();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ]);
        this.clickSaveBtn();

    }
    Reference(){
        cy.xpath("//a[contains(text(),'References')]").click();
    }

    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }
}

export default Reference;
