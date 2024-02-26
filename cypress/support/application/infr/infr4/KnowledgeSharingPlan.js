import {lorem} from '../../../lorem';

class KnowledgeSharingPlan {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    checkOptions = { check: true };

    completeSection() {
       this.KnowledgeSharing();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ]);
        this.clickSaveBtn();

    }
    KnowledgeSharing(){
        cy.xpath("//a[contains(text(),'Knowledge Sharing Plan')]").click();
    }

    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }
}

export default KnowledgeSharingPlan;
