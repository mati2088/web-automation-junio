import { Page } from "@playwright/test";
import { BaseSteps } from "./BaseSteps"
import { LoginPage } from "../pages/LoginPage";
import { MenuPrincipalPage } from "../pages/MenuPrincipalPage";


export class LoginSteps extends BaseSteps {

    protected loginPage: LoginPage;

    constructor(page: Page) {
        super(page)
        this.loginPage = new LoginPage(page)
    }


    async iniciarSesion(usuario: string, password: string) {
        await this.loginPage.validarTextoExactoVisible("Personal Banking Excellence")
        await this.loginPage.escribirUsuario(usuario)
        await this.loginPage.escribirPassword(password)
        await this.loginPage.clickEnBotonIngresar();

        //validaciones
        await this.validarHomeBankingTitulo();
        await this.validarPanelPrincipalSubTitulo();
        await this.validarPanelPrincipalTitulo();
        await this.validarRestablecerSaldosBoton();
        await this.validarInicioTexto();
        await this.validarTransferenciasItem();
        await this.validarPlazosFijosItem();
        await this.validarPagoDeServiciosItem();
        await this.validarTarjetaVirtualTexto();
        await this.validarMisDatosItem();
        await this.validarSalirBoton();
        await this.validarResumenCuentasTexto();
        await this.validarUltimosMovimientosTitulo();
    }



}