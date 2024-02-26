import {lorem} from '../../../lorem';
class PriorProgramTrackRecord{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };


    completeSection(){
        this.clickPriorProgramTrackRecord();

        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
            {xpath: "(//input[@type='radio'])[1]", options: this.checkOptions}
        ])
        this.clickSaveBtn();
    }
    clickSaveBtn(){
        cy.xpath("//button[@type='submit']").click();
    }
    clickPriorProgramTrackRecord(){
        cy.xpath("//a[contains(text(),'Prior Program Track Record and Outcomes')]").click();
    }


}
export default PriorProgramTrackRecord;
