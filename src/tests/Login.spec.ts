import { test, expect } from '@playwright/test';
import {LoginSteps} from "../steps/LoginSteps"
import {usuarios} from "../data/loginData.json"

import 'dotenv/config'

const url = process.env.URL ?? ''

test('test', async ({ page }) => {
  await page.goto('https://homebanking-demo-tests.netlify.app/');
  await page.getByRole('textbox', { name: 'Usuario' }).fill('demo'); //el .fill es un metodo de playwright que se utiliza para escribir
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('demo123');
  await page.getByRole('checkbox', { name: 'Recordarme' }).check(); //.check() sirve para dejar un checkbox marcado
  await page.getByRole('button', { name: 'Ingresar' }).click(); //.click en elementos
  await expect(page.getByRole('heading', { name: 'Panel Principal' })).toBeVisible(); //metodo para validar si un elemento/locator es visible
});

test('Login Exitoso - refactorizado', async ({ page }) => {
      const loginSteps = new LoginSteps(page);
      await loginSteps.navegarWeb(url)
      await loginSteps.iniciarSesion(usuarios.usuarioValido.usuario,usuarios.usuarioValido.password)
});