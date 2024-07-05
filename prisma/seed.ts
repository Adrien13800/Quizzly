import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.role.createMany({
        data: [
            {
                name: "utilisateur",
            },
            {
                name: "administrateur",
            },
        ],
    });

    await prisma.user.createMany({
        data: [
            {
                firstname: "adrien",
                lastname: 'arigo',
                email: "arigoadrien@outlook.com",
                password: "1234",
                pseudo: "kaiyokenn",
                admin: true,
                roleId: 2,
            },
            {
                firstname: "melvin",
                lastname: 'viougea',
                email: "melvinviougea@outlook.com",
                password: "1234",
                pseudo: "chasseurarabe",
                admin: true,
                roleId: 2,
            },
        ],
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
