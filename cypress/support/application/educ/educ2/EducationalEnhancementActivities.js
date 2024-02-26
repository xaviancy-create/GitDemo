import {lorem} from '../../../lorem';
class EducationalEnhancementActivities{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clickEducationalEnhancementActivities();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
        this.clickSaveBtn();
    }
    clickEducationalEnhancementActivities(){
        cy.xpath("//a[contains(text(),'Educational Enhancement Activities')]").click();
    }
    clickSaveBtn(){
        cy.xpath("//button[@type='submit']").click();
    }
}

export default EducationalEnhancementActivities;
