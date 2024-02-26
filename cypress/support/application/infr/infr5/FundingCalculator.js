class FundsCalculator{

    typeCost = { type: function(options, index) { return "200000" } };
    typeInitialCost = { type: function(options, index) { return "0" } };

    completeSection(){
        this.clickFundCalculatorLink();
        cy.withSelected([
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_operational_enhancements_personnel'])", options: this.typeCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_operational_enhancements_personnel'])", options: this.typeCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_operational_enhancements_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_operational_enhancements_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_operational_enhancements_equipment'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_operational_enhancements_equipment'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_operational_enhancements_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_operational_enhancements_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_operational_enhancements_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_operational_enhancements_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_specialization_areas_personnel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_specialization_areas_personnel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_specialization_areas_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_specialization_areas_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_specialization_areas_equipment'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_specialization_areas_equipment'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_specialization_areas_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_specialization_areas_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_specialization_areas_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_specialization_areas_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_training_personnel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_training_personnel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_training_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_training_consultants'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_training_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_training_stipends'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_training_trainee_tuition'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_training_trainee_tuition'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_training_equipment'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_training_equipment'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_training_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_training_supplies'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_direct_costs_training_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_direct_costs_training_travel'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_ops_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_ops_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='1_pi_co_pi_library_rate'])", options: this.typeInitialCost },
            { xpath: "(//input[@id='2_pi_co_pi_library_rate'])", options: this.typeInitialCost },

        ])
        this.clickSave();
    }
    clickFundCalculatorLink(){
        cy.xpath("//a[text()='Funds Calculator']").click();
    }
    FundsCalculatorValues1(){
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_operational_enhancements_personnel']").type("200000")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_operational_enhancements_personnel']").type("200000")
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_operational_enhancements_consultants']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_operational_enhancements_consultants']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_operational_enhancements_equipment']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_operational_enhancements_equipment']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_operational_enhancements_supplies']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_operational_enhancements_supplies']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_operational_enhancements_travel']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_operational_enhancements_travel']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_specialization_areas_personnel']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_specialization_areas_personnel']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_specialization_areas_consultants']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_specialization_areas_consultants']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_specialization_areas_equipment']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_specialization_areas_equipment']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_specialization_areas_supplies']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_specialization_areas_supplies']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_specialization_areas_travel']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_specialization_areas_travel']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_training_personnel']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_training_personnel']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_training_consultants']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_training_consultants']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_training_stipends']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_training_stipends']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_training_trainee_tuition']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_training_trainee_tuition']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_training_equipment']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_training_equipment']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_training_supplies']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_training_supplies']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_direct_costs_training_travel']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_direct_costs_training_travel']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_ops_rate']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_ops_rate']").type("0")
        cy.xpath("//input[@id='1_pi_co_pi_library_rate']").type("0")
        cy.xpath("//input[@id='2_pi_co_pi_library_rate']").type("0")
        cy.xpath("//button[@type='submit']").click()
    }

    clickSave(){
        cy.xpath("//button[@type='submit']").click()
    }

}



export default FundsCalculator;
