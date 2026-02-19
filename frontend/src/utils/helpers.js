// ===========================================
// 🔥 helpers.js — Common Utility Functions
// ===========================================

// -------------------------
// ⭐ Validate Mobile Number
// -------------------------
export const isValidMobile = (mobile) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(mobile);
};

// -------------------------
// ⭐ Validate Email (Optional)
// -------------------------
export const isValidEmail = (email) => {
  if (!email) return true;  // email optional allowed
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

// -------------------------
// ⭐ Validate Name
// -------------------------
export const isValidName = (name) => {
  return name && name.trim().length >= 3;
};

// -------------------------
// ⭐ Validate Address
// -------------------------
export const isValidAddress = (address) => {
  return address && address.trim().length >= 5;
};

// -------------------------
// ⭐ Format Date
// -------------------------
export const formatDate = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

// -------------------------
// ⭐ Generate Random ID
// -------------------------
export const generateLeadID = () => {
  return "LEAD-" + Math.random().toString(36).substring(2, 10).toUpperCase();
};

// -------------------------
// ⭐ Validate KW (Plant Size For Service)
// -------------------------
export const isValidKW = (kw) => {
  if (!kw) return false;
  return !isNaN(kw) && Number(kw) >= 1 && Number(kw) <= 10000;
};

// -------------------------
// ⭐ Validate Monthly Bill
// -------------------------
export const isValidBill = (bill) => {
  if (!bill) return false;
  return !isNaN(bill) && Number(bill) >= 100;
};
