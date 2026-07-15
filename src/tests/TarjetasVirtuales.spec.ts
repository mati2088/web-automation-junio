import { test, expect, Page, BrowserContext } from '@playwright/test';
import { LoginSteps } from "../steps/LoginSteps"
import { usuarios } from "../data/loginData.json"

import 'dotenv/config'
import { TarjetaVirtualSteps } from '../steps/TarjetaVirtualSteps';

const url = process.env.URL ?? ''

let page: Page
let context: BrowserContext

test.beforeAll(async ({ browser }) => {
    context = await browser.newContext({ recordVideo: { dir: 'test-results/videos/' } });
    page = await context.newPage();
    const loginSteps = new LoginSteps(page);
    await loginSteps.navegarWeb(url)
    await loginSteps.iniciarSesion(usuarios.usuarioValido.usuario, usuarios.usuarioValido.password)
});

// Cerramos el contexto al finalizar todos los tests para que el video quede guardado correctamente
test.afterAll(async () => {
    await context.close();
});


test('Generar Tarjeta virtual exitosamente en Cuenta Corriente', async () => {
    const tarjetaVirtualSteps = new TarjetaVirtualSteps(page);
    await tarjetaVirtualSteps.generarTarjetaVirtual('Cuenta Corriente');
    await tarjetaVirtualSteps.waitFor(3000)
});

test('Generar Tarjeta virtual exitosamente en Caja de Ahorro', async () => {
    const tarjetaVirtualSteps = new TarjetaVirtualSteps(page);
    await tarjetaVirtualSteps.generarTarjetaVirtual('Caja de Ahorro');
    await tarjetaVirtualSteps.waitFor(3000)
});


