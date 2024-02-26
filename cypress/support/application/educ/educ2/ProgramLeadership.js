import {lorem} from '../../../lorem';
class ProgramLeadership{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };

    completeSection(){
        this.clickProgramLeadership();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
        this.clickSaveBtn();
    }
    clickProgramLeadership(){
        cy.xpath("//a[contains(text(),'Program Leadership and Administration')]").click();
    }
    clickSaveBtn(){
        cy.xpath("//button[@type='submit']").click();
    }

}

export default ProgramLeadership;
