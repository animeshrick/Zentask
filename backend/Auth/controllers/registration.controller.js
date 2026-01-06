const prisma = require("prisma/config");
const { hashPassword, verifyPassword } = require("../services/password");


class AuthController {
    static async register(req , res){
        let email = req.email;
        let passwordHash = await hashPassword(req.password);
        let create_user = prisma.user.create({data: { email, credentials: { create: {provider: "email", passwordHash,}}}});
        return create_user;
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