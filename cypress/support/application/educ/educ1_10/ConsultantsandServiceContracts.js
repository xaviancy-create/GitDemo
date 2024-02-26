import {lorem} from '../../../lorem';
class ConsultantsandServiceContract{

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    typeAmount = { type: function(options, index) { return "30000" } };
    typeContract = { type: function(options, index) { return "self" } };

    completeSection(){
        this.clickConsultantsandServiceContracts();
        this.clickAddConsultantorServiceContract();
        cy.withSelected([
            { xpath: "//input[@id='subcontract_entity_name']", options: this.typeContract },
            { xpath: "//input[@id='subcontract_contract_name']", options: this.typeContract },
        ]);
        this.fillNewConsultantorServiceContract();
        cy.withSelected([
            { get: "#subcontract_role_description", options: this.typeOptions },
        ]);
        this.clickSaveBtn();
        cy.withSelected([
            { xpath: "//input[@class='width-of-parent']", options: this.typeAmount },
        ]);
        this.clickSaveBtn();
}
    clickConsultantsandServiceContracts(){
        cy.xpath("//a[text()='Consultants and Service Contracts']").click()
    }
    clickAddConsultantorServiceContract(){
        cy.xpath("//a[text()='Add Consultant or Service Contract']").click()
    }
    fillNewConsultantorServiceContract(){
        cy.get("select").select("Consultant", {force:true});

    }
    clickSaveBtn(){
        cy.xpath("//button[@type='submit']").click();
    }
}
export default ConsultantsandServiceContract;
