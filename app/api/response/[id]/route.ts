import {NextResponse} from "next/server";
import {authenticate} from "@/middleware/auth";

export async function GET(request: Request, {params}: { params: { id: string } }) {
    const id = params.id
    const response = await prisma.response.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json(response)
}

export async function PATCH(request: Request, {params}: { params: { id: string } }) {
    const id = params.id
    const json = await request.json()

    const updated = await prisma.response.update({
        where: {
            id: parseInt(id)
        },
        data: json
    })
    return NextResponse.json(updated)
}

export async function DELETE(request: Request, {params}: { params: { id: string } }) {
    const id = params.id
    const deleted = await prisma.response.delete({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json(deleted)
}