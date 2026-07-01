import { Page } from "@playwright/test";
import { BaseSteps } from "./BaseSteps"
import { TarjetasVirtualesPage } from "../pages/TarjetasVirtualesPage";


export class TarjetaVirtualSteps extends BaseSteps {

    protected tarjetasVirtuales: TarjetasVirtualesPage
    constructor(page: Page) {
        super(page)
        this.tarjetasVirtuales = new TarjetasVirtualesPage(page)
    }


    async generarTarjetaVirtual() {
        await this.clickTarjetasVirtuales()
        await this.tarjetasVirtuales.validarTituloSeccionTv()
    }


}