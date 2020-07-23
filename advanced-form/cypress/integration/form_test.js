describe('Get the Name input and type a name in it', () =>{

it('can navigate to the site', ()=>{
    cy.visit('http://localhost:3000/?username=rewrewrwe&email=kingxsam%40gmail.com&password=ewewewe&terms=on')
    cy.url().should('include', 'username' )
})

it('typing in the Name input and checking the input', ()=>{
    cy.get('input[name="username"]').type('sami alaloosi')
    .should('have.value', "sami alaloosi")
})
} )


describe('Get the Email input and type an email address in it', () =>{
    it('can navigate to the site', ()=>{
        cy.visit('http://localhost:3000/?username=rewrewrwe&email=kingxsam%40gmail.com&password=ewewewe&terms=on')
    })

    it("typing in the Email input and checking the input", ()=>{
        cy.get('input[name="email"]').type("kingxsam@gmail.com")
        .should('have.value', 'kingxsam@gmail.com' )
    })
})


describe("Get the password input and type a password in it", () =>{
    it('can navigate to the site', ()=>{
        cy.visit('http://localhost:3000/?username=rewrewrwe&email=kingxsam%40gmail.com&password=ewewewe&terms=on')
    })

    it("typing in the password input and checking the input", () =>{
        cy.get('input[id="password"]').type('12345678')
        .should('have.value', '12345678' )
    })
})

describe("Testing the checkbox", () =>{
    it("can navigate to the site", ()=>{
        cy.visit('http://localhost:3000/?username=rewrewrwe&email=kingxsam%40gmail.com&password=ewewewe&terms=on')
    })

    it('can check and uncheck the ckeckbocx', ()=>{
        cy.get('[type="checkbox"]').check() 
        cy.get('[type="checkbox"]').uncheck() 
    })
})

describe('Can submit the form data', () =>{

    it("can navigate to the site", ()=>{
        cy.visit('http://localhost:3000/?username=rewrewrwe&email=kingxsam%40gmail.com&password=ewewewe&terms=on')
    })

    it('typing in the Name input', ()=>{
        cy.get('input[name="username"]').type('sami alaloosi')
    })

    it("typing in the Email input ", ()=>{
        cy.get('input[name="email"]').type("kingxsam@gmail.com")
    })

    it("typing in the password input", () =>{
        cy.get('input[id="password"]').type('12345678')
    })

    it('can check the ckeckbocx', ()=>{
        cy.get('[type="checkbox"]').check() 
    })

    it('clicking the submit butten', ()=> {
        cy.get('button').click()
    })

    it('checking if the form has been submitted', ()=>{
        cy.contains('sami alaloosi')
        cy.contains('kingxsam@gmail.com')
    })
} )

describe('checking for every form validation', () =>{

    it("can navigate to the site", ()=>{
        cy.visit('http://localhost:3000/?username=rewrewrwe&email=kingxsam%40gmail.com&password=ewewewe&terms=on')
    })

    it('typing in the Name input', ()=>{
        cy.get('input[name="username"]').type('s')
    })

    it('checking the username validation', ()=> {
        cy.contains('Username must be at least 5 characters') 
    })

    it("typing in the Email input ", ()=>{
        cy.get('input[name="email"]').type("kingxsamgmail.com")
    })

    it('checking the email validation', ()=> {
        cy.contains('Email must be valid')
    })

    it("typing in the password input", () =>{
        cy.get('input[id="password"]').type('123456')
    })

    it('checking the password validation', ()=> {
        cy.contains('Password must be at least 8 characters')
    })

    it('can check the ckeckbox', ()=>{
        cy.get('[type="checkbox"]').check()
        cy.get('[type="checkbox"]').uncheck() 
    })

    it('checking the ckeckbox validation', ()=> {
        cy.contains('You must accept Terms and Conditions')
    })
})


// stretch 

describe('testing the submit button', ()=> {
    it("can navigate to the site", ()=>{
        cy.visit('http://localhost:3000/?username=rewrewrwe&email=kingxsam%40gmail.com&password=ewewewe&terms=on')
    })

    it('making sure that the submit button is disabled when you have an empty form', ()=>{
        cy.get('button').should('be.disabled')
    })
} )