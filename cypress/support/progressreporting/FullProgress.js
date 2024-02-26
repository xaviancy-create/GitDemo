import {lorem} from '../lorem';
class FullProgress{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    typeScore = { type: function(options, index) { return "75" } };
    typeDate = { type: function(options, index) { return "Oct 2024" } };
    typeAmount = { type: function(options, index) { return "10000" } };
    checkOptions = { check: true };
    selectOption= { select: function(options, index) {return select["Active"]} };
    pdfOptions = { selectFile: "cypress/fixtures/data/sample.pdf", force: true };
    completeSection(program){
        this.clickStartandView();
        this.clickBudgetInfo();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']//p", options: this.typeOptions },
            { get: "textarea[id^='ca_supplier_percent_group_'][id*='_ca_supplier_percent_']", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickPDandAOO();
        this.clickEdit();
        cy.withSelected([
            { get: "input[id='key_person_percent_effort_reporting_period']", options: this.typeScore },
        ])
        this.clickSave();
        this.clickProjectManager();
        cy.withSelected([
            { get: "textarea[id^='pm_name_']", options: this.typeOptions },
            { get: "textarea[id^='pm_percent_effort_']", options: this.typeScore },
            { get: "textarea[id^='pm_comments_']", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickChangeinPersonnel();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']//p", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickInstitutionalApprovals();
        cy.withSelected([
            { get: "input[type='radio'][id^='policy_compliance_group_'][id*='_iacuc_compliance_certified_'][id$='__yes']", options: this.checkOptions },
            { get: "input[type='radio'][id^='policy_compliance_group_'][id*='_irb_compliance_certified_'][id$='__yes']", options: this.checkOptions },
            { get: "input[type='radio'][id^='policy_compliance_group_'][id*='_scro_compliance_certified_'][id$='__yes']", options: this.checkOptions },
            { xpath: "//div[@class='fr-element fr-view']//p", options: this.typeOptions },
        ])
        this.clickSave();
        this.clickDisclosableEvents();
        cy.withSelected([
            { get: "input[type='radio'][id^='ip_disclosure_'][id*='__yes']", options: this.checkOptions },
            { get: "input[type='radio'][id^='new_publications_'][id*='__yes']", options: this.checkOptions },
        ])
        this.clickSave();
        this.clickScientificProgress();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']//p", options: this.typeOptions },
        ])
        this.selectMilestoneStatus();
        this.MilestoneDate();
        this.clickSave();
        this.clickOutcomeSurvey();
        cy.withSelected([
            { get: "input[type='checkbox'][id^='stem_cells_previously_used_'][id*='_types_'][id$='_human_embryonic']", options: this.checkOptions },
            { get: "input[type='checkbox'][id^='stem_cells_used_'][id*='_types_'][id$='_human_embryonic']", options: this.checkOptions },
            { get: "input[type='checkbox'][id^='hesc_lines_used_'][id*='_lines_'][id$='_bg01']", options: this.checkOptions },
            { get: "input[type='radio'][id^='collaboration_'][id*='_collaboration_yes_no_'][id$='__no']", options: this.checkOptions },
            { get: "input[type='radio'][id^='funding_yes_no_'][id*='__yes']", options: this.checkOptions },
            { get: "textarea[id^='funding_'][id*='_funding_start_date_']", options: this.typeDate },
            { get: "textarea[id^='funding_'][id*='_funding_amount_']", options: this.typeAmount },
            { get: "textarea[id^='funding_'][id*='_funder_name_']", options: this.typeOptions },
            { get: "textarea[id^='funding_'][id*='_funding_duration_']", options: this.typeScore },
            { get: "textarea[id^='funding_'][id*='_funding_objective_']", options: this.typeOptions },
            { get: "textarea[id^='filing_detail_'][id*='_filing_number_']", options: this.typeScore },
            { get: "textarea[id^='filing_detail_'][id*='_filing_title_']", options: this.typeOptions },
            { get: "textarea[id^='filing_detail_'][id*='_filing_sponsor_']", options: this.typeOptions },
            { get: "textarea[id^='filing_detail_'][id*='_filing_number_']", options: this.typeOptions },
            { get: "textarea[id^='positions_'][id*='_position_title_']", options: this.typeOptions },
            { get: "textarea[id^='positions_'][id*='_position_organization_']", options: this.typeOptions },
            { get: "textarea[id^='outreach_']", options: this.typeOptions },
            { get: "textarea[id^='feedback_']", options: this.typeOptions },
            { get: "textarea[id^='benefit_']", options: this.typeOptions },
            { get: "input[type='checkbox'][id^='funding_'][id*='_funding_type_'][id$='_grant']", options: this.checkOptions },
            { get: "input[type='radio'][id^='filing_yes_no_'][id*='__no']", options: this.checkOptions },
            { get: "input[type='radio'][id^='ongoing_research_'][id*='__not_at_all']", options: this.checkOptions },
            { get: "input[type='radio'][id^='company_'][id*='_company_yes_no_'][id$='__no']", options: this.checkOptions },
            { get: "input[type='radio'][id^='focus_'][id*='_focus_yes_no_'][id$='__no']", options: this.checkOptions },
            { get: "input[type='radio'][id^='reagent_'][id*='_reagent_yes_no_'][id$='__no']", options: this.checkOptions },
            { get: "input[type='radio'][id^='positions_yes_no_'][id*='__yes']", options: this.checkOptions },
            { get: "input[type='checkbox'][id^='shared_labs_used_'][id*='_buck_institute_for_age_research']", options: this.checkOptions },
            { get: "input[type='checkbox'][id^='cirm_facilities_used_'][id*='_buck_institute_for_age_research']", options: this.checkOptions },
            ])
        cy.get("select[id^='funding_'][id*='_funding_status_'][id$='__']").each(($select) => {
            cy.wrap($select).select("Active");
          });
        cy.get("select[id^='filing_detail_'][id*='_filing_status_'][id$='__']").each(($select) => {
            cy.wrap($select).select("Active");
          });
        this.clickSave();
        this.clickUploadDocuments();
        cy.withSelected([
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_pi_other_support']", options: this.pdfOptions },
            { xpath: "//input[@type='file'][@data-test-id='doc_file_input_supporting_documents']", options: this.pdfOptions },
        ])
        cy.xpath(`//a[contains(text(),'Grant: ${program}-')]`).click();
        this.clickDetails();
        this.clickPILogin();
        this.clickYourAwards();
    }

    clickDetails(){
        cy.xpath("//a[text()='Details']").click()
    }
    clickPILogin(){
        cy.xpath("(//a[@id='become_user_glyph'])[1]").click({force:true})
    }
    clickYourAwards(){
        cy.xpath("(//a[text()='Your Awards'])[2]").click()
    }
    clickStartandView(){
        cy.xpath("//div[@id='progress_reports']//table//tbody//tr//td[7]").each(($el,index) => {
            const storetext = $el.text();
            if(storetext.includes("Start")){
                cy.xpath("//div[@id='progress_reports']//table//tbody//tr//td[7]").eq(index).contains("Start").click();
                cy.wait(1000);
                cy.xpath("//div[@id='progress_reports']//table//tbody//tr//td[7]").eq(index).contains("View").click();
            }
    })
}
clickBudgetInfo(){
    cy.xpath("//a[text()='Budget Info']").click()
}
clickSave(){
    cy.xpath("//button[@type='submit']").click()
}
clickPDandAOO(){
    cy.xpath("//a[text()='PD and AOO']").click()
}
clickEdit(){
    cy.xpath("(//a[text()='Edit'])[1]").click()
}
fillPIperiod(){
    cy.get("key_person_percent_effort_reporting_period").type("75")
}
clickProjectManager(){
    cy.xpath("//a[text()='Project Manager']").click()
}
clickChangeinPersonnel(){
    cy.xpath("//a[text()='Changes in Personnel']").click();
}
clickInstitutionalApprovals(){
    cy.xpath("//a[text()='Institutional Approvals']").click();
}
clickDisclosableEvents(){
    cy.xpath("//a[text()='Disclosable Events']").click()
}
clickScientificProgress(){
    cy.xpath("//a[text()='Scientific Progress']").click();
}
selectMilestoneStatus(){
    cy.xpath("(//select[@class='status_selector'])[1]").select("In Progress")
    cy.xpath("(//select[@class='status_selector'])[2]").select("In Progress")
}
MilestoneDate(){
    cy.xpath("(//select[contains(@id, 'estimated_completion_date_2i')])[1]").select("Oct")
    cy.xpath("(//select[contains(@id, 'estimated_completion_date_2i')])[2]").select("Nov")
    cy.xpath("(//select[contains(@id, 'estimated_completion_date_1i')])[1]").select("2024")
    cy.xpath("(//select[contains(@id, 'estimated_completion_date_1i')])[2]").select("2024")
}
clickOutcomeSurvey(){
    cy.xpath("//a[text()='Outcomes Survey']").click();
}
clickUploadDocuments(){
    cy.xpath("//a[text()='Uploaded Documents']").click();
}

}

export default FullProgress;
