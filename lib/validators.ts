export const validatePhone = (phone: string): boolean => {
  return /^\d{10}$/.test(phone);
};

export const validatePassword = (password: string): boolean => {
  if (password.length < 10) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  
  // Check for sequential digits (e.g., 123, 456)
  for (let i = 0; i < password.length - 2; i++) {
    const num1 = parseInt(password[i]);
    const num2 = parseInt(password[i + 1]);
    const num3 = parseInt(password[i + 2]);
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
      if (num2 === num1 + 1 && num3 === num2 + 1) {
        return false;
      }
    }
  }
  return true;
};

export const validateOTP = (otp: string): boolean => {
  return /^\d{6}$/.test(otp);
};


