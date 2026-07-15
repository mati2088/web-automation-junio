
import { Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { extraerUltimosDigitos } from "../utils/funciones";

export class TarjetasVirtualesPage extends BasePage {

    private readonly tarjetasVirtualesTitulo = this.page.getByRole('heading', { name: 'Tarjetas Virtuales' });
    private readonly descripcionTexto = this.page.getByText('Genera tarjetas de débito');
    private readonly botonGenerarNuevaTarjeta = this.page.getByRole('button', { name: '+ Generar Nueva Tarjeta' });
    private readonly selectCuentaLabel = this.page.getByText('Sincronizar con cuenta:');
    private readonly selectCuenta = this.page.getByLabel('Sincronizar con cuenta:');
    private readonly limiteTexto = this.page.getByText('Límite: 1 tarjeta virtual');
    private readonly visaDebitTexto = this.page.getByText('VISA DEBIT');
    private readonly badgeStatus = this.page.locator('.card-status-badge');

    constructor(page: Page) {
        super(page)
    }

    async validarTituloSeccionTv() {
        await this.validarElementoVisible(this.tarjetasVirtualesTitulo);
    }

    async validarDescripcionTexto() {
        await this.validarElementoVisible(this.descripcionTexto);
    }

    async validarBotonGenerarNuevaTarjeta() {
        await this.validarElementoVisible(this.botonGenerarNuevaTarjeta);
    }

    async validarSelectCuentaLabel() {
        await this.validarElementoVisible(this.selectCuentaLabel);
    }

    async validarLimiteTexto() {
        await this.validarElementoVisible(this.limiteTexto);
    }

    async validarVisaDebitTexto() {
        await this.validarElementoVisible(this.visaDebitTexto);
    }

    async seleccionarCuenta(optionValue: string) {
        await this.selectCuenta.selectOption(optionValue);
    }

    async obtenerUltimosDigitos(optionValue: string): Promise<string> {
        const optionLocator = this.page.locator(`select option[value="${optionValue}"]`);
        const text = await optionLocator.textContent() ?? '';
        return extraerUltimosDigitos(text);
    }

    async obtenerValorCuentaPorTexto(tipoCuenta: string): Promise<string> {
        const optionLocator = this.page.locator(`select option:has-text("${tipoCuenta}")`);
        const value = await optionLocator.getAttribute('value') ?? '';
        return value;
    }

    async clickGenerarNuevaTarjeta() {
        await this.clickElement(this.botonGenerarNuevaTarjeta);
    }

    async validarTarjetaGeneradaExitosamente(ultimosDigitos: string) {
        await expect(this.badgeStatus).toContainText(`ACTIVA - VINCULADA A **** **** **** ${ultimosDigitos}`);
    }
}