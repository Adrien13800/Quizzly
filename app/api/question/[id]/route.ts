import {NextResponse} from "next/server";


export async function GET(request: Request, {params}: { params: { id: string } }) {
    const id = params.id
    const question = await prisma.question.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json(question)
}

export async function PATCH(request: Request, {params}: { params: { id: string } }) {
    const id = params.id
    const json = await request.json()

    const updated = await prisma.question.update({
        where: {
            id: parseInt(id)
        },
        data: json
    })
    return NextResponse.json(updated)
}

export async function DELETE(request: Request, {params}: { params: { id: string } }) {
    const id = params.id
    const deleted = await prisma.question.delete({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json(deleted)
}