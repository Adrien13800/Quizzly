import {NextResponse} from "next/server";


export async function GET(request: Request) {
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