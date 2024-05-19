import bcrypt from "bcrypt";

export const hashPassword = async (passoword) => {
    try {
        const passowordHash = await bcrypt.hash(passoword, 10)
        return passowordHash
    } catch (error) {
        throw new Error('Error al encriptar el password')
    }
}

export const verifyPassword = async (password, hash) => {
    await bcrypt.compare(password, hash)
}