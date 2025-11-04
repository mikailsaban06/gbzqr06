import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { phone, password } = await request.json();

    // Mock validation
    if (!phone || !password) {
      return NextResponse.json(
        { success: false, message: 'Telefon ve şifre gereklidir' },
        { status: 400 }
      );
    }

    if (phone.length !== 10) {
      return NextResponse.json(
        { success: false, message: 'Telefon numarası 10 haneli olmalıdır' },
        { status: 400 }
      );
    }

    // Mock user authentication
    // In real scenario, this would check against database
    const mockUser = {
      id: '1',
      phone: phone,
      name: 'Test User',
    };

    const mockToken = `mock_token_${Date.now()}`;

    return NextResponse.json({
      success: true,
      message: 'Giriş başarılı',
      token: mockToken,
      user: mockUser,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Bir hata oluştu' },
      { status: 500 }
    );
  }
}


