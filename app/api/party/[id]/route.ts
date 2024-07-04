import {NextResponse} from "next/server";
import {authenticate} from "@/middleware/auth";

export async function GET(request: Request, {params}: { params: { id: string } }) {
    const id = params.id
    const party = await prisma.party.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json(party)
}

export async function PATCH(request: Request, {params}: { params: { id: string } }) {
    const id = params.id
    const json = await request.json()

    const updated = await prisma.party.update({
        where: {
            id: parseInt(id)
        },
        data: json
    })
    return NextResponse.json(updated)
}

export async function DELETE(request: Request, {params}: { params: { id: string } }) {
    const id = params.id
    const deleted = await prisma.party.delete({
        where: {
            id: parseInt(id)
        }
    })
    return NextResponse.json(deleted)
}