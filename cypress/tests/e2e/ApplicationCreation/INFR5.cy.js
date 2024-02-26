import Home from "../../../support/application/clin/clin1/HomePage"
import GrantApplication from "../../../support/application/GrantApplication"
import PublicInformation from "../../../support/application/PublicInformation"
import CoFunder from "../../../support/application/infr/infr5/CoFunder"
import FundingCalculator from "../../../support/application/infr/infr5/FundingCalculator"
import BudgetJustification from "../../../support/application/educ/educ5/BudgetJustification"
import DocumentUpload from "../../../support/application/infr/infr5/DocumentUpload"
import Eligibility from "../../../support/application/infr/infr4/Eligibility"
import ProjectTitle from "../../../support/application/infr/ProjectTitle"
import VerifyTheApplication from "../../../support/application/clin/clin1/VerifytheApplication"

const program_code = 'INFR5';

describe ('Infra5 Funding Process', function() {
    it ('Infra5 Funding opportunities', function() {
        cy.viewport(2000, 1320);
        // User Enters the GMS URL
        cy.gmsLoginFixture().then((data)=> {
            cy.login();
            cy.ensureProgramOpenForApplications(program_code);
            cy.pushUser(data.ApplicantUsername);

            const hp = new Home();
            hp.startApplication(program_code).then((application_number) => {

                new Eligibility().completeSection();
                new GrantApplication().completeSection({section_title: "PD and AOO", aoo_select_details: data.AooSelectDetails});
                new ProjectTitle().completeSection();
                new PublicInformation().completeSection();
                new CoFunder().completeSection();
                new FundingCalculator().completeSection();
                new BudgetJustification().completeSection();
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

