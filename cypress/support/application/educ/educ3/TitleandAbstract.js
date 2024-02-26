import {lorem} from '../../../lorem';
class TitleandAbstract{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
completeSection(){
    this.clickpublicabstractlink();
    cy.withSelected([
        { xpath: "(//span[@class='end-user-text']//div//textarea)", options: this.typeOptions },
    ])
    this.clickSaveBtn();
}
clickpublicabstractlink(){
    cy.xpath("//a[contains(text(),'Public Abstract')]").click();
}
clickSaveBtn(){
    cy.xpath("//button[@type='submit']").click();
}
}

export default TitleandAbstract;
