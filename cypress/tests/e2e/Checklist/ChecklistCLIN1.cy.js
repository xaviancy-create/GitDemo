import Checklist from "../../../support/checklist/Checklist"
import ClinicalChecklist from "../../../support/checklist/ClinincalChecklist"
import FinancialChecklist from "../../../support/checklist/FinancialChecklist"

describe ('CLIN1 Progress Reporting Process', function() {
    it ('CLIN1 Progress Reporting Creation', function() {

        cy.viewport(2000, 1320);
        // User Enters the GMS URL
        cy.gmsLoginFixture().then((data)=> {

        cy.login();
        new Checklist().completeSection(data.SOMail);
        new ClinicalChecklist().ClickChecklist(data.Progress);
        new ClinicalChecklist().completeSOSection();
        cy.popUser();
        new Checklist().completeSection(data.GMOMail);
        new ClinicalChecklist().SelectApplication(data.Progress)
        new ClinicalChecklist().completeGMOSection();
        cy.popUser();
        new ClinicalChecklist().checkChecklist();
        new Checklist().completeSection(data.SOMail);
        new ClinicalChecklist().ClickChecklist(data.FinancialReport)
        new FinancialChecklist().completeSOSection();
        cy.popUser();
        new Checklist().completeSection(data.GMOMail);
        new ClinicalChecklist().SelectApplication(data.FinancialReport)
        new ClinicalChecklist().completeGMOSection();
        cy.popUser();
        new ClinicalChecklist().checkChecklist();
        new Checklist().completeSection(data.SOMail);
        new ClinicalChecklist().ClickChecklist(data.OperationalReport)
        new ClinicalChecklist().completeSOSection();
        cy.popUser();
        new Checklist().completeSection(data.GMOMail);
        new ClinicalChecklist().SelectApplication(data.OperationalReport)
        new ClinicalChecklist().completeGMOSection();
        cy.popUser();
        new ClinicalChecklist().checkChecklist();


        });
    });
});
