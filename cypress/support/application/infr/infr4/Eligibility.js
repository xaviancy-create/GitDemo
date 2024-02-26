import {lorem} from '../../../lorem';

class Eligibility {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };

    completeSection() {
       this.clickEligibilityLink();
        cy.withSelected([
            // this.selectReadinessCheckBox();
            { xpath: "(//input[@type='checkbox'])", options: this.checkOptions },
            { xpath: "(//span[@class='end-user-text'])", options: this.typeOptions },

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
