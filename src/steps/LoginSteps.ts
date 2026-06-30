import { Page } from "@playwright/test";
import {BaseSteps} from "./BaseSteps"
import { LoginPage } from "../pages/LoginPage";


export class LoginSteps extends BaseSteps{

    protected loginPage:LoginPage;

    constructor(page:Page){
        super(page)
        this.loginPage= new LoginPage(page)
    }
    

    async iniciarSesion(usuario:string,password:string){
        await this.loginPage.validarTextoVisible("Personal Banking Excellence")
        await this.loginPage.escribirUsuario(usuario)
        await  this.loginPage.escribirPassword(password)
        await this.loginPage.clickEnBotonIngresar();
    }



}