import {lorem} from '../../../lorem';

class AddValueForStemCell {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };

    completeSection() {
       this.AddValueForStemCell();
        cy.withSelected([
            { xpath: "(//div[@class='fr-element fr-view'])", options: this.typeOptions },
        ]);
        this.clickSaveBtn();
        this.AddValueForAlpha();
        cy.withSelected([
            { xpath: "(//div[@class='fr-element fr-view'])", options: this.typeOptions },
        ]);
        this.clickSaveBtn();
    }
    AddValueForStemCell(){
        cy.xpath("//a[contains(text(),'Add Value for Stem Cell and Gene Therapy Clinical ')]").click();
    }
    AddValueForAlpha(){
        cy.xpath("//a[contains(text(),'Add Value for the Alpha Network')]").click();
    }
    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }
}

export default AddValueForStemCell;
