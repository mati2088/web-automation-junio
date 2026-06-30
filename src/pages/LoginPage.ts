import {Page} from "@playwright/test"
import { BasePage } from "./BasePage"

export class LoginPage extends BasePage{

    private readonly botonIngresar = this.page.getByRole('button', { name: 'Ingresar' });
    private readonly inputName = this.page.getByRole('textbox', { name: 'Usuario' });
    private readonly inputPassword = this.page.getByRole('textbox', { name: 'Contraseña' });
 

    constructor(page:Page){
        super(page)
    }

    async escribirUsuario(nombre:string){
        await this.fillInput(this.inputName,nombre)
    }

    
    async escribirPassword(password:string){
        await this.fillInput(this.inputPassword,password)
    }

    async clickEnBotonIngresar(){
        await this.clickElement(this.botonIngresar)
    }
}