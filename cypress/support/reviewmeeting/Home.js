import {lorem} from '../lorem';
let text= lorem.generateWords(1)+"TestAuto";
class Home{

    typeOptions = { type: function(options, index) { return lorem.generateWords(1); } };

    completeSection(program_code){
        this.clickReview();
        this.clickManageReviews();
        this.clickoncreatenewreview();
        cy.get("#review_def_internal_name").select(`${program_code} - GWG Review`);
        cy.get("#review_display_name").type(text);
        this.selectreviewstatus();
        this.clickCreatebutton();
        cy.xpath("(//tbody)[2]//tr//td[1]").contains(text).click();

    }
    clickClinApplication() {
        cy.xpath("(//div[@class='table'])[1]//a").contains(text).click();
    }
    clickReview(){
        cy.xpath('//a[@name="Review"]').click();
    }
    clickManageReviews(){
        cy.xpath("//a[@name='Manage Reviews']").click();
    }
    clickoncreatenewreview(){
        cy.xpath("//button[text()='Create a new review']").click();
    }
    selectreviewstatus(){
        cy.get("#review_status").select("Active");
    }
    clickCreatebutton(){
        cy.xpath("//button[text()='Create']").click();
    }

    }



export default Home;
