import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json()

    const validUsername = process.env.LAB_UPDATE_USERNAME
    const validPassword = process.env.LAB_UPDATE_PASSWORD

    if (!validUsername || !validPassword) {
      return NextResponse.json(
        { success: false, message: "Login is not configured." },
        { status: 500 }
      )
    }

    if (username === validUsername && password === validPassword) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { success: false, message: "Invalid username or password." },
      { status: 401 }
    )
  } catch {
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    )
  }
}