import {lorem} from "../lorem";
class GWGBoard{
    checkOptions = { check: true };
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    typeScore = { type: function(options, index) { return "9" } };
    completeSection(){
        this.clickPersonalInstitutes();
        cy.withSelected([
            { get: "#certify_done", options: this.checkOptions },
        ])
        this.clicksave();
        this.clickEnterCritique();
        cy.withSelected([
            { xpath: "//textarea[@class='end-user-text']", options: this.typeOptions },
            { xpath: "//input[@class='end-user-text']", options: this.typeScore},
            { get: "#task_assignment_scores_locked", options: this.checkOptions},
        ])
        this.clicksave();

    }
    completeSectionforDISC(){
        this.clickPersonalInstitutes();
        cy.withSelected([
            { get: "#certify_done", options: this.checkOptions },
        ])
        this.clicksave();
        this.clickEnterCritique();
        cy.withSelected([
            { xpath: "//textarea[@class='end-user-text']", options: this.typeOptions },
        ])
        this.clicksave();

    }
    clickPersonalInstitutes(){
        cy.xpath("//a[text()='Personnel & Institutional Conflicts']").click();
    }
    clicksave(){
        cy.xpath("//button[@type='submit']").click();
    }
    clickEnterCritique(){
        cy.xpath("(//a[text()='Enter My Critique'])[1]").click();
    }

}

export default GWGBoard;
