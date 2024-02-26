import {lorem} from '../../../lorem';
class AuxiliaryEducational{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clickauxiliaryLink();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
        this.clickSave();

    }
    clickSave(){
        cy.xpath("//button[@type='submit']").click()
    }
    clickauxiliaryLink(){
        cy.xpath("//a[contains(text(),'Auxiliary Educational Activities')]").click();
    }
    // typeauxiliaryeducational(){
    //     cy.xpath("//div[@class='fr-element fr-view']").type("Test");
    // }

}

export default AuxiliaryEducational;

