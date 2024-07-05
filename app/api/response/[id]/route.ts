import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";


export async function GET({params}: { params: { id: string } }) {
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

export async function DELETE({params}: { params: { id: string } }) {
    const id = params.id
    const deleted = await prisma.response.delete({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json(deleted)
}