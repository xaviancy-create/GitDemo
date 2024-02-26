import {lorem} from '../../../lorem';

class AddressingUnderserved {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };

    completeSection() {
       this.AddressingUnderserved();
        cy.withSelected([
            { xpath: "(//div[@class='fr-element fr-view'])", options: this.typeOptions },
        ]);
        this.clickSaveBtn();

    }
    AddressingUnderserved(){
        cy.xpath("//a[contains(text(),'Addressing Underserved Communities')]").click();
    }

    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }
}

export default AddressingUnderserved;
