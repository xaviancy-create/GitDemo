import Grant from "../../../support/progressreporting/Grant"
import Scientific from "../../../support/progressreporting/Scientific"
import Financial from "../../../support/progressreporting/Financial"
import Milestone from "../../../support/progressreporting/Milestone"
import FullProgress from "../../../support/progressreporting/FullProgress"
import PIAOOSubmit from "../../../support/progressreporting/PIAOOSubmit"


const program = 'CLIN1';

describe ('CLIN1 Progress Reporting Process', function() {
    it ('CLIN1 Progress Reporting Creation', function() {

        cy.viewport(2000, 1320);
        // User Enters the GMS URL
        cy.gmsLoginFixture().then((data)=> {

        cy.login();
        new Grant().completeSection(program);
        cy.createReports(data.ReportType, data.Checklist, data.Period, data.EndDate, data.StartDate);
        new Scientific().completeSection(program);
        new Grant().clickGrantApplication();
        cy.popUser();
        cy.createReport(data.Financial, data.Checklist, data.Period, data.EndDate, data.StartDate);
        new Financial().completeSection(program);
        new Grant().clickApplicationFinancial();
        cy.popUser();
        cy.createReport(data.Operational, data.Checklist, data.Period, data.EndDate, data.StartDate);
        new Milestone().completeSection(program);
        new Grant().clickGrantApplication();
        cy.popUser();
        new PIAOOSubmit().completeSection();
        new Grant().clickGrantApplicationAOO();
        cy.popUser();
        cy.createReport(data.FullProgress, data.Checklist, data.Period, data.EndDate, data.StartDate);
        new FullProgress().completeSection(program);
        new Grant().clickGrantApplication();
        cy.popUser();
        new PIAOOSubmit().completeSection();
        new Grant().clickGrantApplicationAOO();
        cy.popUser();
        new PIAOOSubmit().clickreportSchedule();

        })
    })
})
