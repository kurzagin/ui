/**
 * Shared Formatting Utilities for Web, Desktop (Tauri), and Mobile
 */
/**
 * Format timestamp into relative display string (e.g. 12s, 5m, 3h, 2d, or formatted date)
 */
declare function formatRelativeTime(dateInput: string | Date | number): string;
/**
 * Format duration in seconds to M:SS or H:MM:SS
 */
declare function formatDuration(seconds: number): string;

export { formatDuration, formatRelativeTime };
