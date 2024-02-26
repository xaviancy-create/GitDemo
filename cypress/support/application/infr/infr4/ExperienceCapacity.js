import {lorem} from '../../../lorem';

class ExperienceCapacity {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };

    completeSection() {
       this.Experience();
        cy.withSelected([
            { xpath: "(//div[@class='fr-element fr-view'])", options: this.typeOptions },
        ]);
        this.clickSaveBtn();

    }
    Experience(){
        cy.xpath("//a[contains(text(),'Organizational Experience, Capacity, and Resources')]").click();
    }

    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }
}

export default ExperienceCapacity;
