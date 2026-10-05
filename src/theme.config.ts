/**
 * Omarchy theme settings. Design choices live here; site content (title,
 * tagline, logo, navigation) comes from EmDash settings and menus.
 */
export const themeConfig = {
	/** Palette shown to visitors who haven't picked one. Any id from src/palettes.ts. */
	defaultPalette: "catppuccin-latte",
	/** Show the palette picker in the top bar (choice is remembered in a cookie). */
	paletteSwitcher: true,
	/** Show the clock in the middle of the top bar. */
	clock: true,
} as const;

/** Cookie that stores the visitor's palette choice. */
export const PALETTE_COOKIE = "omarchy-palette";
