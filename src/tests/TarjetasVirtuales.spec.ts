import { test, expect, Page, } from '@playwright/test';
import { LoginSteps } from "../steps/LoginSteps"
import { usuarios } from "../data/loginData.json"

import 'dotenv/config'
import { TarjetaVirtualSteps } from '../steps/TarjetaVirtualSteps';

const url = process.env.URL ?? ''

let page: Page

test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    page = await context.newPage();
    const loginSteps = new LoginSteps(page);
    await loginSteps.navegarWeb(url)
    await loginSteps.iniciarSesion(usuarios.usuarioValido.usuario, usuarios.usuarioValido.password)
});


test('validar titulo seccion tarjetas virtuales', async () => {
    const tarjetaVirtualSteps = new TarjetaVirtualSteps(page);
    await tarjetaVirtualSteps.generarTarjetaVirtual();
    await tarjetaVirtualSteps.waitFor(3000)
});

