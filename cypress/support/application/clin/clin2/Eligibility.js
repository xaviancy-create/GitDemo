import {lorem} from '../../../lorem';

class Eligibility {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    typeFilingDateOptions = { type: function(options, index) { return "04/05/2025" } };
    typeFilingNumberOptions = { type: function(options, index) { return "1234567890" } };
    typeSampleSizeOptions = { type: function(options, index) { return "2551" } };
    checkOptions = { check: true };

    completeSection() {
        cy.xpath("//a[text()='Eligibility']").click();
        cy.withSelected([
            { get: "input[type='checkbox'][id^=readiness_to_initiate_work_][id$=_applicant_certifies]", options: this.checkOptions },
            { get: "input[type='radio'][id^=fda_application_type_][id$=__ind]", options: this.checkOptions },
        ]);
        cy.xpath('//button[@name="commit"]').click();
        cy.withSelected([
            { get: "input[type='radio'][id^=single_ind_][id*=_type_][id$=__cell_therapy_stem_or_progenitor_cells_compose_the_therapy_or_are_used_to_manufacture]", options: this.checkOptions },
            { get: "input[type='checkbox'][id^=regulatory_approval_ind_][id*=_active_ind_][id$=_active_ind]", options: this.checkOptions },
            { get: "textarea[id^=regulatory_approval_ind_][id*=_ind_filing_date_]", options: this.typeFilingDateOptions },
            { get: "textarea[id^=regulatory_approval_ind_][id*=_ind_number_]", options: this.typeFilingNumberOptions },
            { get: "input[type='checkbox'][id^=regulatory_approval_ind_][id*=_clinical_protocol_submitted_to_CIRM_and_described_is_the_latest_version_that_will_be_used_][id$=_have_phase_1_safety_data_supporting_progression_to_phase_2]", options: this.checkOptions },
            { get: "input[type='radio'][id^=regulatory_approval_ind_][id*=_clinical_trial_phase_][id$=__phase_2]", options: this.checkOptions },
            { get: "input[type='radio'][id^=regulatory_approval_ind_][id*=_have_phase_2_communication_from_fda_indicating_product_registration_][id$=__yes]", options: this.checkOptions },
            { get: "input[type='checkbox'][id^=regulatory_approval_ind_][id*=_have_phase_1_safety_data_supporting_progression_to_phase_2_][id$=_have_phase_1_safety_data_supporting_progression_to_phase_2]", options: this.checkOptions },
            { get: "textarea[id^=regulatory_approval_ind_][id*=_phase_1_primary_objective_]", options: this.typeOptions },
            { get: "textarea[id^=regulatory_approval_ind_][id*=_phase_1_primary_safety_endpoint_assessment_]", options: this.typeOptions },
            { get: "textarea[id^=regulatory_approval_ind_][id*=_phase_1_planned_sample_size_]", options: this.typeSampleSizeOptions },
            { get: "textarea[id^=regulatory_approval_ind_][id*=_phase_1_number_of_subjects_treated_and_assessed_for_the_primary_safety_endpoint_]", options: this.typeSampleSizeOptions },
            { get: "input[type='radio'][id^=must_include_a_project_manager_][id*=_certification_][id$=__include_project_manager_to_devote_at_least_50_percent_effort]", options: this.checkOptions },
            { get: "textarea[id^=must_include_a_project_manager_][id*=_project_manager_name_]", options: this.typeOptions },
            { get: "input[type='checkbox'][id^=cofunding_requirement_][id$=_applicant_certifies]", options: this.checkOptions },
            { get: "input[type='checkbox'][id^=clinical_trial_sites_in_california_][id*=_certification_][id$=_applicant_acknowledges]", options: this.checkOptions },
            { get: "textarea[id^=clinical_trial_sites_in_california_][id*=_justification_for_inclusion_of_sites_located_outside_the_state_]", options: this.typeOptions },
            { get: "input[type='radio'][id^=organizational_eligibility_][id*=_meets_california_organization_requirement_][id$=__california_organziation]", options: this.checkOptions },
            { get: "input[type='checkbox'][id^=organizational_eligibility_][id*=_non_profit_in_good_standing_][id$=_applicant_certifies]", options: this.checkOptions },
            { get: "input[type='checkbox'][id^=organizational_eligibility_][id*=_non_profit_in_good_standing_2_][id$=_applicant_certifies]", options: this.checkOptions },
            { get: "input[type='checkbox'][id^=pi_eligibility_][id$=_applicant_certifies]", options: this.checkOptions },
            { get: "input[type='checkbox'][id^=ind_ide_sponsor_eligibility_][id$=_applicant_certifies]", options: this.checkOptions },
            { get: "input[type='checkbox'][id^=application_accurate_and_complete_][id$=_applicant_certifies]", options: this.checkOptions },
       ]);
        cy.xpath('//button[@name="commit"]').click();
    }

}

export default Eligibility;
