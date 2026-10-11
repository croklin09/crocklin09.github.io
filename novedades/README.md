# Novedades

Cada avance de obra se publica en la pestaña **Novedades** del visor.

Para sumar uno nuevo:

1. Subí el PDF a esta carpeta con el nombre `AAAA-MM-avance-de-obra.pdf` (por ejemplo `2026-10-avance-de-obra.pdf`).
2. Opcional: una imagen de portada `AAAA-MM-portada.jpg` (unos 600 px de ancho).
3. Agregá una entrada **al principio** de `novedades.json` (la más reciente primero):

```json
{
  "id": "2026-10",
  "tipo": "Avance de obra",
  "fecha": "2026-10",
  "titulo": "Avance de obra",
  "resumen": "Una o dos oraciones con lo principal del mes.",
  "archivo": "novedades/2026-10-avance-de-obra.pdf",
  "portada": "novedades/2026-10-portada.jpg",
  "paginas": 20
}
```

`id` se usa en el link directo: `…/#novedades/2026-10`. `portada` y `paginas` son opcionales.
Los PDF deben pesar menos de 100 MB (límite de GitHub).
