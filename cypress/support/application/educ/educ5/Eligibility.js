import {lorem} from '../../../lorem';

class Eligibility {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    typeTargetDateOptions = { type: function(options, index) { return "4/2023" } };
    checkOptions = { check: true };

    completeSection() {
        this.clickEligibilityLink();
        cy.withSelected([
            { xpath: "(//input[@type='checkbox'])", options: this.checkOptions },
            { xpath: "(//input[@type='radio'])[1]", options: this.checkOptions },
            { xpath: "(//span[@class='end-user-text'])", options: this.typeOptions },
        ]);
        this.clickSave();
    }
        clickEligibilityLink(){
            cy.xpath("//a[text()='Eligibility']").click();
        }
        clickSave(){
            cy.xpath('//button[@name="commit"]').click();
        }

    }



export default Eligibility;
