import {lorem} from '../../lorem';

class InformationForReview{

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };

    completeSection() {
        cy.xpath("//a[text()='Information for Review']").click();
        cy.withSelected([
            { xpath: "//textarea", options: this.typeOptions },
            { get: "input[id^=therapeutic_approach_][id*=_approach_][id$=__cell_therapy]", options: this.checkOptions },
            { get: "input[id^=therapeutic_approach_][id*=_cell_type_][id$=__human_embryonic_stem_cells]", options: this.checkOptions },
            { get: "input[id^=therapeutic_approach_][id*=_product_type_][id$=__autologous]", options: this.checkOptions },
            { get: "input[id^=therapeutic_approach_][id*=_approach_involve_][id$=_genetic_therapy]", options: this.checkOptions },
            { get: "input[id^=previous_cirm_award_][id*=_previous_cirm_award_][id$=__yes]", options: this.checkOptions},
        ]);
        cy.xpath('//button[@name="commit"]').click();
    }

}

export default InformationForReview;
