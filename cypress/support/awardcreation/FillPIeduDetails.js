import {lorem} from '../lorem';
class FillPIeduDetails{
    checkOptions = { check: true };
    typeOptions = { type: function(options, index) { return lorem.generateWords(1); } };
    pdfOptions = { selectFile: "cypress/fixtures/data/sample.pdf", force: true };
    completeSection(){
        this.clickRequestedAwardStartDate();
        cy.get("#jit_requested_start_date").select("Mar 1, 2024");
        this.clickSave();
        this.clickOrganizationalOfficials();
        cy.fixture('GMSLogin.json').then((fixtureData) => {
            cy.get("#faoo_contact_id").select(fixtureData.FaooDetails);
        })
        this.clickSave();
        this.clickCIRMPublicPolicyRequirements();
        cy.withSelected([
            { get: 'input[type="radio"][id^="jit_iacuc_group_"][id*="_jit_iacuc_required_"][id$="__yes"]', options: this.checkOptions },
            { get: 'input[type="radio"][id^="jit_iacuc_group_"][id*="_jit_iacuc_certified_"][id$="__yes"]', options: this.checkOptions },
            { get: 'input[type="radio"][id^="jit_scro_group_"][id*="_jit_scro_required_"][id$="__yes"]', options: this.checkOptions },
            { get: 'input[type="radio"][id^="jit_scro_group_"][id*="_jit_scro_certified_"][id$="__yes"]', options: this.checkOptions },
            { get: 'input[type="radio"][id^="jit_irb_group_"][id*="_jit_irb_required_"][id$="__yes"]', options: this.checkOptions },
            { get: 'input[type="radio"][id^="jit_irb_group_"][id*="_jit_irb_certified_"][id$="__yes"]', options: this.checkOptions },
            { get: 'input[type="radio"][id^="jit_fetal_tissue_group_"][id*="_jit_fetal_tissue_used_"][id$="__yes"]', options: this.checkOptions },
            { get: 'input[type="radio"][id^="jit_fetal_tissue_group_"][id*="_jit_fetal_tissue_certified_"][id$="__yes"]', options: this.checkOptions },
            { get: 'input[type="radio"][id^="jit_ip_policy_awareness_"][id$="__yes"]', options: this.checkOptions },
            { xpath: '//span[@class="end-user-text"]', options: this.typeOptions },
        ])
        this.clickSave();
        this.clickFacilitiesandAdministrativeCosts();
        cy.withSelected([
            { get: 'input[type="radio"][id^="have_major_facility_"][id$="__yes"]', options: this.checkOptions },
            { get: 'input[type="radio"][id^="hhmi_statement_"][id$="__yes"]', options: this.checkOptions },
            { get: 'input[type="checkbox"][id^="major_facilities_certification_"][id$="_major_facilities_certification"]', options: this.checkOptions },
            { xpath: '//span[@class="end-user-text"]', options: this.typeOptions },
        ])
        this.clickSave();
        this.clickOrganizationalEligibility();
        cy.withSelected([
            { get: 'input[type="radio"][id^="ca_non_ca_group_"][id*="_ca_non_ca_org_"][id$="__ca"]', options: this.checkOptions },
            { xpath: '//span[@class="end-user-text"]', options: this.typeOptions },
        ])
        this.clickSave();
        cy.xpath("//a[text()='Uploaded Documents']").click();
        cy.withSelected([
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_pi_other_support']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_co_funding_confirmation_if_applicable']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_additional_uploads']", options: this.pdfOptions },
        ])
        cy.xpath("//input[@type='submit'][@value='Submit Pre-Award JIT']").click();
    }




    clickRequestedAwardStartDate(){
        cy.xpath("//a[text()='Requested Award Start Date']").click();
    }
    clickSave(){
        cy.xpath("//button[@type='submit']").click();
    }
    clickOrganizationalOfficials(){
        cy.xpath("//a[text()='Organizational Officials']").click();
    }
    clickCIRMPublicPolicyRequirements(){
        cy.xpath("//a[text()='CIRM Public Policy Requirements']").click();
    }
    clickFacilitiesandAdministrativeCosts(){
        cy.xpath("//a[text()='Facilities and Administrative Costs']").click();
    }
    clickOrganizationalEligibility(){
        cy.xpath("//a[text()='Organizational Eligibility']").click();
    }


}

export default FillPIeduDetails;
