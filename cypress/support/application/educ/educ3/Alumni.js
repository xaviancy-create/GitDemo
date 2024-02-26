import {lorem} from '../../../lorem';
class Alumni{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clickaluminiplanLink();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
        this.clickSave();

    }
    clickSave(){
        cy.xpath("//button[@type='submit']").click()
    }
    clickaluminiplanLink(){
        cy.xpath("//a[contains(text(),'Alumni Tracking Plan')]").click();
    }


}

export default Alumni;


