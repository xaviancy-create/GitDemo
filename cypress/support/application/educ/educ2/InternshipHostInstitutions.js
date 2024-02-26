import {lorem} from '../../../lorem';
class InternshipHostInstitutions{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };


    completeSection(){
        this.clickInternshipHostInstitutions();
        cy.xpath("(//textarea[@style='vertical-align:middle;'])[1]").type(lorem.generateSentences(1));
        cy.xpath("(//textarea[@style='vertical-align:middle;'])[2]").type(lorem.generateSentences(1));
        cy.xpath("(//textarea[@style='vertical-align:middle;'])[3]").type(lorem.generateSentences(1));
        this.clickSaveBtn();
    }
    clickSaveBtn(){
        cy.xpath("//button[@type='submit']").click();
    }
    clickInternshipHostInstitutions(){
        cy.xpath("//a[contains(text(),'Internship Host Institutions')]").click();
    }
}

export default InternshipHostInstitutions;
