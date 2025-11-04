export interface User {
  id: string;
  phone: string;
  name: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: User;
}

export interface LoginRequest {
  phone: string;
  password: string;
}

export interface ForgotPasswordRequest {
  phone: string;
}

export interface VerifyOTPRequest {
  phone: string;
  otp: string;
  newPassword: string;
}


