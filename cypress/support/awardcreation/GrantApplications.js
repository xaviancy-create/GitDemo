let typeTargetDateOptions = "01/30/2024";
let typeAmount = "100000";
class GrantApplications{
typeFund = { type: function(options, index) { return "1000000" } };

    completeSection(program,Application){
        this.clickFindbutton();
        this.selectGrantApplication();
        cy.get("#filter_criteria_program_id").select(program);
        this.userSelectSubmittedStatus();
        this.userSelectReviewStatus();
        this.clickApplyFilter();
        this.clickGrantApp();
        cy.xpath(`(//a[contains(text(),'${Application}')])[1]`).invoke('text').then(($title) =>{
            cy.wrap($title).as('AppTitle')
            })
            cy.xpath(`(//a[contains(text(),'${Application}')])[1]`).click();
        this.selectApproveStatus();
        this.selectGWGStatus();
        this.selectICOCStatus();
        cy.fixture('GMSLogin.json').then((fixtureData) => {
            cy.xpath("//select[@name='grant_app[gmo_id]']").select(fixtureData.GMO);
            cy.xpath("//select[@name='grant_app[so_id]']").select(fixtureData.SO);
        })
        cy.withSelected([
            { xpath: "//input[@name='grant_app[adjusted_cirm_funds_requested]']", options: this.typeFund },
        ])
        this.clickSave();

    }


    clickFindbutton(){
        cy.xpath("//a[@name='Find']").click();
    }
    selectGrantApplication(){
        cy.xpath("//a[@name='Grant Applications']").click();
    }
    userSelectSubmittedStatus(){
        cy.xpath("//select[@name='filter_criteria[submitted]']").select("submitted");
    }
    userSelectReviewStatus(){
        cy.xpath("//select[@name='filter_criteria[review_status]']").select("unscreened");
    }
    clickApplyFilter(){
        cy.xpath("//button[text()='Apply Filter']").click();
    }
    clickGrantApp(){
        cy.xpath("//a[contains(text(), 'GrantApp')]").click();
    }

    selectApproveStatus(){
        cy.xpath("//select[@name='grant_app[review_status]']").select("accepted");
    }
    selectGWGStatus(){
        cy.xpath("//select[@name='grant_app[gwg_status]']").select("GWG recommended");
    }
    selectICOCStatus(){
        cy.xpath("//select[@name='grant_app[icoc_status]']").select("ICOC funded");
    }
    clickSave(){
        cy.xpath("//button[@type='submit']").click();
    }
    clickApplication(){
        cy.get('@AppTitle').then(($Tit) => {
            cy.xpath("//table[@id='app_list_tbl']//tr//td[1]").contains($Tit.trim()).closest('tr').within(() => {
                cy.get("input[type='checkbox'][id^=award_apps_][id*=_do_award]").click();
                cy.get("input[type='text'][id^=award_apps_][id*=_approved_amount]").type(typeAmount);
                cy.get("input[type='text'][id^=award_apps_][id*=_icoc_approval_date]").type(typeTargetDateOptions);
                cy.get("select[id^=award_apps_][id*=_fiscal_year_allocation]").first().select("FY23-24");
                cy.xpath("//input[@type='submit'][@value='Update Awards']").click();
            })
        })
    }

    clickJit() {
        cy.get('@AppTitle').then(($Tit) => {
          cy.xpath(`//table[@id='app_list_tbl']//tr//td[1][contains(text(), '${$Tit.trim()}')]`)
            .closest('tr')
            .find("input[type='checkbox']")
            .click();
        });
      }
    selectApplication(){
        cy.get('@AppTitle').then(($Tit) => {
            cy.xpath("(((//table)[2]//tr)//td//a[@style='text-decoration: none']//following::td[1])//a").contains($Tit.trim()).click();
                 cy.xpath("(//a[@id='become_user_glyph'])[1]").click({force:true})
            })
            cy.get('@AppTitle').then(($Tit) =>{
            cy.xpath("//div[@id='pending_jits']//table//tbody//tr//td[1]").contains($Tit.trim()).closest('tr').within(() => {
                cy.contains('a', 'Edit').click();
        })
    })
}
userClickEdit(){
    cy.get('@AppTitle').then(($Tit) => {
        cy.xpath("//div[@id='found_grants']//table//tbody//tr//td[1]").contains($Tit.trim()).closest('tr').within(() => {
            cy.contains('a', 'Edit').click();
        })
    })
}
    clicktheApplication(){
        cy.get('@AppTitle').then(($Tit) => {
            cy.xpath("(((//table)[2]//tr)//td//a[@style='text-decoration: none']//following::td[1])//a").contains($Tit.trim()).click();
            })
}
    clickEditAOO(){
        cy.get('@AppTitle').then(($Tit) => {
            cy.xpath("//div[@id='pending_jits']//table//tbody//tr//td[1]").contains($Tit.trim()).closest('tr').within(() => {
                cy.contains('a', 'Edit').click();
            })
        })
        cy.xpath("//input[@type='submit'][@value='Submit Pre-Award JIT']").click();
    }
    userClickChecklist(){
        cy.get('@AppTitle').then(($Tit)=> {
          cy.xpath(`//div[@class='typicalrow' and contains(., '${$Tit.trim()}')]//a[text()='Checklist']`).click();
    })
}
}
export default GrantApplications;
