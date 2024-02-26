import {lorem} from '../../../lorem';

class Organizational {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };

    completeSection() {
       this.OrganizationalIntegrational();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ]);
        this.clickSaveBtn();

    }
    OrganizationalIntegrational(){
        cy.xpath("//a[contains(text(),'Organizational Integration Plan')]").click();
    }

    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }
}

export default Organizational;
