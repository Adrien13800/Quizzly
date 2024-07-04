import {NextResponse} from "next/server";
import {authenticate} from "@/middleware/auth";

export async function GET(request: Request) {
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