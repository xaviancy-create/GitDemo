import {lorem} from '../../../lorem';
class PriorProgram{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clickpriorprogramLink();
        cy.withSelected([
            { xpath: "(//div[@class='fr-element fr-view'])", options: this.typeOptions },
        ])
        this.clickSave();

    }
    clickSave(){
        cy.xpath("//button[@type='submit']").click()
    }
    clickpriorprogramLink(){
        cy.xpath("//a[contains(text(),'Prior Program Track Record and Outcomes')]").click();
    }
    // typetraineeoutcome(){
    //     cy.xpath("(//div[@class='fr-element fr-view'])[1]").type("Test");
    // }
    // typetraineerecruitment(){
    //     cy.xpath("(//div[@class='fr-element fr-view'])[2]").type("Test");
    // }
    // typeplanforimprovement(){
    //     cy.xpath("(//div[@class='fr-element fr-view'])[3]").type("Test");
    // }



}

export default PriorProgram;


