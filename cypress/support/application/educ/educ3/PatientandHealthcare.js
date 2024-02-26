import {lorem} from '../../../lorem';
class PatientandHealthcare{
    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    completeSection(){
        this.clickpatienthealthLink();
        cy.withSelected([
            { xpath: "//div[@class='fr-element fr-view']", options: this.typeOptions },
        ])
        this.clickSave();

    }
    clickSave(){
        cy.xpath("//button[@type='submit']").click()
    }
    clickpatienthealthLink(){
        cy.xpath("//a[contains(text(),'Patient and Healthcare Engagement Activities')]").click();
    }

}

export default PatientandHealthcare;


