
import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class TarjetasVirtualesPage extends BasePage {

    /* 
      await page.getByText('Tarjeta Virtual', { exact: true }).click();
      await expect(page.getByRole('heading')).toContainText('Tarjetas Virtuales');
      await expect(page.getByRole('heading', { name: 'Tarjetas Virtuales' })).toBeVisible();
    }); */

    private readonly tarjetasVirtualesTitulo = this.page.getByRole('heading', { name: 'Tarjetas Virtuales' });
    constructor(page: Page) {
        super(page)
    }

    async validarTituloSeccionTv() {
        await this.validarElementoVisible(this.tarjetasVirtualesTitulo);
    }

}