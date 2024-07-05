import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

export async function GET() {
    const user = await prisma.user.findMany()
    return NextResponse.json(user)
}

export async function POST(request: Request) {
    const json = await request.json()
    const created = await prisma.user.create({
        data: json
    })
    return new NextResponse(JSON.stringify(created), {status: 201})
}