import {NextResponse} from "next/server";


export async function GET(request: Request) {
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