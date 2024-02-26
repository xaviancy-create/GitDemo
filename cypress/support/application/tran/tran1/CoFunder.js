import {lorem} from '../../../lorem';

class CoFunder {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    typeCoFunder= { type: function(options,index){ return "self"} };
    typeYears = { type: function(options, index) { return "2000" } };
    checkOptions = { check: true };

    completeSection() {
        this.clickCoFunderLink();
        this.selectAddcofunderbutton();
        cy.withSelected([
            { xpath: "//*[@id='cofunder_name']", options: this.typeCoFunder},
        ]);
        this.clickSaveBtn();
        cy.withSelected([
            { xpath: "//input[@class='width-of-parent']", options: this.typeYears },
        ])
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
