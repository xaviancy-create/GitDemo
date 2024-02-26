import {lorem} from '../../../lorem';
class CommunityOutreach{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clickCommunityOutreach();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
        this.clickSaveBtn();
    }

    clickCommunityOutreach(){
        cy.xpath("//a[contains(text(),'Community Outreach and Education Activities')]").click();
    }
    clickSaveBtn(){
        cy.xpath("//button[@type='submit']").click();
    }
}
export default CommunityOutreach;
