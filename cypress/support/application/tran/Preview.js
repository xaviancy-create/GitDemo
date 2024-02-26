import {lorem} from '../../lorem';

class InformationForReview{

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };

    completeSection() {
        cy.xpath("//a[text()='Preview']").click();
        cy.withSelected([
            { xpath: "//textarea", options: this.typeOptions },
            { get: "input[id^=review_area_of_impact_][id$=_eye_vision_disorders]", options: this.checkOptions },
            { get: "input[id^=review_bottlenecks_][id$=_diagnosing_a_condition_or_predisposition]", options: this.checkOptions },
            { get: "input[id^=review_approach_][id$=__diagnostic]", options: this.checkOptions },
            { get: "input[id^=review_approach_][id*=_cell_source_exposed_to_xenogeneic_materials_][id$=__not_applicable]", options: this.checkOptions },
            { get: "input[id^=review_approach_][id*=_stem_cell_basis_][id$=__human_embryonic_stem_cells]", options: this.checkOptions },
            { get: "input[id^=review_previous_cirm_award_][id*=_previous_cirm_award_][id$=__no]", options: this.checkOptions},
            { get: "input[id^=substantially_similar_resubmission_][id*=_substantially_similar_resubmission_radio_][id$=__no]", options: this.checkOptions},
        ]);
        cy.xpath('//button[@name="commit"]').click();
    }

}

export default InformationForReview;
