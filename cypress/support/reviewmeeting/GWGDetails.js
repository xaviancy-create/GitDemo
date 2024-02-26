import {lorem} from "../lorem";
class GWGDetails{
    checkOptions = { check: true };
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    typeScore = { type: function(options, index) { return "90" } };
    completeSection(){
        this.clickPersonalInstitutes();
        cy.withSelected([
            { get: "#certify_done", options: this.checkOptions },
        ])
        this.clicksave();
        this.clickFinancialDisclosure();
        cy.withSelected([
            { get: "#financial_disclosure_report_and_certification_certification", options: this.checkOptions },
        ])
        this.clicksave();
        this.clickEnterCritique();
        cy.withSelected([
            { xpath: "//textarea[@class='end-user-text']", options: this.typeOptions },
            { xpath: "//input[@type='radio'][@id='task_assignment_tier_3']", options: this.checkOptions},
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
        this.clickFinancialDisclosure();
        cy.withSelected([
            { get: "#financial_disclosure_report_and_certification_certification", options: this.checkOptions },
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

    clickPersonalInstitutes(){
        cy.xpath("//a[text()='Personnel & Institutional Conflicts']").click();
    }
    clicksave(){
        cy.xpath("//button[@type='submit']").click();
    }
    clickFinancialDisclosure(){
        cy.xpath("//a[text()='Financial Disclosure Report and Certification']").click();
    }
    clickEnterCritique(){
        cy.xpath("(//a[text()='Enter My Critique'])[1]").click();
    }
}

export default GWGDetails;
