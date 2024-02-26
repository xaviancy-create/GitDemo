class FundingCalculator{

    typeCost = { type: function(options, index) { return "0" } };
    typeTotalCirmProjectCost = { type: function(options, index) { return "2000000" } };


completeSection(){
    this.clickFundCalculatorLink();
    cy.withSelected([

         // this.typeTotalCirmProjectCost();
         { xpath: "(//input[@id='1_pi_co_pi_direct_costs_total'])", options: this.typeTotalCirmProjectCost },
         // this.typeRequestedEquipCost();
         { xpath: "(//input[@id='1_pi_co_pi_excluded_equipment'])", options: this.typeCost },
          // this.typeResearhpatientCost();
        { xpath: "(//input[@id='1_pi_co_pi_excluded_patient_care_costs'])", options: this.typeCost },
        // this.typeTraineeAnnualFeeCost();
        { xpath: "(//input[@id='1_pi_co_pi_excluded_trainees'])", options: this.typeCost },
         // this.typeMaintananceExpenses();
         { xpath: "(//input[@id='1_pi_co_pi_ops_rate'])", options: this.typeCost },
         // this.typeRateforLibExpense();
         { xpath: "(//input[@id='1_pi_co_pi_library_rate'])", options: this.typeCost },
          // this.typeIndirectCostRate();
        { xpath: "//input[@id='1_pi_co_pi_indirect_cost_rate']", options: this.typeCost },

    ]);
    this.clickSaveBtn();
}


    clickFundCalculatorLink(){
    cy.xpath("//a[text()='Funds Calculator']").click();
}
    clickSaveBtn(){
        cy.xpath("//button[@name='commit']").click();
    }
}
export default FundingCalculator;
