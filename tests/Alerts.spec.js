import { test, expect } from '@playwright/test'
import { beforeEach } from 'node:test'
import { assertion } from '../pageObjects/alertsLocators';
import AlertsPage from '../Pages/alertsPage';
let myAlert;

test.beforeEach(async ({page}) =>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    myAlert = new AlertsPage(page)
});

//Alert with OK
test('Interacting with alerts' , async ({page}) => {
    await myAlert.Alert_with_ok_button()
    
})

//Alert with OK and Cancel

test('Interacting with alerts with ok and cancel' , async ({page}) => {
   const assertionLoc = await myAlert.Alert_with_okay_and_cancel_button()
   expect(await assertionLoc.textContent()).toBe('You Pressed Cancel');
    await page.waitForTimeout(5000)

})

//Alert with Textbox

test('Interacting with alerts with Textbox' , async ({page}) => {

    const Textassertion = await myAlert.Alert_with_Textbox()   
    expect (await Textassertion).toHaveText('Hello Testing. . . . . . . . . . . . . . . . . . . . . . How are you today')
    await page.waitForTimeout(5000)



})

