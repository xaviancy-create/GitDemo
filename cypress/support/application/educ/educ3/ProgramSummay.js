import {lorem} from '../../../lorem';
class ProgramSummary{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clicksummaryLink();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
        this.clickSave();

    }
    clicksummaryLink(){
        cy.xpath("//a[contains(text(),'Program Summary')]").click();
    }
    // typeprogramsummary(){
    //     cy.xpath("//div[@class='fr-element fr-view']").type("Test");
    // }
    clickSave(){
        cy.xpath("//button[@type='submit']").click()
    }

}

export default ProgramSummary;
