/* Date utilities to be used across pages. Be careful when changing this file as it may impact multiple pages/components */

export const formatDate = (date, locale = "en-US") => {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(date);
};
