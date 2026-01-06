const prisma = require("../services/db");
const { hashPassword, verifyPassword } = require("../services/password");


class AuthController {
    static async register(req , res){
        let email = res.email;
        let passwordHash = await hashPassword(res.password);
        console.log("mauuu:", Object.keys(prisma));
        const createUser = await prisma.user.create({
            data: {
                email,
                credentials: {
                    create: {
                        provider: "email",
                        passwordHash,
                    },
                },
            },
        });

        return createUser;
    }

    static async login({ email, password }) {
        const credential = await prisma.authCredential.findFirst({
        where: {
            provider: "email",
            user: { email },
        },
        include: { user: true },
        });

        if (!credential || !credential.passwordHash) {
        throw new Error("Invalid credentials");
        }

        const valid = await verifyPassword(password, credential.passwordHash);
        if (!valid) throw new Error("Invalid credentials");

        return credential.user;
    }
}

module.exports = AuthController;