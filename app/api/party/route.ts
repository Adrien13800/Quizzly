import {NextResponse} from "next/server";
import {authenticate} from "@/middleware/auth";

export async function GET(request: Request) {
    const party = await prisma.party.findMany()
    return NextResponse.json(party)
}

export async function POST(request: Request) {
    const json = await request.json()
    const created = await prisma.party.create({
        data: json
    })

    return new NextResponse(JSON.stringify(created), {status: 201})
}