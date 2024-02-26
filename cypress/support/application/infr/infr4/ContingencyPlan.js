import {lorem} from '../../../lorem';

class ContingencyPlan {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };

    completeSection() {
       this.Contingency();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ]);
        this.clickSaveBtn();

    }
    Contingency(){
        cy.xpath("//a[contains(text(),'Contingency Plan')]").click();
    }

    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }
}

export default ContingencyPlan;
