import {lorem} from '../../../lorem';
class Qualification{

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clickQualificationsLink();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']//p", options: this.typeOptions },

        ]);
        this.clickSaveBtn();
    }
    clickQualificationsLink(){
        cy.xpath("//a[text()='Qualifications of Organizers and Applicant Institution']").click();
    }
    enterQualificationApplicant(){
        cy.xpath("//div[@class='fr-element fr-view']//p").type("Test");
    }
    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }
}
export default Qualification;
