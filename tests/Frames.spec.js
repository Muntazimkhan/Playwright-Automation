import {test, expect} from '@playwright/test'
import { url } from 'inspector';

test("Iframe", async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html');
    const myframe = page.frame({name:'SingleFrame'})
    await myframe.fill("(//input[@type='text'])[1]",'.. ... ... ... ...')
    await page.waitForTimeout(5000)
    const mytext =  await myframe.locator("//input[@type='text']").inputValue()
    expect(mytext).toBe(".. ... ... ... ...")

});


test.only("Iframe with in an Iframe", async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html');
    await page.click("//a[normalize-space()='Iframe with in an Iframe']")

    const Pframe = await page.frameLocator("//iframe[@src='MultipleFrames.html']");
    const Cframe = await Pframe.frameLocator(".iframe-container");
    const NcFrame = await Cframe.nth(0)
    await NcFrame.fill("(//input[@type='text'])[1]",'nessted')
    await page.waitForTimeout(3000)



});

