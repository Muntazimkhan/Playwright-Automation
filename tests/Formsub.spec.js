import {test, expect} from 'playwright/test';


test ('Form Submission' , async ({page}) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.fill("input[placeholder='First Name']", 'Muntazim')
    await page.fill("input[placeholder='Last Name']", 'Khan')
    await page.fill(".form-control.ng-pristine.ng-untouched.ng-valid[rows='3']", 'Board Bazar Peshawar')
    await page.fill("input[type='email']", 'muntazim.khan@gmail.com')
    await page.fill("input[type='tel']",'0147258963')
    await page.locator("input[value='Male']").click()
    await page.locator("#checkbox3").click()

    // Locate the Skills dropdown element
    const skillsDropdown =  page.locator('#Skills');

    // Select an option from the dropdown (e.g., 'Java')
    await skillsDropdown.selectOption('Java');

    // Verify that the correct option is selected
    const selectedOption = await skillsDropdown.inputValue();
    expect(selectedOption).toBe('Java');
    
    await page.waitForTimeout(5000)

})