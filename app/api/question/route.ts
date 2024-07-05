import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";


export async function GET() {
    const question = await prisma.question.findMany()
    return NextResponse.json(question)
}

export async function POST(request: Request) {
    const json = await request.json()
    const created = await prisma.question.create({
        data: json
    })

    return new NextResponse(JSON.stringify(created), {status: 201})
}