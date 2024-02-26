import Home from "../../../support/application/clin/clin1/HomePage"
import Eligibility from "../../../support/application/educ/educ5/Eligibility"
import GrantApplication from "../../../support/application/GrantApplication"
import DocumentUpload from "../../../support/application/educ/educ5/DocumentUpload"
import VerifyTheApplication from "../../../support/application/clin/clin1/VerifytheApplication"
import Budget from "../../../support/application/educ/educ5/Budget"
import BudgetJustification from "../../../support/application/infr/infr4/BudgetJustification"
import PublicInformation from "../../../support/application/PublicInformation"
import ProjectTitle from "../../../support/application/educ/ProjectTitle"

const program_code = 'EDUC5';

describe ('EDUC5 Funding Process', function() {
    it ('EDUC5 Funding opportunities', function() {

        cy.viewport(2000, 1320);
        // User Enters the GMS URL
        cy.gmsLoginFixture().then((data)=> {
            cy.login();
            cy.ensureProgramOpenForApplications(program_code);
            cy.pushUser(data.ApplicantUsername);

            const hp = new Home();
            hp.startApplication(program_code).then((application_number) => {

                new Eligibility().completeSection();
                new GrantApplication().completeSection({section_title: "Program Director and AOO", aoo_select_details: data.AooSelectDetails});
                new Budget().completeSection();
                new BudgetJustification().completeSection();
                new ProjectTitle().completeSection();
                new PublicInformation().completeSection();
                new DocumentUpload().completeSection();
                cy.submitDeliverable(application_number);
                cy.popUser();
                cy.pushUser(data.AooUsername);
                new VerifyTheApplication().AooSubmitApplication(application_number);
                cy.popUser();
                new VerifyTheApplication().verifyApplicationExists(application_number);

            })
        })
    })
})
