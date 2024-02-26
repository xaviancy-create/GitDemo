import {lorem} from '../../../lorem';

class Eligibility {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    typeTargetDateOptions = { type: function(options, index) { return "4/2023" } };
    checkOptions = { check: true };

    completeSection() {
        this.clickEligibilityLink();
        cy.withSelected([
            { xpath: "(//input[@type='checkbox'])", options: this.checkOptions},
            { xpath: "//input[@type='radio'][@value='cell_therapy_stem_or_progenitor_cells_compose_the_therapy']", options: this.checkOptions },
            { xpath: "//input[@type='radio'][@value='not_minimally_manipulated']", options: this.checkOptions },
            { xpath: "//input[@type='radio'][@value='modifies_a_stem_cell_therapy_for_a_rare_or_unmet_need']", options: this.checkOptions },
            { xpath: "//input[@type='radio'][@value='cells_meet_the_donor_eligibility_requirements']", options: this.checkOptions },
            { xpath: "//span[@class='end-user-text']", options: this.typeOptions },
        ]);
        this.clickSaveBtn();
    }
    clickEligibilityLink(){
        cy.xpath("//a[text()='Eligibility']").click();
    }
    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }

}

export default Eligibility;
