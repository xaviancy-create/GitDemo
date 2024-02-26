import {lorem} from '../../../lorem';

class ConSubSer {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    typeYears = { type: function(options, index) { return "5000" } };
    checkOptions = { check: true };

    completeSection() {
        this.ConSubSer();
        this.Addsubcontranct();
        cy.withSelected([
            { xpath: "//input[@id='subcontract_entity_name']", options: this.typeOptions},
            { xpath: "//input[@id='subcontract_contract_name']", options: this.typeOptions },
        ])
        this.selectdropdown();
        cy.withSelected([
            { xpath: "//textarea[@class='width-of-parent']", options: this.typeOptions },
        ])
        this.Savebutton();
        cy.withSelected([
            { xpath: "(//input[@class='width-of-parent'])", options: this.typeYears },

        ]);
        this.Savebutton();
    }
    ConSubSer(){
        cy.xpath("//a[contains(text(),'Consultants / Subcontracts / Service Contracts')]").click();
    }
    Addsubcontranct(){
        cy.xpath("//a[contains(text(),'Add Subcontract')]").click();
    }
    selectdropdown(){
        cy.get("select").select("Consultant", {force:true});
    }
    Savebutton(){
        cy.xpath("//button[contains(text(),'Save')]").click();
    }


}

export default ConSubSer;
