import { test, expect } from 'playwright/test';

test('Form Submission', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    
    // Fill out the form
    await page.fill("input[placeholder='First Name']", 'Muntazim');
    await page.fill("input[placeholder='Last Name']", 'Khan');
    await page.fill(".form-control.ng-pristine.ng-untouched.ng-valid[rows='3']", 'Board Bazar Peshawar');
    await page.fill("input[type='email']", 'muntazim.khan@gmail.com');
    await page.fill("input[type='tel']", '0147258963');
    await page.locator("input[value='Male']").click();
    await page.locator("#checkbox3").click();
    
    // Skill dropdown
    const skillsDropdown = page.locator('#Skills');
    await skillsDropdown.selectOption('iOS');
    //Assertion
    const selectedOption = await skillsDropdown.inputValue();
    expect(selectedOption).toContain('iOS');
    
    //country dropdown
    await page.click("span[role='combobox']");
    await page.waitForSelector(".select2-results__option");
    
    // Click on "India" from the dropdown
    const selectOption = page.locator(".select2-results__option:has-text('India')");
    await selectOption.click();
    //Assertion
    const Option = await page.locator("span[role='combobox']").textContent();
    expect(Option).toContain('India');

    await page.waitForTimeout(5000);
});



