import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { password, clientStoredPassword } = await req.json();

    // Master password loaded securely from server environment (without NEXT_PUBLIC_)
    const serverPassword = process.env.ADMIN_PASSWORD || "webzen2026";

    // Allow access if matching custom password in client state OR server environment master password
    const isValid = Boolean(
      (clientStoredPassword && password === clientStoredPassword) ||
      (password === serverPassword)
    );

    if (isValid) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, message: "পাসওয়ার্ড সঠিক নয়" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "সার্ভার যাচাইকরণে ত্রুটি হয়েছে" },
      { status: 500 }
    );
  }
}
