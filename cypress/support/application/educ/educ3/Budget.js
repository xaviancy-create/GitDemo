import {lorem} from '../../../lorem';
class Budget{
    typeCost = { type: function(options, index) { return "2000000" } };
    typeInitialCost = { type: function(options, index) { return "0" } };

    completeSection(){
        this.clickBudgetLink();
        cy.withSelected([
            { xpath: "(//input[@id='1_pi_co_pi_number_of_slots_requested'])", options: this.typeCost },
            { xpath: "(//input[@id='2_pi_co_pi_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_trainee_summer_stipend'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_trainee_summer_stipend'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_trainee_summer_stipend'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_trainee_summer_stipend'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_trainee_summer_stipend'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_trainee_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_trainee_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_trainee_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_trainee_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_trainee_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_per_trainee_program_administration_costs'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_per_trainee_program_administration_costs'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_per_trainee_program_administration_costs'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_per_trainee_program_administration_costs'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_per_trainee_program_administration_costs'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_indirect_cost_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_indirect_cost_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_indirect_cost_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_indirect_cost_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_indirect_cost_rate'])", options: this.typeInitialCost },
        ])
        this.clickSave();
        }
    clickBudgetLink(){
        cy.xpath("//a[text()='Budget']").click()
    }

    clickSave(){
        cy.xpath("//button[@type='submit']").click()
    }
}

export default Budget;
