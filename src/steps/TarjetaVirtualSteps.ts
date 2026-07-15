import { Page } from "@playwright/test";
import { BaseSteps } from "./BaseSteps"
import { TarjetasVirtualesPage } from "../pages/TarjetasVirtualesPage";


export class TarjetaVirtualSteps extends BaseSteps {

    protected tarjetasVirtuales: TarjetasVirtualesPage
    constructor(page: Page) {
        super(page)
        this.tarjetasVirtuales = new TarjetasVirtualesPage(page)
    }


    async generarTarjetaVirtual(tipoCuenta: string) {
        await this.clickTarjetasVirtuales()
        await this.tarjetasVirtuales.validarTituloSeccionTv()
        await this.tarjetasVirtuales.validarDescripcionTexto()
        await this.tarjetasVirtuales.validarBotonGenerarNuevaTarjeta()
        await this.tarjetasVirtuales.validarSelectCuentaLabel()
        await this.tarjetasVirtuales.validarLimiteTexto()

        // 1. Buscamos en el DOM la opción cuyo texto contenga el tipo de cuenta (ej. 'Cuenta Corriente')
        //    y obtenemos dinámicamente su atributo 'value'. Esto garantiza que aunque el ID de la cuenta
        //    cambie en base de datos (ej. de 'ACC001' a otro valor), el test seguirá funcionando.
        const optionValue = await this.tarjetasVirtuales.obtenerValorCuentaPorTexto(tipoCuenta)
        console.log(`[INFO] Tipo de cuenta buscada: "${tipoCuenta}"`)
        console.log(`[INFO] Valor (ID) de cuenta obtenido del DOM: "${optionValue}"`)

        // 2. Con el value obtenido dinámicamente, leemos el texto visible de esa opción en el DOM
        //    y extraemos sus últimos 4 dígitos usando una expresión regular (en 'funciones.ts').
        //    Así la validación final también es independiente del número de cuenta real.
        // 3. Finalmente, seleccionamos físicamente la cuenta en el desplegable de la UI.
        const ultimosDigitos = await this.tarjetasVirtuales.obtenerUltimosDigitos(optionValue)
        console.log(`[INFO] Últimos 4 dígitos extraídos: "${ultimosDigitos}"`)

        await this.tarjetasVirtuales.seleccionarCuenta(optionValue)
        await this.tarjetasVirtuales.clickGenerarNuevaTarjeta()

        console.log(`[INFO] Validando tarjeta generada con texto: "ACTIVA - VINCULADA A **** **** **** ${ultimosDigitos}"`)
        await this.tarjetasVirtuales.validarTarjetaGeneradaExitosamente(ultimosDigitos)
        await this.tarjetasVirtuales.validarVisaDebitTexto()
    }


}