'use server'
import { ClientSchema } from "./formValidationSchema"
import prisma from "./prisma"
type CurrentState = {success: boolean, error: boolean}
export const createClient = async ( currentState:CurrentState, data: ClientSchema ) => {
    try {
        await prisma.client.create({
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
        return {success:true, error: false}
    } catch (err) {
        console.error(err);
       return {success:false, error: true}
    }
};
