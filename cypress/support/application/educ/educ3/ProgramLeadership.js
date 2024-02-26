import {lorem} from '../../../lorem';
class ProgramLeadership{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clickleadershipadministrationLink();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
        this.clickSave();

    }
    clickSave(){
        cy.xpath("//button[@type='submit']").click()
    }
    clickleadershipadministrationLink(){
        cy.xpath("//a[contains(text(),'Program Leadership and Administration')]").click();
    }



}

export default ProgramLeadership;


