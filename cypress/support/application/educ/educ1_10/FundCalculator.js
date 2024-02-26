class FundCalculator{
    typeCost = { type: function(options, index) { return "100" } };
    typeTotalCirmProjectCost = { type: function(options, index) { return "20000" } };
    typeProjectCost = { type: function(options, index) { return "5000" } };
    completeSection(){
        this.clickCIRMFundsCalculator();
        cy.withSelected([
            { xpath: "(//input[@id='1_pi_co_pi_conference_facility_rental'])", options: this.typeTotalCirmProjectCost },
            { xpath: "(//input[@id='1_pi_co_pi_equipment_rental_including_poster_display_boards'])", options: this.typeProjectCost },
           { xpath: "(//input[@id='1_pi_co_pi_transportation'])", options: this.typeCost },
           { xpath: "(//input[@id='1_pi_co_pi_parking'])", options: this.typeCost },
            { xpath: "(//input[@id='1_pi_co_pi_lodging_and_hotel_charges_and_fees'])", options: this.typeCost },
            { xpath: "(//input[@id='1_pi_co_pi_audio_visual_rental'])", options: this.typeCost },
           { xpath: "//input[@id='1_pi_co_pi_internet_connectivity']", options: this.typeCost },
           { xpath: "//input[@id='1_pi_co_pi_program_director_salary_support']", options: this.typeCost },
           { xpath: "//input[@id='1_pi_co_pi_administrative_salary_support']", options: this.typeCost },
           { xpath: "//input[@id='1_pi_co_pi_meeting_planner_costs']", options: this.typeCost },
           { xpath: "//input[@id='1_pi_co_pi_conference_services_production']", options: this.typeCost },
           { xpath: "//input[@id='1_pi_co_pi_design_and_printing_of_program_book_with_abstract_titles']", options: this.typeCost },
           { xpath: "//input[@id='1_pi_co_pi_registration']", options: this.typeCost },
           { xpath: "//input[@id='1_pi_co_pi_supplies']", options: this.typeCost },
           { xpath: "//input[@id='1_pi_co_pi_food_and_beverage_services']", options: this.typeCost },
           { xpath: "//input[@id='1_pi_co_pi_other_costs']", options: this.typeCost },

        ]);
        this.clickSaveBtn();
    }
    clickCIRMFundsCalculator(){
        cy.xpath("//a[text()='CIRM Funds Calculator']").click()
    }

clickSaveBtn(){
    cy.xpath("//button[@type='submit']").click()
}
}
export default FundCalculator;
