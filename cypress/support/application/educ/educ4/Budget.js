import {lorem} from '../../../lorem';
class Budget{
    typeCost = { type: function(options, index) { return "2000000" } };
    typeInitialCost = { type: function(options, index) { return "0" } };

    completeSection(){
        this.clickBudgetLink();
        cy.withSelected([
            { xpath: "(//input[@id='1_pi_co_pi_track_1_number_of_slots_requested'])", options: this.typeCost },
            { xpath: "(//input[@id='2_pi_co_pi_track_1_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_track_1_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_track_1_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_track_1_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_track_1_trainee_annual_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_track_1_trainee_annual_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_track_1_trainee_annual_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_track_1_trainee_annual_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_track_1_trainee_annual_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_track_1_trainee_annual_tuition_and_fees'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_track_1_trainee_annual_tuition_and_fees'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_track_1_trainee_annual_tuition_and_fees'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_track_1_trainee_annual_tuition_and_fees'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_track_1_trainee_annual_tuition_and_fees'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_track_1_trainee_annual_research_and_travel_funds'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_track_1_trainee_annual_research_and_travel_funds'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_track_1_trainee_annual_research_and_travel_funds'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_track_1_trainee_annual_research_and_travel_funds'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_track_1_trainee_annual_research_and_travel_funds'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_track_2_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_track_2_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_track_2_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_track_2_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_track_2_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_track_2_trainee_annual_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_track_2_trainee_annual_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_track_2_trainee_annual_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_track_2_trainee_annual_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_track_2_trainee_annual_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_track_2_trainee_annual_health_insurance'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_track_2_trainee_annual_health_insurance'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_track_2_trainee_annual_health_insurance'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_track_2_trainee_annual_health_insurance'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_track_2_trainee_annual_health_insurance'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_track_2_trainee_annual_research_and_travel_funds'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_track_2_trainee_annual_research_and_travel_funds'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_track_2_trainee_annual_research_and_travel_funds'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_track_2_trainee_annual_research_and_travel_funds'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_track_2_trainee_annual_research_and_travel_funds'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_track_3_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_track_3_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_track_3_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_track_3_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_track_3_number_of_slots_requested'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_track_3_trainee_annual_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_track_3_trainee_annual_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_track_3_trainee_annual_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_track_3_trainee_annual_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_track_3_trainee_annual_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_track_3_trainee_annual_health_insurance'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_track_3_trainee_annual_health_insurance'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_track_3_trainee_annual_health_insurance'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_track_3_trainee_annual_health_insurance'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_track_3_trainee_annual_health_insurance'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_track_3_trainee_annual_research_and_travel_funds'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_track_3_trainee_annual_research_and_travel_funds'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_track_3_trainee_annual_research_and_travel_funds'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_track_3_trainee_annual_research_and_travel_funds'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_track_3_trainee_annual_research_and_travel_funds'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_program_administration_program_director_salary'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_program_administration_program_director_salary'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_program_administration_program_director_salary'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_program_administration_program_director_salary'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_program_administration_program_director_salary'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_program_administration_key_personnel_salaries'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_program_administration_key_personnel_salaries'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_program_administration_key_personnel_salaries'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_program_administration_key_personnel_salaries'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_program_administration_key_personnel_salaries'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_program_administration_other'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_program_administration_other'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_program_administration_other'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_program_administration_other'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_program_administration_other'])", options: this.typeInitialCost },
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
