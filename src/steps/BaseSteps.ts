import { Page } from "@playwright/test";
import { MenuPrincipalPage } from "../pages/MenuPrincipalPage";

export class BaseSteps extends MenuPrincipalPage{

protected page:Page

constructor(page:Page){ 
    super(page)
    this.page=page
}

 async navegarWeb(url:string){
    await this.page.goto(url)
 }

 async waitFor(time:number){
    await this.page.waitForTimeout(time);
 }


 
}