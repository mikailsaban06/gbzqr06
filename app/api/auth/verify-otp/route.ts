import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { phone, otp, newPassword } = await request.json();

    if (!phone || !otp || !newPassword) {
      return NextResponse.json(
        { success: false, message: 'Tüm alanlar gereklidir' },
        { status: 400 }
      );
    }

    // Mock OTP verification - fixed code "111111"
    if (otp !== '111111') {
      return NextResponse.json(
        { success: false, message: 'Geçersiz OTP kodu' },
        { status: 400 }
      );
    }

    // Validate new password
    if (newPassword.length < 10) {
      return NextResponse.json(
        { success: false, message: 'Şifre en az 10 karakter olmalıdır' },
        { status: 400 }
      );
    }

    // Mock password reset
    return NextResponse.json({
      success: true,
      message: 'Şifre başarıyla sıfırlandı',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Bir hata oluştu' },
      { status: 500 }
    );
  }
}


