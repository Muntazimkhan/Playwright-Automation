import {test, expect} from '@playwright/test'


test("Hover ", async ({browser})=>{

        const context = await browser.newContext()
        const page = await context.newPage()

        await page.goto('https://demo.automationtesting.in/Register.html')


        await page.hover("//a[normalize-space()='SwitchTo']").then(async ()=>{
        await page.click("//a[normalize-space()='Windows']")
        await page.waitForLoadState()
        expect( page.url()).toContain('Windows.html')
        await page.click("//a[@href='http://www.selenium.dev']//button[@class='btn btn-info'][normalize-space()='click']")

        const [newPage] = await Promise.all
        ([
            await context.waitForEvent("page"),           
        ])
        

        
        await page.waitForTimeout(3000)
        expect(newPage.url()).toContain('selenium.dev/')


    })

})

test("New Window", async ({ browser }) => {
    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto('https://demo.automationtesting.in/Windows.html');

    await page.click(".analystic[href='#Seperate']")

    await page.click("//button[@class='btn btn-primary']");

    const [newPage] = await Promise.all
    ([
        context.waitForEvent('page'), 
    ]);

    await newPage.waitForLoadState('load');

    expect(newPage.url()).toContain('selenium.dev/');
});


