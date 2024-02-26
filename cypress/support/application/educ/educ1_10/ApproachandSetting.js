import {lorem} from '../../../lorem';
class ApproachandSetting{

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clickApproachandSetting();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']//p", options: this.typeOptions },

        ]);
        this.clickSaveBtn();
    }
    clickApproachandSetting(){
        cy.xpath("//a[text()='Approach and Setting']").click();
    }

    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }
}
export default ApproachandSetting;
