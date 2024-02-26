import {lorem} from '../../../lorem';
class PositiveSelectionPreview{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };

    completeSection(){
        this.clickpositiveselectionpreview();
        cy.withSelected([
             // this.typeTextField();
             { xpath: "//span[@class='end-user-text']", options: this.typeOptions },

        ]);
        this.clickSaveBtn();
    }
    clickpositiveselectionpreview(){
        cy.xpath("//a[text()='Positive Selection Preview']").click();
    }
    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
      }

}

export default PositiveSelectionPreview;
