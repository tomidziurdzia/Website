"use client";

import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend("re_Uvay16B8_EKTe1qDXiTFvE2sHu7TPCiVB");

export async function POST(req: NextRequest, res: NextResponse) {
  // console.log(await req.json());

  const { email, subject, message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["tomidziurdzia@gmail.com"],
      subject: `${subject}`,
      react: `Recibiste un mail de ${email} con el siguiente mensaje: ${message}`,
    });

    return NextResponse.json(
      { message: "Email sent" },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
