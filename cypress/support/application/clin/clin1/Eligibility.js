import {lorem} from '../../../lorem';

class Eligibility {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    typeTargetDateOptions = { type: function(options, index) { return "4/2023" } };
    checkOptions = { check: true };

    completeSection() {
        cy.xpath("//a[text()='Eligibility']").click();
        cy.withSelected([
            // this.selectReadinessCheckBox();
            { xpath: "(//input[@type='checkbox'])[1]", options: this.checkOptions },
            // this.selectApplicationType();
            { xpath: "//input[@value='ind']", options: this.checkOptions },
        ]);
        cy.xpath('//button[@name="commit"]').click();
        cy.withSelected([
            { xpath: "//input[@type='checkbox']", options: this.checkOptions },
            { xpath: "(//input[@type='radio'])[3]", options: this.checkOptions },
            { xpath: "//span[@class='end-user-text']", options: this.typeTargetDateOptions },
            { xpath: "(//input[@type='radio'])[7]", options: this.checkOptions },
            { xpath: "(//input[@type='radio'])[11]", options: this.checkOptions },
            { xpath: "(//input[@type='radio'])[13]", options: this.checkOptions },

        ]);
        cy.xpath('//button[@name="commit"]').click();
    }

}

export default Eligibility;
