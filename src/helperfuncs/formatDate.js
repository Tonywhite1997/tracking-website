export const formatDate = (isoDate) => {
  if (!isoDate) return "N/A"; // handle undefined/null
  const date = new Date(isoDate);

  if (isNaN(date)) return "Invalid Date"; // handle invalid string

  return new Intl.DateTimeFormat("en-US", {
    weekday: "long", // Wednesday
    day: "numeric", // 29
    year: "numeric", // 2025
  }).format(date);
};
