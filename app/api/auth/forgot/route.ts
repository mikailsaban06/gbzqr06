import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { phone } = await request.json();

    if (!phone) {
      return NextResponse.json(
        { success: false, message: 'Telefon numarası gereklidir' },
        { status: 400 }
      );
    }

    if (phone.length !== 10) {
      return NextResponse.json(
        { success: false, message: 'Telefon numarası 10 haneli olmalıdır' },
        { status: 400 }
      );
    }

    // Mock OTP send
    return NextResponse.json({
      success: true,
      message: 'OTP kodu gönderildi',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Bir hata oluştu' },
      { status: 500 }
    );
  }
}


