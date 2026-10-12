/** Resolved media reference from getSiteSettings() */
export interface MediaReference {
	mediaId: string;
	alt?: string;
	url?: string;
}

export interface BlogSiteIdentitySettings {
	title?: string;
	tagline?: string;
	logo?: MediaReference;
	favicon?: MediaReference;
}

const DEFAULT_SITE_TITLE = "My Blog";
const DEFAULT_SITE_TAGLINE = "Thoughts, stories, and ideas.";

/**
 * Settings → General → Posts per page.
 * Docs: https://docs.emdashcms.com/guides/site-settings/
 * Key: `postsPerPage` (https://docs.emdashcms.com/themes/porting-wp-themes/)
 * Unset settings are omitted, so callers must keep a fallback.
 * The settings API accepts integers from 1 to 100.
 */
export function resolvePostsPerPage(settings?: { postsPerPage?: number }, fallback = 20) {
	const value = settings?.postsPerPage;
	if (!Number.isFinite(value)) return fallback;
	return Math.min(100, Math.max(1, Math.trunc(value as number)));
}

export function resolveBlogSiteIdentity(settings?: BlogSiteIdentitySettings) {
	return {
		siteTitle: settings?.title ?? DEFAULT_SITE_TITLE,
		siteTagline: settings?.tagline ?? DEFAULT_SITE_TAGLINE,
		siteLogo: settings?.logo?.url ? settings.logo : null,
	};
}
