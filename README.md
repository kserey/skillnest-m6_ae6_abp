# 🌡️ CLI Conversor de Temperatura (M6_AE6_ABP)

Este repositorio contiene la solución para el **Ejercicio Individual M6_AE6_ABP** del Bootcamp Full Stack de Skillnest.

El proyecto es una aplicación de **Línea de Comandos (CLI)** desarrollada con Node.js, diseñada para convertir valores de temperatura entre Celsius (C) y Fahrenheit (F). Se enfoca en el manejo robusto de argumentos, validación y mensajería clara al usuario.

---

## ✨ Características Principales

* **Argumentos Controlados:** Uso del paquete **`yargs`** para definir y gestionar los parámetros de entrada (`--temp` y `--unidad`).
* **Validaciones Robustas:** Se utiliza `yargs.demandOption()` para asegurar la presencia de los parámetros obligatorios.
* **Gestión de Errores:** Mensajes de error y advertencias diferenciados para guiar al usuario.
* **Salida Clara:** Uso del paquete **`chalk`** para colorear la salida de la consola (éxito en verde, errores en rojo, advertencias en amarillo).
* **Lógica Modular:** La función de conversión está separada en el módulo `helpers/convert.js`.

---

## 🛠️ Tecnologías Utilizadas

* **Node.js:** Plataforma de ejecución.
* **yargs:** Procesamiento y validación de argumentos de línea de comandos.
* **chalk:** Aplicación de estilos y colores a la salida de la consola.

---

## 📂 Estructura del Proyecto
```
.
├── node_modules/ # (Ignorada por .gitignore)
├── helpers/
│ └── convert.js # Contiene la función lógica de conversión.
├── printsCLI/ 
│ └── chalk_C_to_F.png
│ └── chalk_F_to_C.png
│ └── chalk_error.png
│ └── chalk_errorParams.png
├── app.js # Punto de entrada principal (maneja yargs, chalk y errores).
├── package.json
├── package-lock.json
└── .gitignore

```
---

## 🚀 Puesta en Marcha y Uso

Para ejecutar la aplicación, debes usar el script `start` definido en `package.json` y pasar los argumentos después de un doble guion (`--`).

### Requisitos

* Tener Node.js instalado.
* Ejecutar `npm install` en la raíz del proyecto.

### Sintaxis de Ejecución

```bash
npm start -- --temp [VALOR] --unidad [c|f]
# O con alias:
npm start -- -t [VALOR] -u [c|f]
