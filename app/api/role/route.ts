import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";


export async function GET() {
    const response = await prisma.response.findMany()
    return NextResponse.json(response)
}

export async function POST(request: Request) {
    const json = await request.json()
    const created = await prisma.response.create({
        data: json
    })

    return new NextResponse(JSON.stringify(created), {status: 201})
}