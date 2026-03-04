const FALLBACK_SECRET = "dev_only_change_me_very_long_secret_string_2026";

export function getJwtSecret() {
  return process.env.JWT_SECRET ?? FALLBACK_SECRET;
}

export const AUTH_COOKIE_NAME = "study_hive_token";

export const JWT_EXPIRATION = "7d";
