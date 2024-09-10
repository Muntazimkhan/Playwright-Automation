import { clickOkButton, clickPrimaryButton, alertWithOkayAndCancel, assertion, alertWithTextbox, clickDemoBtn, assertionWithTextbox } from "../pageObjects/alertsLocators";
import {page} from '@playwright/test'

class AlertsPage{

    constructor(page){
        this.page = page
    }

    async Alert_with_ok_button(){
        await this.page.on('dialog', async dialog =>{
            console.log('Dialog Message', dialog.message());
            await dialog.accept();
        });
    
        await this.page.click(clickOkButton)
    }

    async Alert_with_okay_and_cancel_button(){
        await this.page.on('dialog', async dialog =>{

            await dialog.dismiss()
    
        })
    
        await this.page.click(alertWithOkayAndCancel)
        await this.page.click(clickPrimaryButton)

        const assertionOnText = this.page.locator(assertion);
        return assertionOnText;

    }

    async Alert_with_Textbox(){
        this.page.on('dialog', async dialog =>{

            await dialog.accept('Testing. . . . . . . . . . . . . . . . . . . . . .')
    
        })
        await this.page.click(alertWithTextbox)
        await this.page.click(clickDemoBtn)

        const assertionOnInputText = this.page.locator(assertionWithTextbox)
        return assertionOnInputText;
    }

}
export default AlertsPage;;