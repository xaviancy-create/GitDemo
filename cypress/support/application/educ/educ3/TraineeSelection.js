import {lorem} from '../../../lorem';
class TraineeSelection{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clicktraineeselectionLink();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
        this.clickSave();

    }
    clickSave(){
        cy.xpath("//button[@type='submit']").click()
    }
    clicktraineeselectionLink(){
        cy.xpath("//a[contains(text(),'Trainee Selection and Placement')]").click();
    }


}

export default TraineeSelection;
