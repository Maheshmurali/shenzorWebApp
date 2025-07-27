'use server'
import { ClientSchema, PartnerSchema } from "./formValidationSchema"
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

export const updateClient = async ( currentState:CurrentState, data: ClientSchema ) => {
    try {
        await prisma.client.update({
            where:{
                id:data.id
            },
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


export const deleteClient = async ( currentState:CurrentState, data: FormData ) => {

    const id = data.get("id") as string
    try {
        await prisma.client.delete({
            where:{
                id:id
            },
        });
        return {success:true, error: false}
    } catch (err) {
        console.error(err);
       return {success:false, error: true}
    }
};


//Partners 

export const createPartner = async ( currentState:CurrentState, data: PartnerSchema ) => {
    try {
        await prisma.partner.create({
            data: {
                name: data.name,
                partnerid: data.partnerid,
                email: data.email,
                phone: data.phone,
                location: data.location,
                contactperson: data.contactperson,
                
            },
        });
        return {success:true, error: false}
    } catch (err) {
        console.error(err);
       return {success:false, error: true}
    }
};

export const updatePartner = async ( currentState:CurrentState, data: PartnerSchema ) => {
    try {
        await prisma.partner.update({
            where:{
                id:data.id
            },
            data: {
               name: data.name,
                partnerid: data.partnerid,
                email: data.email,
                phone: data.phone,
                location: data.location,
                contactperson: data.contactperson,
            },
        });
        return {success:true, error: false}
    } catch (err) {
        console.error(err);
       return {success:false, error: true}
    }
};



export const deletePartner= async ( currentState:CurrentState, data: FormData ) => {

    const id = data.get("id") as string
    try {
        await prisma.partner.delete({
            where:{
                id:id
            },
        });
        return {success:true, error: false}
    } catch (err) {
        console.error(err);
       return {success:false, error: true}
    }
};