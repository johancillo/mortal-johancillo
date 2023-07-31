export function getValueOrDefault(value: any, defaultValue: any): any {
  return !isNullOrUndefined(value) ? value : defaultValue;
}

export function getValueOrNull(value: any): any {
  return !isNullOrUndefined(value) ? value : null;
}

export function isNullOrUndefined(value: any): any {
  return value === null || value === undefined;
}

export function formatDate(): Date {
  const date = new Date();
  return date;
}

export function formatDateToTime(): number {
  const date = new Date().getTime();
  return date;
}
