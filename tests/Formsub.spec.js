import { test, expect } from 'playwright/test';

test('@smoke Form Submission', async ({ page }) => {
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

    //DOB
    await page.locator('#yearbox').scrollIntoViewIfNeeded();
    await page.locator('#yearbox').selectOption('2001');

    await page.locator("select[placeholder='Month']").scrollIntoViewIfNeeded();
    await page.locator("select[placeholder='Month']").selectOption('April');

    await page.locator("#daybox").scrollIntoViewIfNeeded();
    await page.locator("#daybox").selectOption('2');

    // Get the text of the selected option from the dropdown

    const dropdown = page.locator('#daybox');
    const selectedOptions = await dropdown.evaluate((element) => {
    const selected = element.options[element.selectedIndex];
    return selected ? selected.innerText : '';
    });
    expect(selectedOptions).toBe("2");

    //Password

    await page.fill('#firstpassword' , 'sd4233fggg5')
    await page.fill('#secondpassword' , '00')

    //Choose file
    const fileInput = page.locator('#imagesrc');
    await fileInput.setInputFiles('C:/Users/Workbox/Downloads/Elon Musk Twitter Acquisition_ Free Speech Impact.doc')
    
    const fileInputValue = await fileInput.evaluate(element => element.files[0]?.name);
    console.log(fileInputValue);

  // Assert the file name
  expect(fileInputValue).toBe('Elon Musk Twitter Acquisition_ Free Speech Impact.doc');


    //Submit

    await page.click('#submitbtn')


    await page.waitForTimeout(5000);
});



