/**
 * Generates a Logo.dev URL for a given domain.
 * @param domain The domain of the company (e.g., 'google.com')
 * @returns The Logo.dev image URL
 */
export const getLogoUrl = (domain: string): string => {
  const token = import.meta.env.VITE_LOGODEV_TOKEN || 'pk_L8i8yL_ZSt6OqQ7sR9q-xw'; // Fallback to a placeholder or public key if available
  return `https://img.logo.dev/${domain}?token=${token}`;
};
