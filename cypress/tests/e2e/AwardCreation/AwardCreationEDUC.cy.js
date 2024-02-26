import GrantApplications from "../../../support/awardcreation/GrantApplications"
import AwardGrants from "../../../support/awardcreation/AwardGrants"
import FillPIeduDetails from "../../../support/awardcreation/FillPIeduDetails"
import FillGMODetails from "../../../support/awardcreation/FillGMODetails"
import ProvisionJit from "../../../support/awardcreation/ProvisionJit"
import Pfars from "../../../support/awardcreation/Pfars"
import FillSODetails from "../../../support/awardcreation/FillSODetails"
import Detail from "../../../support/awardcreation/Detail"
import FillSOeduDetails from "../../../support/awardcreation/FillSOeduDetails"

const program = 'EDUC4 - Research Training Grant';
const Application = 'EDUC4-';

describe ('EDUC Award Process', function() {
    it ('EDUC Award Creation', function() {
        cy.viewport(2000, 1320);

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
        new FillPIeduDetails().completeSection();
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
        new FillSOeduDetails().completeSODetails();
        cy.popUser();
        new Pfars().completeSection();
        new GrantApplications().clicktheApplication();
        new Detail().completeSection();

       })
    })
})
