import {lorem} from '../../../lorem';

class Eligibility {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    typeTargetDateOptions = { type: function(options, index) { return "4/2023" } };
    checkOptions = { check: true };

    completeSection() {
        this.clickEligibilityLink();
        cy.withSelected([
            { xpath: "(//input[@type='checkbox'])", options: this.checkOptions},
            { xpath: "//input[@type='radio'][@value='stem_cells_are_a_necessary_component']", options: this.checkOptions },
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
