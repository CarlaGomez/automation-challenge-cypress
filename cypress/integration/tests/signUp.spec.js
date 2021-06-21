import { should } from 'chai'
import SignUpPage from '../../pageObjects/signUpPage'

describe('Create an account', () => {
    const signUp = new SignUpPage()

    before(() => {
        cy.visit('http://automationpractice.com/index.php')
    })

    it('should go to the sign up page', () => {
        signUp.getSignUpButton().should('be.visible').click()
    })

    it('should enter email', () => {
        signUp.getEmailInput().type('correoparapruebaspruebas@gmail.com')
        signUp.getCreateAccountButton().should('be.visible').click()
    })

    it('should fill my personal information', () => {
        signUp.getTitleRadioButton().click()
        signUp.getCustomerFirstNameInput().type('Carla')
        signUp.getCustomerLastNameInput().type('Gomez')
        signUp.getPasswordInput().type('Test1234*')
        signUp.getDayOfBirthDropdown().select('15')
        signUp.getMonthOfBirthDropdown().select('November')
        signUp.getYearOfBirthDropdown().select('1997')
        signUp.getNewsletter().click()
    })

    it('should fill my address', () => {
        signUp.getFirstNameInput().clear().type('Carla')
        signUp.getLastNameInput().clear().type('Gomez')
        signUp.getAddressInput().type('8400 NW 25 ST SUITE 100')
        signUp.getCityInput().type('Doral')
        signUp.getPostalCodeInput().type('33198')
        signUp.getCountryDropdown().select('United States')
        signUp.getStateDropdown().select('Florida')
        signUp.getMobilePhoneInput().type('15042010052')
        signUp.getAliasInput().clear().type('Alias')
    })

    it('should register', () => {
        signUp.getRegisterButton().click()
    })
})