import {NextResponse} from "next/server";
import {authenticate} from "@/middleware/auth";

export async function GET(request: Request, {params}: { params: { id: string } }) {
    const id = params.id
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json(user)
}

export async function PATCH(request: Request, {params}: { params: { id: string } }) {
    const id = params.id
    const json = await request.json()

    const updated = await prisma.user.update({
        where: {
            id: parseInt(id)
        },
        data: json
    })
    return NextResponse.json(updated)
}

export async function DELETE(request: Request, {params}: { params: { id: string } }) {
    const id = params.id
    const deleted = await prisma.user.delete({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json(deleted)
}