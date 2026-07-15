# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: TarjetasVirtuales.spec.ts >> Generar Tarjeta virtual exitosamente en Cuenta Corriente
- Location: src\tests\TarjetasVirtuales.spec.ts:21:5

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - generic [ref=e4]:
      - img [ref=e5]
      - generic [ref=e8]: Home Banking
    - generic [ref=e9]:
      - generic [ref=e10]: Juan Pérez
      - button "Salir" [ref=e11] [cursor=pointer]
  - generic [ref=e12]:
    - complementary [ref=e13]:
      - list [ref=e14]:
        - listitem [ref=e15] [cursor=pointer]:
          - img [ref=e16]
          - generic [ref=e21]: Inicio
        - listitem [ref=e22] [cursor=pointer]:
          - img [ref=e23]
          - generic [ref=e25]: Transferencias
        - listitem [ref=e26] [cursor=pointer]:
          - img [ref=e27]
          - generic [ref=e29]: Plazos Fijos
        - listitem [ref=e30] [cursor=pointer]:
          - img [ref=e31]
          - generic [ref=e33]: Préstamos
        - listitem [ref=e34] [cursor=pointer]:
          - img [ref=e35]
          - generic [ref=e37]: Pago de Servicios
        - listitem [ref=e38] [cursor=pointer]:
          - img [ref=e39]
          - generic [ref=e41]: Tarjetas Virtuales
        - listitem [ref=e42] [cursor=pointer]:
          - img [ref=e43]
          - generic [ref=e46]: Mis Datos
    - main [ref=e47]:
      - generic [ref=e48]:
        - generic [ref=e49]:
          - heading "Tarjetas Virtuales" [level=2] [ref=e50]
          - paragraph [ref=e51]: Genera tarjetas de débito virtuales para compras online
        - generic [ref=e52]:
          - generic [ref=e53]:
            - generic [ref=e54]:
              - generic [ref=e55]:
                - generic [ref=e56]: "Sincronizar con cuenta:"
                - combobox "Sincronizar con cuenta:" [ref=e57]:
                  - option "Cuenta Corriente - **** **** **** 1234" [selected]
                  - option "Caja de Ahorro - **** **** **** 5678"
              - button "+ Generar Nueva Tarjeta" [ref=e58] [cursor=pointer]
            - paragraph [ref=e59]: "Límite: 1 tarjeta virtual activa por cuenta (Caja de Ahorro / Cta Cte)"
          - generic [ref=e61]:
            - generic [ref=e62]: 💳
            - paragraph [ref=e63]: No tienes una tarjeta virtual activa
            - paragraph [ref=e64]: Genera tu tarjeta virtual para compras seguras en internet.
```