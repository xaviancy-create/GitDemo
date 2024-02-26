import {lorem} from '../../../lorem';
class TraineeAssessment{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clickTraineeAssessment();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
        this.clickSaveBtn();
    }
    clickTraineeAssessment(){
        cy.xpath("//a[contains(text(),'Mentoring, Advising, and Trainee Assessment')]").click();
    }
    clickSaveBtn(){
        cy.xpath("//button[@type='submit']").click();
    }
}

export default TraineeAssessment;
