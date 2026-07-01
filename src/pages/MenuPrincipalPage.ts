import { BasePage } from "./BasePage";
import { Page } from "@playwright/test"


export class MenuPrincipalPage extends BasePage {

    //atributos
    private readonly homeBankingTitulo = this.page.getByText('Home Banking', { exact: true });
    private readonly panelPrincipalSubTitulo = this.page.getByText('Home Banking', { exact: true });
    private readonly panelPrincipalTitulo = this.page.getByRole('heading', { name: 'Panel Principal' });
    private readonly restablecerSaldosBoton = this.page.getByRole('button', { name: 'Restablecer Saldos' });
    private readonly inicioTexto = this.page.getByText('Inicio', { exact: true });
    private readonly transferenciasItem = this.page.getByRole('list').getByText('Transferencias');
    private readonly plazosFijosItem = this.page.getByRole('list').getByText('Plazos Fijos');
    private readonly prestamosItem = this.page.getByRole('list').getByText('Préstamos');
    private readonly pagoDeServiciosItem = this.page.getByRole('list').getByText('Pago de Servicios');
    private readonly tarjetaVirtualTexto = this.page.getByText('Tarjeta Virtual', { exact: true });
    private readonly misDatosItem = this.page.getByRole('list').getByText('Mis Datos');
    private readonly salirBoton = this.page.getByRole('button', { name: 'Salir' });
    private readonly resumenCuentasTexto = this.page.getByText('Resumen de tus cuentas');
    private readonly ultimosMovimientosTitulo = this.page.getByRole('heading', { name: 'Últimos Movimientos' });

    //constructor

    constructor(page: Page) {
        super(page)
    }
    //metodos

    async validarHomeBankingTitulo() {
        await this.validarElementoVisible(this.homeBankingTitulo);
    }

    async validarPanelPrincipalSubTitulo() {
        await this.validarElementoVisible(this.panelPrincipalSubTitulo);
    }

    async validarPanelPrincipalTitulo() {
        await this.validarElementoVisible(this.panelPrincipalTitulo);
    }


    async validarRestablecerSaldosBoton() {
        await this.validarElementoVisible(this.restablecerSaldosBoton);
    }

    async validarInicioTexto() {
        await this.validarElementoVisible(this.inicioTexto);
    }

    async validarTransferenciasItem() {
        await this.validarElementoVisible(this.transferenciasItem);
    }

    async validarPlazosFijosItem() {
        await this.validarElementoVisible(this.plazosFijosItem);
    }

    async validarPagoDeServiciosItem() {
        await this.validarElementoVisible(this.pagoDeServiciosItem);
    }

    async validarTarjetaVirtualTexto() {
        await this.validarElementoVisible(this.tarjetaVirtualTexto);
    }

    async validarMisDatosItem() {
        await this.validarElementoVisible(this.misDatosItem);
    }

    async validarSalirBoton() {
        await this.validarElementoVisible(this.salirBoton);
    }

    async validarResumenCuentasTexto() {
        await this.validarElementoVisible(this.resumenCuentasTexto);
    }

    async validarUltimosMovimientosTitulo() {
        await this.validarElementoVisible(this.ultimosMovimientosTitulo);
    }

    //metodos click
    async clickInicio() {
        await this.clickElement(this.inicioTexto);
    }

    async clickTransferencias() {
        await this.clickElement(this.transferenciasItem);
    }

    async clickPlazosFijos() {
        await this.clickElement(this.plazosFijosItem);
    }

    async clickPrestamos() {
        await this.clickElement(this.prestamosItem);
    }

    async clickPagoDeServicios() {
        await this.clickElement(this.pagoDeServiciosItem);
    }

    async clickTarjetasVirtuales() {
        await this.clickElement(this.tarjetaVirtualTexto);
    }

    async clickMisDatos() {
        await this.clickElement(this.misDatosItem);
    }

}