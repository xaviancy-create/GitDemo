class Budget{
    typeCost2 = { type: function(options, index) { return "2" } };
    typeCost6 = { type: function(options, index) { return "6" } };
    typeCost1 = { type: function(options, index) { return "10" } };
    typeTotalCirmProjectCost = { type: function(options, index) { return "20000" } };
    typeProjectCost = { type: function(options, index) { return "6500" } };
    typeProject1Cost = { type: function(options, index) { return "2500" } };
    typeProject2Cost = { type: function(options, index) { return "7000" } };
    typeProject3Cost = { type: function(options, index) { return "3000" } };
    typeProject4Cost = { type: function(options, index) { return "1000" } };


    completeSection(){
        this.clickBudgetLink();
        cy.withSelected([
            { xpath: "(//input[@id='1_pi_co_pi_track_1_number_of_slots_requested'])", options: this.typeCost2 },
            { xpath: "(//input[@id='2_pi_co_pi_track_1_number_of_slots_requested'])", options: this.typeCost2 },
           { xpath: "(//input[@id='3_pi_co_pi_track_1_number_of_slots_requested'])", options: this.typeCost2 },
           { xpath: "(//input[@id='4_pi_co_pi_track_1_number_of_slots_requested'])", options: this.typeCost2 },
            { xpath: "(//input[@id='5_pi_co_pi_track_1_number_of_slots_requested'])", options: this.typeCost2 },
            { xpath: "(//input[@id='1_pi_co_pi_track_1_length_of_internship_in_months'])", options: this.typeCost6 },
           { xpath: "//input[@id='2_pi_co_pi_track_1_length_of_internship_in_months']", options: this.typeCost6 },
           { xpath: "//input[@id='3_pi_co_pi_track_1_length_of_internship_in_months']", options: this.typeCost6 },
           { xpath: "//input[@id='4_pi_co_pi_track_1_length_of_internship_in_months']", options: this.typeCost6 },
           { xpath: "//input[@id='5_pi_co_pi_track_1_length_of_internship_in_months']", options: this.typeCost6 },
           { xpath: "//input[@id='1_pi_co_pi_track_1_trainee_monthly_stipends']", options: this.typeProject1Cost },
           { xpath: "//input[@id='2_pi_co_pi_track_1_trainee_monthly_stipends']", options: this.typeProject1Cost },
           { xpath: "//input[@id='3_pi_co_pi_track_1_trainee_monthly_stipends']", options: this.typeProject1Cost },
           { xpath: "//input[@id='4_pi_co_pi_track_1_trainee_monthly_stipends']", options: this.typeProject1Cost },
           { xpath: "//input[@id='5_pi_co_pi_track_1_trainee_monthly_stipends']", options: this.typeProject1Cost },
           { xpath: "//input[@id='1_pi_co_pi_track_1_trainee_annual_tuition_and_fees']", options: this.typeProject2Cost },
           { xpath: "//input[@id='2_pi_co_pi_track_1_trainee_annual_tuition_and_fees']", options: this.typeProject2Cost },
           { xpath: "//input[@id='3_pi_co_pi_track_1_trainee_annual_tuition_and_fees']", options: this.typeProject2Cost },
           { xpath: "//input[@id='4_pi_co_pi_track_1_trainee_annual_tuition_and_fees']", options: this.typeProject2Cost },
           { xpath: "//input[@id='5_pi_co_pi_track_1_trainee_annual_tuition_and_fees']", options: this.typeProject2Cost },
           { xpath: "//input[@id='1_pi_co_pi_track_1_trainee_annual_research_related_funds']", options: this.typeProject3Cost },
           { xpath: "//input[@id='2_pi_co_pi_track_1_trainee_annual_research_related_funds']", options: this.typeProject3Cost },
           { xpath: "//input[@id='3_pi_co_pi_track_1_trainee_annual_research_related_funds']", options: this.typeProject3Cost },
           { xpath: "//input[@id='4_pi_co_pi_track_1_trainee_annual_research_related_funds']", options: this.typeProject3Cost },
           { xpath: "//input[@id='5_pi_co_pi_track_1_trainee_annual_research_related_funds']", options: this.typeProject3Cost },
           { xpath: "//input[@id='1_pi_co_pi_track_1_trainee_annual_training_course_fees']", options: this.typeProject3Cost },
           { xpath: "//input[@id='2_pi_co_pi_track_1_trainee_annual_training_course_fees']", options: this.typeProject3Cost },
           { xpath: "//input[@id='3_pi_co_pi_track_1_trainee_annual_training_course_fees']", options: this.typeProject3Cost },
           { xpath: "//input[@id='4_pi_co_pi_track_1_trainee_annual_training_course_fees']", options: this.typeProject3Cost },
           { xpath: "//input[@id='5_pi_co_pi_track_1_trainee_annual_training_course_fees']", options: this.typeProject3Cost },
           { xpath: "//input[@id='1_pi_co_pi_track_1_trainee_travel']", options: this.typeProject4Cost },
           { xpath: "//input[@id='2_pi_co_pi_track_1_trainee_travel']", options: this.typeProject4Cost },
           { xpath: "//input[@id='3_pi_co_pi_track_1_trainee_travel']", options: this.typeProject4Cost },
           { xpath: "//input[@id='4_pi_co_pi_track_1_trainee_travel']", options: this.typeProject4Cost },
           { xpath: "//input[@id='5_pi_co_pi_track_1_trainee_travel']", options: this.typeProject4Cost },
           { xpath: "//input[@id='1_pi_co_pi_track_2_number_of_slots_requested']", options: this.typeCost2 },
           { xpath: "//input[@id='2_pi_co_pi_track_2_number_of_slots_requested']", options: this.typeCost2 },
           { xpath: "//input[@id='3_pi_co_pi_track_2_number_of_slots_requested']", options: this.typeCost2 },
           { xpath: "//input[@id='4_pi_co_pi_track_2_number_of_slots_requested']", options: this.typeCost2 },
           { xpath: "//input[@id='5_pi_co_pi_track_2_number_of_slots_requested']", options: this.typeCost2 },
           { xpath: "//input[@id='1_pi_co_pi_track_2_length_of_internship_in_months']", options: this.typeCost6 },
           { xpath: "//input[@id='2_pi_co_pi_track_2_length_of_internship_in_months']", options: this.typeCost6 },
           { xpath: "//input[@id='3_pi_co_pi_track_2_length_of_internship_in_months']", options: this.typeCost6 },
           { xpath: "//input[@id='4_pi_co_pi_track_2_length_of_internship_in_months']", options: this.typeCost6 },
           { xpath: "//input[@id='5_pi_co_pi_track_2_length_of_internship_in_months']", options: this.typeCost6 },
           { xpath: "//input[@id='1_pi_co_pi_track_2_trainee_monthly_stipends']", options: this.typeProject1Cost },
           { xpath: "//input[@id='2_pi_co_pi_track_2_trainee_monthly_stipends']", options: this.typeProject1Cost },
           { xpath: "//input[@id='3_pi_co_pi_track_2_trainee_monthly_stipends']", options: this.typeProject1Cost },
           { xpath: "//input[@id='4_pi_co_pi_track_2_trainee_monthly_stipends']", options: this.typeProject1Cost },
           { xpath: "//input[@id='5_pi_co_pi_track_2_trainee_monthly_stipends']", options: this.typeProject1Cost },
           { xpath: "//input[@id='1_pi_co_pi_track_2_trainee_annual_tuition_and_fees']", options: this.typeProject2Cost },
           { xpath: "//input[@id='2_pi_co_pi_track_2_trainee_annual_tuition_and_fees']", options: this.typeProject2Cost },
           { xpath: "//input[@id='3_pi_co_pi_track_2_trainee_annual_tuition_and_fees']", options: this.typeProject2Cost },
           { xpath: "//input[@id='4_pi_co_pi_track_2_trainee_annual_tuition_and_fees']", options: this.typeProject2Cost },
           { xpath: "//input[@id='5_pi_co_pi_track_2_trainee_annual_tuition_and_fees']", options: this.typeProject2Cost },
           { xpath: "//input[@id='1_pi_co_pi_track_2_trainee_annual_research_related_funds']", options: this.typeProject3Cost },
           { xpath: "//input[@id='2_pi_co_pi_track_2_trainee_annual_research_related_funds']", options: this.typeProject3Cost },
           { xpath: "//input[@id='3_pi_co_pi_track_2_trainee_annual_research_related_funds']", options: this.typeProject3Cost },
           { xpath: "//input[@id='4_pi_co_pi_track_2_trainee_annual_research_related_funds']", options: this.typeProject3Cost },
           { xpath: "//input[@id='5_pi_co_pi_track_2_trainee_annual_research_related_funds']", options: this.typeProject3Cost },
           { xpath: "//input[@id='1_pi_co_pi_track_2_trainee_annual_training_course_fees']", options: this.typeProject3Cost },
           { xpath: "//input[@id='2_pi_co_pi_track_2_trainee_annual_training_course_fees']", options: this.typeProject3Cost },
           { xpath: "//input[@id='3_pi_co_pi_track_2_trainee_annual_training_course_fees']", options: this.typeProject3Cost },
           { xpath: "//input[@id='4_pi_co_pi_track_2_trainee_annual_training_course_fees']", options: this.typeProject3Cost },
           { xpath: "//input[@id='5_pi_co_pi_track_2_trainee_annual_training_course_fees']", options: this.typeProject3Cost },
           { xpath: "//input[@id='1_pi_co_pi_track_2_trainee_travel']", options: this.typeProject4Cost },
           { xpath: "//input[@id='2_pi_co_pi_track_2_trainee_travel']", options: this.typeProject4Cost },
           { xpath: "//input[@id='3_pi_co_pi_track_2_trainee_travel']", options: this.typeProject4Cost },
           { xpath: "//input[@id='4_pi_co_pi_track_2_trainee_travel']", options: this.typeProject4Cost },
           { xpath: "//input[@id='5_pi_co_pi_track_2_trainee_travel']", options: this.typeProject4Cost },
           { xpath: "//input[@id='1_pi_co_pi_program_administration_program_director_salary']", options: this.typeTotalCirmProjectCost },
           { xpath: "//input[@id='2_pi_co_pi_program_administration_program_director_salary']", options: this.typeTotalCirmProjectCost },
           { xpath: "//input[@id='3_pi_co_pi_program_administration_program_director_salary']", options: this.typeTotalCirmProjectCost },
           { xpath: "//input[@id='4_pi_co_pi_program_administration_program_director_salary']", options: this.typeTotalCirmProjectCost },
           { xpath: "//input[@id='5_pi_co_pi_program_administration_program_director_salary']", options: this.typeTotalCirmProjectCost },
           { xpath: "//input[@id='1_pi_co_pi_program_administration_faculty_advisor_salaries']", options: this.typeProjectCost },
           { xpath: "//input[@id='2_pi_co_pi_program_administration_faculty_advisor_salaries']", options: this.typeProjectCost },
           { xpath: "//input[@id='3_pi_co_pi_program_administration_faculty_advisor_salaries']", options: this.typeProjectCost },
           { xpath: "//input[@id='4_pi_co_pi_program_administration_faculty_advisor_salaries']", options: this.typeProjectCost },
           { xpath: "//input[@id='5_pi_co_pi_program_administration_faculty_advisor_salaries']", options: this.typeProjectCost },
           { xpath: "//input[@id='1_pi_co_pi_program_administration_key_personnel_salaries']", options: this.typeCost1 },
           { xpath: "//input[@id='2_pi_co_pi_program_administration_key_personnel_salaries']", options: this.typeCost1 },
           { xpath: "//input[@id='3_pi_co_pi_program_administration_key_personnel_salaries']", options: this.typeCost1 },
           { xpath: "//input[@id='4_pi_co_pi_program_administration_key_personnel_salaries']", options: this.typeCost1 },
           { xpath: "//input[@id='5_pi_co_pi_program_administration_key_personnel_salaries']", options: this.typeCost1 },
           { xpath: "//input[@id='1_pi_co_pi_program_administration_other']", options: this.typeCost1 },
           { xpath: "//input[@id='2_pi_co_pi_program_administration_other']", options: this.typeCost1 },
           { xpath: "//input[@id='3_pi_co_pi_program_administration_other']", options: this.typeCost1 },
           { xpath: "//input[@id='4_pi_co_pi_program_administration_other']", options: this.typeCost1 },
           { xpath: "//input[@id='5_pi_co_pi_program_administration_other']", options: this.typeCost1 },

        ]);
        this.clickSaveBtn();
    }
    clickBudgetLink(){
        cy.xpath("//a[text()='Budget']").click()
    }
    clickSaveBtn(){
        cy.xpath("//button[@type='submit']").click()
    }

}

export default Budget;
