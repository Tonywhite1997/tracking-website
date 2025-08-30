export default function optimizedStatus(value) {
  const map = {
    Processing: "Package is being processed",
    "On Hold": "Package is being held",
    "In Transit": "Package is in transit",
    Released: "Package has been released",
    Damaged: "Package is damaged",
    Ready: "Out for delivery",
    Delivered: "Package has been delivered",
  };
  return map[value] || "Unknown status";
}
