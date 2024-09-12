import { test, expect } from 'playwright/test';
import RegistrationPage from '../Pages/RegistrationPage'

test('Form Submission', async ({ page }) => {

    // Fill out the form
    const userRegistration = new RegistrationPage(page)
    await userRegistration.visitURL()
    await userRegistration.registerUser()
    
    // Skill dropdown
    //Assertion
    const value = await userRegistration.Skilldropdown()
    expect(value).toContain('iOS');
    
    //country dropdown  
    //Assertion
    const Option = await userRegistration.SelectCountryFromList()
    expect(Option).toContain('India');

    //DOB
    const selectedDay = await userRegistration.DateOfBirth()
    expect(selectedDay).toBe("2");

   //Password

   await userRegistration.EnterPassword() 

    //Choose file
  const fileInputValue = await userRegistration.uploadingfile()

  // Assert the file name
  expect(fileInputValue).toBe('Elon Musk Twitter Acquisition_ Free Speech Impact.doc');

    //Submit
  await userRegistration.SubmitForm()

  await page.waitForTimeout(5000);
  
});



