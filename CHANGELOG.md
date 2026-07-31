# Changelog

All notable changes to this project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.2] - 2026-07-31

### Added
- **Edge Resize Handles:** Native edge handles (top, bottom, left, right) with directional cursor feedback in addition to corner handles.
- **Integer Coordinates (`integerCoordinates`):** Prop to automatically round all annotation coordinates (`x`, `y`, `width`, `height`) to integers.
- **Edge Snapping (`snapToEdges`, `snapThreshold`):** Magnetically snap annotation edges to other boxes and image borders during dragging or resizing, including multi-select group snapping.
- **Documentation & Workflows:** Updated README with live demo link and comprehensive prop/type references; added PR preview deployments.

## [0.1.1] - 2026-07-29

### Fixed
- Internal package build and dependency updates.

## [0.1.0] - Initial release

First public version.

### Features

- `ImageAnnotator` React component for drawing rectangular annotations on an image via an HTML canvas overlay.
- **Generic categories.** Annotations reference user-defined `Category` objects (`id`, `label`, `color`, `fillOpacity`). The library has no opinion on what categories *mean*.
- **Orthogonal modes:** `drawingEnabled`, `editingEnabled`, and `selectionMode` (`'single' | 'multi' | 'none'`) compose freely.
- **Interactions:** draw new annotations, drag corners to resize, drag body to move, click to (de)select, shift/cmd/ctrl-click to multi-select, click delete icon to remove.
- **Pointer Events** with `setPointerCapture` — works with mouse, trackpad, stylus, or touch out of the box.
- **Keyboard shortcuts:** `Delete`/`Backspace` to delete, `Esc` to deselect, arrow keys to nudge by 1 px (10 px with Shift).
- **Responsive image scaling** via `ResizeObserver`; annotation coordinates stay in natural image pixels regardless of rendered size or DPI.
- **High-DPI rendering** (canvas backing store scaled by `window.devicePixelRatio`).
- **Optional labels** (`showLabels`) render the category label inside each annotation.
- **Theming** via the `theme` prop (selection stroke, draft colors, handle size/color, label colors, fallback color).
- Ships **ESM + CJS** bundles with TypeScript declarations.
