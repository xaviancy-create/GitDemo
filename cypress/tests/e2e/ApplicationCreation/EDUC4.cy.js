import Home from "../../../support/application/clin/clin1/HomePage"
import GrantApplication from "../../../support/application/educ/GrantApplication"
import Eligibility from "../../../support/application/educ/educ3/Eligibility"
import Budget from "../../../support/application/educ/educ4/Budget"
import PublicInformation from "../../../support/application/PublicInformation"
import ProjectTitle from "../../../support/application/educ/ProjectTitle"
import DocumentUpload from "../../../support/application/educ/educ4/DocumentUpload"
import BudgetJustification from "../../../support/application/educ/educ1_10/BudgetJustification"
import VerifyTheApplication from "../../../support/application/clin/clin1/VerifytheApplication"


const program_code = 'EDUC4';

describe ('Educational 4 Funding Process', function() {
    it ('Educational 4 Funding opportunities', function() {
        cy.viewport(2000, 1320);
        // User Enters the GMS URL
        cy.gmsLoginFixture().then((data)=> {
            cy.login();
            cy.ensureProgramOpenForApplications(program_code);
            cy.pushUser(data.ApplicantUsername);

            const hp = new Home();
            hp.startApplication(program_code).then((application_number) => {

                new Eligibility().completeSection();
                new GrantApplication().completeSection({aoo_select_details: data.AooSelectDetails});
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
