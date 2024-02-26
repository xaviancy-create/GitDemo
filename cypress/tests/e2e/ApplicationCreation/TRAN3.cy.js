import Home from "../../../support/application/clin/clin1/HomePage"
import Eligibility from "../../../support/application/tran/tran3/Eligibility"
import GrantApplication from "../../../support/application/GrantApplication"
import ProjectTitle from "../../../support/application/tran/ProjectTitle"
import Preview from "../../../support/application/tran/Preview"
import PublicInformation from "../../../support/application/PublicInformation"
import CoFunder from "../../../support/application/tran/tran1/CoFunder"
import BudgetJustification from "../../../support/application/tran/tran1/BudgetJustification"
import InstitutionalApprovalsOversight from "../../../support/application/InstitutionalApprovalsOversight"
import DocumentUpload from "../../../support/application/tran/DocumentUpload"
import VerifyTheApplication from "../../../support/application/clin/clin1/VerifytheApplication"
import FundingCalculator from "../../../support/application/tran/tran2/FundingCalculator"

const program_code = 'TRAN3';

describe ('Translational3 Funding Process', function() {
    it ('Translational3 Funding opportunities', function() {
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
                new Preview().completeSection();
                new PublicInformation().completeSection();
                new CoFunder().completeSection();
                new BudgetJustification().completeSection();
                new FundingCalculator().completeSection();
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
