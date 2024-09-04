import { test, expect } from '@playwright/test'
import { beforeEach } from 'node:test'

test.beforeEach(async ({page}) =>{
    await page.goto('https://demo.automationtesting.in/Alerts.html')
});

//Alert with OK
test('@smoke Interacting with alerts' , async ({page}) => {

    page.on('dialog', async dialog =>{
        console.log('Dialog Message', dialog.message());
        await dialog.accept();
    });

    await page.click('.btn.btn-danger')
})

//Alert with OK and Cancel

test('Interacting with alerts with ok and cancel' , async ({page}) => {

    page.on('dialog', async dialog =>{

        await dialog.dismiss()

    })

    await page.click(".analystic[href='#CancelTab']")
    await page.click('.btn.btn-primary')
    expect (page.locator('#demo')).toHaveText('You Pressed Cancel')

    await page.waitForTimeout(5000)

})

//Alert with Textbox

test.only('Interacting with alerts with Textbox' , async ({page}) => {

    page.on('dialog', async dialog =>{

        await dialog.accept('Testing. . . . . . . . . . . . . . . . . . . . . .')

    })

    await page.click(".analystic[href='#Textbox']")
    await page.click('.btn.btn-info')
    expect (page.locator('#demo')).toHaveText('Testing. . . . . . . . . . . . . . . . . . . . . .')
    await page.waitForTimeout(5000)



})

