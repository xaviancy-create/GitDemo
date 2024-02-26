import Home from "../../../support/application/clin/clin1/HomePage"
import Eligibility from "../../../support/application/clin/clin2/Eligibility"
import GrantApplication from "../../../support/application/GrantApplication"
import ProjectTitle from "../../../support/application/clin/ProjectTitle"
import InformationForReview from "../../../support/application/clin/InformationForReview"
import PublicInformation from "../../../support/application/PublicInformation"
import CoFunder from "../../../support/application/clin/clin1/CoFunder"
import FundingCalculator from "../../../support/application/clin/clin1/FundingCalculator"
import BudgetJustification from "../../../support/application/clin/clin1/BudgetJustification"
import InstitutionalApprovalsOversight from "../../../support/application/InstitutionalApprovalsOversight"
import DocumentUpload from "../../../support/application/clin/clin2/DocumentUpload"
import VerifyTheApplication from "../../../support/application/clin/clin1/VerifytheApplication"

const program_code = 'CLIN2';

describe ('Clinical2 Funding Process', function() {
    it ('Clinical2 Funding opportunities', function() {
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
                new ProjectTitle().completeSection();
                new InformationForReview().completeSection();
                new PublicInformation().completeSection();
                new CoFunder().completeSection();
                new FundingCalculator().completeSection();
                new BudgetJustification().completeSection();
                new InstitutionalApprovalsOversight().completeSection();
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
