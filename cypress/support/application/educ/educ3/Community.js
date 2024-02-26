import {lorem} from '../../../lorem';
class Community{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clickcommunityLink();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
        this.clickSave();

    }
    clickSave(){
        cy.xpath("//button[@type='submit']").click()
    }
    clickcommunityLink(){
        cy.xpath("//a[contains(text(),'Community Outreach and Education Activities')]").click();
    }

}

export default Community;


