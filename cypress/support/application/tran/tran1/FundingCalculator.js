import {lorem} from '../../../lorem';

class FundingCalculator {

    typeOptions = { type: function(options, index) { return lorem.generateSentences(1); } };
    typeCost2= { type: function(options,index){ return "100"} };
    typeCost = { type: function(options, index) { return "200000" } };
    typeCost1 = { type: function(options, index) { return "2000" } };
    typeCost3 = { type: function(options, index) { return "1000" } };
    typePers = { type: function(options, index) { return "10" } };
    checkOptions = { check: true };

    completeSection() {
        this.clickFundingCalculatorLink();
        cy.withSelected([
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_total'])", options: this.typeCost},
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_total'])", options: this.typeCost},
            { xpath: "(//input[@id='3_pi_co_pi_direct_costs_total'])", options: this.typeCost},
            { xpath: "(//input[@id='1_pi_co_pi_excluded_equipment'])", options: this.typeCost1},
            { xpath: "(//input[@id='2_pi_co_pi_excluded_equipment'])", options: this.typeCost1},
            { xpath: "(//input[@id='3_pi_co_pi_excluded_equipment'])", options: this.typeCost1},
            { xpath: "(//input[@id='1_pi_co_pi_excluded_trainees'])", options: this.typeCost1},
            { xpath: "(//input[@id='2_pi_co_pi_excluded_trainees'])", options: this.typeCost1},
            { xpath: "(//input[@id='3_pi_co_pi_excluded_trainees'])", options: this.typeCost1},
            { xpath: "(//input[@id='1_pi_co_pi_ops_rate'])", options: this.typeCost2},
            { xpath: "(//input[@id='2_pi_co_pi_ops_rate'])", options: this.typeCost2},
            { xpath: "(//input[@id='3_pi_co_pi_ops_rate'])", options: this.typeCost2},
            { xpath: "(//input[@id='1_pi_co_pi_library_rate'])", options: this.typeCost2},
            { xpath: "(//input[@id='2_pi_co_pi_library_rate'])", options: this.typeCost2},
            { xpath: "(//input[@id='3_pi_co_pi_library_rate'])", options: this.typeCost2},
            { xpath: "//input[@id='cagegory_b_selection_2']", options: this.checkOptions},
            { xpath: "(//input[@id='1_pi_co_pi_lease_costs'])", options: this.typeCost3},
            { xpath: "(//input[@id='2_pi_co_pi_lease_costs'])", options: this.typeCost3},
            { xpath: "(//input[@id='3_pi_co_pi_lease_costs'])", options: this.typeCost3},
            { xpath: "(//input[@id='1_pi_co_pi_indirect_cost_rate'])", options: this.typePers},
            { xpath: "(//input[@id='2_pi_co_pi_indirect_cost_rate'])", options: this.typePers},
            { xpath: "(//input[@id='3_pi_co_pi_indirect_cost_rate'])", options: this.typePers},



        ])
        this.clickSaveBtn();


    }
    clickFundingCalculatorLink(){
        cy.xpath("//a[contains(text(),'CIRM Funds Calculator')]").click();
    }

    clickSaveBtn(){
        cy.xpath('//button[@name="commit"]').click();
    }


}

export default FundingCalculator;
