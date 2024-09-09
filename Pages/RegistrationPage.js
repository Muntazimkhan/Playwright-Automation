import { firstName, lastName , enterAddress , enterEmail , enterPhonenumber, selectHobby, skills, checkMale, countryCombo,countryList,selectedCountry, selectYear, selectMonth, selectDay, enterPassword, passowrdConfirmation, Uploadfile, Submit
 } from "../pageObjects/Registration";


 class RegistrationPage{
    constructor (page){
        this.page = page
        
    }

    async visitURL(page){
        console.log('reached here.')
        await this.page.goto('https://demo.automationtesting.in/Register.html',{ waitUntil: 'load' });

    }

    async registerUser(){
    await this.page.fill(firstName, 'Muntazim');
    await this.page.fill(lastName, 'Khan');
    await this.page.fill(enterAddress, 'Board Bazar Peshawar');
    await this.page.fill(enterEmail, 'abc123@gmail.com');
    await this.page.fill(enterPhonenumber, '0147258963');
    await this.page.locator(checkMale).click();
    await this.page.locator(selectHobby).click();
    }

    async Skilldropdown() {
        const skillsDropdown = await this.page.locator(skills)
        await skillsDropdown.selectOption('iOS');
        const value = await skillsDropdown.inputValue();
        return value;
    }
    async SelectCountryFromList() {
        await this.page.click(countryCombo);
        await this.page.waitForSelector(countryList);
        
        // Click on "India" from the dropdown
        const selectOption = this.page.locator(selectedCountry);
        await selectOption.click();
        const MySelectedCountry = await this.page.locator(countryCombo).textContent();
        return MySelectedCountry
    }

    async DateOfBirth() {
        await this.page.locator(selectYear).scrollIntoViewIfNeeded();
        await this.page.locator(selectYear).selectOption('2001');

        await this.page.locator(selectMonth).scrollIntoViewIfNeeded();
        await this.page.locator(selectMonth).selectOption('April');

        await this.page.locator(selectDay).scrollIntoViewIfNeeded();
        await this.page.locator(selectDay).selectOption('2');

        //Assertion
        const dropdown = this.page.locator(selectDay);
        const selectedOptions = await dropdown.evaluate((element) => {
        const selected = element.options[element.selectedIndex];
        return selected ? selected.innerText : '2';
    });

        return selectedOptions;

    }

    async EnterPassword(){
        await this.page.fill(enterPassword , 'sd4233fggg5')
        await this.page.fill( passowrdConfirmation, 'sd4233fggg5')
    }

    async uploadingfile(){
        const fileInput = this.page.locator(Uploadfile);
        await fileInput.setInputFiles('C:/Users/Workbox/Downloads/Elon Musk Twitter Acquisition_ Free Speech Impact.doc')
        
        const fileInputValue = await fileInput.evaluate(element => element.files[0]?.name);
        console.log(fileInputValue);

        return fileInputValue;
    }

    async SubmitForm(){
        await this.page.click(Submit)

    }
     

 }
        export default RegistrationPage
