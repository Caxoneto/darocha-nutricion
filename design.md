# Design System (`design.md`) — Roman Method

Este documento establece las reglas deterministas de diseño para eliminar antipatrones de UI ("AI Slop") y garantizar un acabado estético de nivel superior.

---

## 1. Tokens de Color (Variables CSS Semánticas)

| Token | Valor HSL / Hex | Propósito |
| :--- | :--- | :--- |
| `--bg-base` | `#050608` (`hsl(220, 23%, 3%)`) | Fondo principal de página |
| `--bg-surface` | `#140906` (`hsl(14, 43%, 5%)`) | Fondos de tarjetas y contenedores |
| `--bg-elevated` | `rgba(255, 255, 255, 0.03)` | Tarjetas con `backdrop-filter: blur(30px)` |
| `--text-primary` | `#fcdcd3` (`hsl(14, 88%, 91%)`) | Texto principal de alto contraste (WCAG AA) |
| `--text-secondary` | `#c2c7cd` (`hsl(213, 10%, 78%)`) | Texto secundario y descripciones |
| `--accent-primary` | `#ff571a` (`hsl(16, 100%, 55%)`) | Color principal de acción / Neón Naranja |
| `--accent-glow` | `rgba(255, 87, 26, 0.35)` | Brillos de sombra y elementos activos |
| `--border-subtle` | `rgba(198, 198, 204, 0.15)` | Bordes sutiles de separación |
| `--border-active` | `rgba(255, 87, 26, 0.5)` | Bordes al pasar el cursor (hover) |

---

## 2. Tipografía y Escala Modular

- **Display / Titulares**: `Anybody` (Pesos: 700 Bold, 800 ExtraBold, Mayúsculas, `letter-spacing: -0.04em`).
- **Cuerpo de Texto**: `Hanken Grotesk` (Pesos: 400 Regular, 500 Medium, `line-height: 1.6`).
- **Etiquetas Técnicas / Datos**: `JetBrains Mono` (Pesos: 600 SemiBold, Mayúsculas, `letter-spacing: 0.1em`).

---

## 3. Sombras y Bordes (`border-radius`)

- **Bordes (Radius)**:
  - Botones y Badges pequeños: `4px` - `6px` (`rounded-md`).
  - Tarjetas y Contenedores: `12px` - `16px` (`rounded-xl`).
- **Sombras (Glows)**:
  - Tarjeta normal: `shadow-[0_4px_20px_rgba(0,0,0,0.4)]`
  - Tarjeta Hover / CTA Active: `shadow-[0_0_30px_rgba(255,87,26,0.35)]`

---

## 4. Auditoría Anti-Antipatrones (Cero AI Slop)

1. **Sin bordes inconclusos**: Todos los bordes de contenedor usan opacidades suaves (`rgba(198, 198, 204, 0.15)`) para evitar líneas duras desagradables.
2. **Jerarquía estricta**: Un único `<h1>` en el Hero, secciones secundarias con `<h2>`, sub-pasos con `<h3>`.
3. **Contraste garantizado**: Todos los elementos de texto superan la proporción de contraste 4.5:1 exigida por WCAG 2.1 AA.
4. **Placeholders reales**: No hay imágenes genéricas ni textos aleatorios; se emplean gráficos de marca e isotipo vectorial SVG.
5. **UI Viva**: Transiciones fluidas en hover (200ms `ease-in-out`), efectos de escala `active:scale-95` en botones y feedback interactivo.
