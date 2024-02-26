import {lorem} from '../../../lorem';
class ProgramSummaryandProgramDesign{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };

    completeSection(){
        this.clickProgramSummary();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
this.clickSaveBtn();
    }
    clickProgramSummary(){
        cy.xpath("//a[contains(text(),'Program Summary and Overall Program Design')]").click();

    }
    clickSaveBtn(){
        cy.xpath("//button[@type='submit']").click();
    }
}

export default ProgramSummaryandProgramDesign;
