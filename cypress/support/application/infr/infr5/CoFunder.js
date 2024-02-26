import {lorem} from '../../../lorem';

class CoFunder {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    typeCost = { type: function(options, index) { return "1600000" } };



    completeSection() {
       this.clickCoFunderLink();
       this.selectAddcofunderbutton();
        cy.withSelected([
            { xpath: "//*[@id='cofunder_name']", options: this.typeOptions },
        ]);
        this.clickSaveBtn();
        cy.withSelected([
            { xpath: "(//*[@type='text'])[1]", options: this.typeCost },
            { xpath: "(//*[@type='text'])[2]", options: this.typeCost },
        ]);
        this.clickSaveBtn();

    }
    clickCoFunderLink(){
        cy.xpath("//a[text()='Co-funders']").click();
    }
    selectAddcofunderbutton(){
        cy.xpath("//a[text()='Add Co-funder']").click();
    }
    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }
}

export default CoFunder;
