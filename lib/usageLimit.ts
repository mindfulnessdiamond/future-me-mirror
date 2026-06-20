const USAGE_KEY = "fmm_used";

export function hasUsed(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(USAGE_KEY) === "true";
}

export function markAsUsed(): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(USAGE_KEY, "true");
}
