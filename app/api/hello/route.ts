import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({message: "Hello from api!"})
}

export async function POST(req: Request) {
    const data = await req.json();
    const {name} = data;

    console.log("Received data:", data);
    return NextResponse.json({message: `Hello, ${name}!, this was sent from the api`});
}