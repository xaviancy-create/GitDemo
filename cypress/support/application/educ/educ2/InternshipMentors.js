import {lorem} from '../../../lorem';
class InternshipMentors{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };

    completeSection(){
        this.clickInternshipMentors();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
        this.clickSaveBtn();
    }
    clickSaveBtn(){
        cy.xpath("//button[@type='submit']").click();
    }
    clickInternshipMentors(){
        cy.xpath("//a[contains(text(),'Internship Mentors')]").click();
    }
}

export default InternshipMentors;
