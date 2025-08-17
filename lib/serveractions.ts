'use server'
import { ClientSchema, PartnerSchema, ProductSchema,ServiceSchema } from "./formValidationSchema"
import prisma from "./prisma"
type CurrentState = {success: boolean, error: boolean}
//Clients Create
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

//Clients Update

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

//Clients Delete

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


//Partners Create

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

//Partners Update

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

//Partners Delete

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


//Products Create

export const createProduct = async ( currentState:CurrentState, data: ProductSchema ) => {
    try {
        await prisma.product.create({
            data: {
                name: data.name,
                productid: data.productid,
                partnerid:data.partnerid,
                details: data.details,
                spec1:data.spec1,
                spec2:data.spec2,
                spec3:data.spec3,
            },
        });
        return {success:true, error: false}
    } catch (err) {
        console.error(err);
       return {success:false, error: true}
    }
};

//service

export const createService = async ( currentState:CurrentState, data: ServiceSchema ) => {
    try {
        await prisma.product.create({
            data: {
                name: data.name,
                partnerid:data.partnerid,
                serviceid:data.serviceid,
                details: data.details,
                spec1:data.spec1,
                spec2:data.spec2,
                spec3:data.spec3,
            },
        });
        return {success:true, error: false}
    } catch (err) {
        console.error(err);
       return {success:false, error: true}
    }
};