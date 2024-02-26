import GrantApplications from "../../../support/awardcreation/GrantApplications"
import AwardGrants from "../../../support/awardcreation/AwardGrants"
import FillPIDetails from "../../../support/awardcreation/FillPIDetails"
import FillGMODetails from "../../../support/awardcreation/FillGMODetails"
import ManageGrants from "../../../support/awardcreation/ManageGrants"
import ProvisionJit from "../../../support/awardcreation/ProvisionJit"
import Pfars from "../../../support/awardcreation/Pfars"
import FillSODetails from "../../../support/awardcreation/FillSODetails"
import AimandMilestones from "../../../support/awardcreation/AimandMilestones"
import Detail from "../../../support/awardcreation/Detail"
import Payee from "../../../support/awardcreation/Payee"

const program = 'CLIN1 - Late Stage Preclinical Projects';
const Application = 'CLIN1-';

describe ('CLIN Award Process', function() {
    it ('CLIN Award Creation', function() {
        cy.viewport(2000, 1320);
        // User Enters the GMS URL
        cy.gmsLoginFixture().then((data)=> {
        cy.login();
        new GrantApplications().completeSection(program,Application);
        new AwardGrants().completeSection(program);
        new GrantApplications().clickApplication();
        new ProvisionJit().completeSection();
        new GrantApplications().clickJit();
        new ProvisionJit().completeJits();
        new Pfars().completeSection();
        new GrantApplications().selectApplication();
        new FillPIDetails().completeSection();
        cy.popUser();
        new FillGMODetails().clickAOO();
        new GrantApplications().clickEditAOO();
        cy.popUser();
        new FillGMODetails().completeSection();
        new GrantApplications().userClickChecklist();
        new FillGMODetails().completeGMODetails();
        cy.popUser();
        new FillSODetails().completeSection();
        new GrantApplications().userClickChecklist();
        new FillSODetails().completeSODetails();
        cy.popUser();
        new Pfars().completeSection();
        new GrantApplications().clicktheApplication();
        new ManageGrants().completeSection();
        new GrantApplications().userClickEdit();
        new AimandMilestones().completeSection();
        new Detail().completeSection();
        new Payee().completeSection();

        })
    })
})
