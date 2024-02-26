class CIRMFundsCalculator{

    typeCost = { type: function(options, index) { return "20000" } };
    typeselectedCost = { type: function(options, index) { return "10000" } };
    typeInitialCost = { type: function(options, index) { return "0" } };

    completeSection(){
        this.clickCIRMFundsCalculator();
        cy.withSelected([
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_clinical_operations_personnel'])", options: this.typeCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_clinical_operations_personnel'])", options: this.typeselectedCost },
            { xpath: "(//input[@id='3_pi_co_pi_direct_costs_clinical_operations_personnel'])", options: this.typeCost },
            { xpath: "(//input[@id='4_pi_co_pi_direct_costs_clinical_operations_personnel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_direct_costs_clinical_operations_personnel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_clinical_operations_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_clinical_operations_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_direct_costs_clinical_operations_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_direct_costs_clinical_operations_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_direct_costs_clinical_operations_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_clinical_operations_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_clinical_operations_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_direct_costs_clinical_operations_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_direct_costs_clinical_operations_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_direct_costs_clinical_operations_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_clinical_operations_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_clinical_operations_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_direct_costs_clinical_operations_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_direct_costs_clinical_operations_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_direct_costs_clinical_operations_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_training_personnel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_training_personnel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_direct_costs_training_personnel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_direct_costs_training_personnel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_direct_costs_training_personnel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_training_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_training_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_direct_costs_training_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_direct_costs_training_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_direct_costs_training_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_training_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_training_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_direct_costs_training_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_direct_costs_training_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_direct_costs_training_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_training_trainee_tuition'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_training_trainee_tuition'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_direct_costs_training_trainee_tuition'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_direct_costs_training_trainee_tuition'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_direct_costs_training_trainee_tuition'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_training_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_training_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_direct_costs_training_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_direct_costs_training_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_direct_costs_training_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_training_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_training_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_direct_costs_training_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_direct_costs_training_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_direct_costs_training_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_lead_offerings_personnel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_lead_offerings_personnel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_direct_costs_lead_offerings_personnel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_direct_costs_lead_offerings_personnel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_direct_costs_lead_offerings_personnel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_lead_offerings_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_lead_offerings_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_direct_costs_lead_offerings_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_direct_costs_lead_offerings_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_direct_costs_lead_offerings_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_lead_offerings_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_lead_offerings_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_direct_costs_lead_offerings_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_direct_costs_lead_offerings_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_direct_costs_lead_offerings_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_lead_offerings_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_lead_offerings_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_direct_costs_lead_offerings_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_direct_costs_lead_offerings_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_direct_costs_lead_offerings_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_excluded_patient_care_costs'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_excluded_patient_care_costs'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_excluded_patient_care_costs'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_excluded_patient_care_costs'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_excluded_patient_care_costs'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_excluded_trainees'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_excluded_trainees'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_excluded_trainees'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_excluded_trainees'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_excluded_trainees'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_ops_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_ops_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_ops_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_ops_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_ops_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_library_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_library_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_library_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_library_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_library_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_total_matching_funds_or_in_kind_support'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_total_matching_funds_or_in_kind_support'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='3_pi_co_pi_total_matching_funds_or_in_kind_support'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='4_pi_co_pi_total_matching_funds_or_in_kind_support'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='5_pi_co_pi_total_matching_funds_or_in_kind_support'])", options: this.typeInitialCost },
        ])
        this.clickSave();
    }
    clickCIRMFundsCalculator(){
        cy.xpath("//a[text()='CIRM Funds Calculator']").click()
    }
    clickSave(){
        cy.xpath("//button[@type='submit']").click()
    }

}



export default CIRMFundsCalculator;
