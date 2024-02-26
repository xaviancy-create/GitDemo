import {lorem} from '../../../lorem';
class InternshipPlacement{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clickInternshipPlacement();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
        this.clickSaveBtn();
    }
    clickInternshipPlacement(){
        cy.xpath("//a[contains(text(),'Trainee Selection and Internship Placement')]").click();
    }
    clickSaveBtn(){
        cy.xpath("//button[@type='submit']").click();
    }
}


export default InternshipPlacement;
