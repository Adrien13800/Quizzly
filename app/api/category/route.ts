import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";


export async function GET() {
    const category = await prisma.category.findMany()
    return NextResponse.json(category)
}

export async function POST(request: Request) {
    const json = await request.json()
    const created = await prisma.category.create({
        data: json
    })

    return new NextResponse(JSON.stringify(created), {status: 201})
}