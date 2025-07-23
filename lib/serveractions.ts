'use server'
import { revalidatePath } from "next/cache"
import { ClientSchema } from "./formValidationSchema"
import prisma from "./prisma"

export const createClient = async (data: ClientSchema) => {
    try {
        const created = await prisma.client.create({
            data: {
                name: data.name,
                clientid: data.clientid,
                email: data.email,
                phone: data.phone,
                location: data.location,
                addressline1: data.addressline1,
                addressline2: data.addressline2,
                addressline3: data.addressline3,
                contactperson: data.contactperson,
                details: data.details,
               
            },
        });
        revalidatePath("/clients")
        return { success: true, error: false };
    } catch (error: any) {
        console.error("Prisma error:", error);
        return { success: false, error: true, message: error.message };
    }
};

