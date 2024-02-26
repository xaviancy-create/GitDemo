import Progress from "../../../support/progressreporting/Progress"
import SemiAnnual from "../../../support/progressreporting/SemiAnnual"
import PIAOOSubmit from "../../../support/progressreporting/PIAOOSubmit"
import Grant from "../../../support/progressreporting/Grant"
import SemiAnnualChecklist from "../../../support/checklist/SemiAnnualChecklist"

const program = 'EDUC4';
describe ('EDUC4 Progress Reporting Process', function() {
    it ('EDUC4 Progress Reporting Creation', function() {

        cy.viewport(2000, 1320);
        // User Enters the GMS URL
        cy.gmsLoginFixture().then((data)=> {

        cy.login();
        new Grant().completeSection(program);
        cy.createReports(data.SemiAnnual, data.Checklist, data.Period, data.EndDate, data.StartDate);
        new Progress().completeSection(program);
        new Grant().clickGrantApplication();
        cy.popUser();
        cy.createReport(data.StandardSemiAnnual, data.Checklist, data.Period, data.EndDate, data.StartDate);
        new SemiAnnual().completeSection(program);
        new Grant().clickApplicationFinancial();
        cy.popUser();
        new PIAOOSubmit().clickreportSchedule();
        new Grant().clickChecklistEDUC(data.SOMail, data.Progress);
        new SemiAnnualChecklist().completeSOSection();
        cy.popUser();
        new Grant().clickChecklistEDUC(data.GMOMail, data.Progress);
        new SemiAnnualChecklist().completeGMOSection();
        cy.popUser();
        new Grant().checkChecklist();
        new Grant().clickChecklistEDUC(data.SOMail, data.SemiReport);
        new SemiAnnualChecklist().completeSOSection();
        cy.popUser();
        new Grant().clickChecklistEDUC(data.GMOMail, data.SemiReport);
        new SemiAnnualChecklist().completeGMOSection();
        cy.popUser();
        new Grant().checkChecklist();

        })
    })
})
