// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('gmsLoginFixture', () => {
    cy.exec( 'test -f cypress/fixtures/GMSLoginOverride.json', {failOnNonZeroExit: false} ).then( (res) => {
        if (res.code === 0) {
            cy.log("Using fixture GMSLoginOverride")
            cy.fixture('GMSLoginOverride');
        } else {
            cy.log("Using fixture GMSLogin")
            cy.fixture('GMSLogin');
        }
    });
})

Cypress.Commands.add('login', (username = Cypress.env('username'), password = Cypress.env('password')) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/login/login");
    cy.get("#username").type(username, {force: true});
    cy.get("#password").type(password);
    cy.get("button[type='submit']").click();
    cy.title().should('contain',"Home - CIRM GMS");
})

Cypress.Commands.add('pushUser', (username) => {
    cy.visit("/users?bc_level=menu")
    cy.get("#search_email").type(username);
    cy.get("button[type='submit']").click();
    cy.xpath(`//a[@title="become --> ${username}"]`).click({force:true})
})

Cypress.Commands.add('popUser', (levels = 1) => {
    cy.visit(`/login/logout?bc_level=menu&pop=${levels}`)
})

Cypress.Commands.add('createReports', (report_type, check_list, period, end_date, start_date) => {
    cy.xpath("//select[@name='grant_requirement_spec[def_type_name]']").select(report_type, {force:true});
    cy.xpath("//select[@name='grant_requirement_spec[assessment_type_name]']").select(check_list, {force:true});
    cy.xpath("//input[@name='grant_schedule_item[period_name]']").type(period, {force:true});
    cy.xpath("//input[@name='grant_schedule_item[end_date]']").type(end_date, {force:true});
    cy.xpath("//input[@name='grant_schedule_item[start_date]']").type(start_date, {force:true});
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("//a[contains(text(),'Back to Grant')]").click();
})
Cypress.Commands.add('createReport', (report_type, check_list, period, end_date, start_date) => {
    cy.xpath("//a[text()='Reports Schedule']").click();
    cy.xpath("//a[text()='Add Schedule Item']").click();
    cy.xpath("//select[@name='grant_requirement_spec[def_type_name]']").select(report_type, {force:true});
    cy.xpath("//select[@name='grant_requirement_spec[assessment_type_name]']").select(check_list, {force:true});
    cy.xpath("//input[@name='grant_schedule_item[period_name]']").type(period, {force:true});
    cy.xpath("//input[@name='grant_schedule_item[end_date]']").type(end_date, {force:true});
    cy.xpath("//input[@name='grant_schedule_item[start_date]']").type(start_date, {force:true});
    cy.xpath("//button[@type='submit']").click();
    cy.xpath("//a[contains(text(),'Back to Grant')]").click();
})
Cypress.Commands.add('submitDeliverable', (deliverable_number) => {
    cy.xpath(`//input[@type='submit'][@value='Submit ${deliverable_number}']`).click();
})


Cypress.Commands.add('ensureProgramOpenForApplications', (program_code) => {
    const grant_app_status = "GrantApp";
    const statuses = ["PreApp", "LOI", grant_app_status, "Review", "ICOC", "Grant"];
    const regex = new RegExp(`${statuses.join('|')}`, 'g')

    cy.visit("/admin/list_rfas?bc_level=menu")

    // find the program and click the edit link
    const program_code_regex = new RegExp(`^\\s?${program_code}\\s?$`, "g");
    cy.get('td').contains(program_code_regex).parent().then((tr) => {
        cy.wrap(tr).find('td').contains(regex).then((td) => {
           cy.log("Program status: " + td.text().trim());
           if (td.text().trim() != grant_app_status) {
               cy.wrap(tr).find('a').contains('Edit').click();
               cy.get('#program_status').select(grant_app_status);
               cy.get('button[type="submit"]').click();
               cy.log("Program status set to: GrantApp");
           }
        });
    });
})

Cypress.Commands.add('withSelected', (selectors) => {
    selectors.forEach((selector) => {
        let selector_func = function(){ return cy.get(selector) };
        if (selector['get']) {
            selector_func = function(){ return cy.get(selector['get']) };
        } else if (selector['xpath']) {
            selector_func = function(){ return cy.xpath(selector['xpath']) };
        }
        let options = selector['options'] || {};
        let each_func = function(selected, options, index, list) { return; }
        if (options['clear']) {
            each_func = function (selected, options, index, list) {
                return cy.wrap(selected).clear();
            };
        } else if (options['type']) {
            each_func = function(selected, options, index, list){
                return cy.wrap(selected).type(options['type'](options, index));
            };
        } else if (options['check']) {
            each_func = function(selected, options, index, list){
                return cy.wrap(selected).check();
            };
        } else if (options['select']) {
            each_func = function(selected, options, index, list){
                return cy.wrap(selected).select(options['select']);
            };
        } else if (options['selectFile']) {
            each_func = function(selected, options, index, list){
                let result = cy.wrap(selected).selectFile(options['selectFile'], options);
                cy.wait(100);
                cy.reload(true);
                return result;
            };
        }
        selector_func().then((selected) => {
            if (selected.length > 1) {
                cy.wrap(selected).each((item, index, list) => {
                    each_func(item, options, index + 1, list);
                });
            } else {
                cy.wrap(selected).then((item) => {
                    each_func(item, options, 1, []);
                });
            }
        });
    });
})

Cypress.Commands.add('uploadFile', (xpath, filepath, options = {}) => {
    cy.xpath(xpath).selectFile(filepath, options);
})

Cypress.Commands.add('uploadFileAndWait', (xpath, filepath, options = {}) => {
    cy.uploadFile(xpath, filepath, options);
    cy.wait(100);
    cy.reload(true);
})
