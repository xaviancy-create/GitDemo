
class FundCalculator{

    typeCost = { type: function(options, index) { return "1000" } };
    typeTotalCirmProjectCost = { type: function(options, index) { return "20000" } };
    typeProjectCost = { type: function(options, index) { return "5000" } };


    completeSection(){
        this.clickCIRMFundsCalculator();
        cy.withSelected([
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_total'])", options: this.typeTotalCirmProjectCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_total'])", options: this.typeProjectCost },
           { xpath: "(//input[@id='3_pi_co_pi_direct_costs_total'])", options: this.typeCost },
           { xpath: "(//input[@id='1_pi_co_pi_additional_budget_request'])", options: this.typeCost },
            { xpath: "(//input[@id='2_pi_co_pi_additional_budget_request'])", options: this.typeCost },
            { xpath: "(//input[@id='3_pi_co_pi_additional_budget_request'])", options: this.typeCost },
           { xpath: "//input[@id='1_pi_co_pi_excluded_equipment']", options: this.typeCost },
           { xpath: "//input[@id='2_pi_co_pi_excluded_equipment']", options: this.typeCost },
           { xpath: "//input[@id='3_pi_co_pi_excluded_equipment']", options: this.typeCost },
           { xpath: "//input[@id='1_pi_co_pi_excluded_trainees']", options: this.typeCost },
           { xpath: "//input[@id='2_pi_co_pi_excluded_trainees']", options: this.typeCost },
           { xpath: "//input[@id='3_pi_co_pi_excluded_trainees']", options: this.typeCost },
           { xpath: "//input[@id='1_pi_co_pi_ops_rate']", options: this.typeCost },
           { xpath: "//input[@id='2_pi_co_pi_ops_rate']", options: this.typeCost },
           { xpath: "//input[@id='3_pi_co_pi_ops_rate']", options: this.typeCost },
           { xpath: "//input[@id='1_pi_co_pi_library_rate']", options: this.typeCost },
           { xpath: "//input[@id='2_pi_co_pi_library_rate']", options: this.typeCost },
           { xpath: "//input[@id='3_pi_co_pi_library_rate']", options: this.typeCost },

       ]);
       this.clickSaveBtn();
    }

    clickCIRMFundsCalculator(){
        cy.xpath("//a[text()='CIRM Funds Calculator']").click()
    }

        clickSaveBtn(){
            cy.xpath("//button[@name='commit']").click();
        }

}

export default FundCalculator;
