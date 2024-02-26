import {lorem} from '../../../lorem';
class EngagementActivities{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clickEngagementActivities();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
        this.clickSaveBtn();
    }
    clickEngagementActivities(){
        cy.xpath("//a[contains(text(),'Patient and Healthcare Engagement Activities')]").click();
    }
    clickSaveBtn(){
        cy.xpath("//button[@type='submit']").click();
    }
}

export default EngagementActivities;
