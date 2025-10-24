/**
 * RESTful API Methods Index
 *
 * Export tất cả các HTTP methods với Authorization support
 */

// Auth utilities
export { applyAuthHeaders, createRequestConfig, type AuthOptions } from './authUtils';

// Re-export types
export type { ApiResponse } from '@services/types/response';

// GET method
export { get } from './get';

// POST method
export { post } from './post';

// PUT method
export { put } from './put';

// DELETE method
export { del } from './delete';
