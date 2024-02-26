import {lorem} from '../../../lorem';

class InformationForReview{

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    clearSimilarResubmissionOptions = { clear: true };
    checkOptions = { check: true };

    completeSection() {
        cy.xpath("//a[text()='Information for Review']").click();
        cy.withSelected([
            { xpath: "//textarea", options: this.typeOptions },
            { get: "input[id^=review_previous_cirm_award_][id*=_previous_cirm_award_][id$=__no]", options: this.checkOptions},
            { get: "input[id^=substantially_similar_resubmission_][id*=__yes]", options: this.checkOptions},
            //{ get: "textarea[id^=substantially_similar_resubmission_][id*=_explain_substantially_similar_resubmission_]", options: this.clearSimilarResubmissionOptions },
        ]);
        cy.xpath('//button[@name="commit"]').click();
    }

}

export default InformationForReview;
