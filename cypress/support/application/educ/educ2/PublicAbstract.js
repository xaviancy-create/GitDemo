import {lorem} from '../../../lorem';
class PublicAbstract{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };

    completeSection(){
        this.clickPublicAbstract();
        cy.withSelected([
            { xpath: "//textarea", options: this.typeOptions },
        ])
        this.clickSaveBtn();
    }
    clickPublicAbstract(){
        cy.xpath("//a[contains(text(),'Public Abstract')]").click();
    }
    clickSaveBtn(){
        cy.xpath("//button[@type='submit']").click();
    }
}
export default PublicAbstract;
