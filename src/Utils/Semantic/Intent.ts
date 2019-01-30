import StringEnum from '../StringEnum';
export const Intent = StringEnum(['success', 'warning', 'error', 'info']);
export type Intent = keyof typeof Intent;