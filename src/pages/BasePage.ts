import {Page,Locator, expect} from "@playwright/test"

/* 
creamos la clase basePage con metodos de playwright por si mas adelante llegan a cambiar
la forma en que se llama
*/

export class BasePage {
    page:Page //this hace referencia al atributo de la clase

    constructor(page:Page) //el page por parametro hace referencia al valor qe le pasamos al momento de instanciar el objecto
    {
        this.page=page
    }

    async clickElement(locator:Locator){
        await locator.click();
    }

    async fillInput(locator:Locator,data:string){
        await locator.fill(data)
    }


    async validarTextoVisible(texto:string) {
        await expect(this.page.getByText(texto)).toBeVisible()
    }

 
}