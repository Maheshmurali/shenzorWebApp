import {z} from 'zod'
import { Orders } from './data';

    export const clientSchema = z.object({
         id: z.string().optional(),
        name: z.string().min(3, { message: 'Required' }),
        clientid:z.string(),
        email: z.string().email({message:'Please Enter a Valid Email'}),
        password:z.string().min(8,{message:'Minimun 8 Charractors Require'})
        .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
        .regex(/[\W_]/, { message: "Must contain at least one special character" }),
        phone:z.string()
        .min(10,{message: "In Valid Phone Number"})
        .max(10,{message: "Invalid Phone Number"}),
        location:z.string()
        .min(2,{message: "Location Required"}),
        addressline1: z.string().min(1,{message: "Street Required"}),
        addressline2: z.string()
        .min(2,{message: "Region Required"}),
        addressline3: z.string()
        .min(2,{message: "Country Required"}),
        contactperson:z.string().min(1,{message:"Name Required"}),
        // img:z.instanceof(File,{message:"Client Image Required"}).optional(),
        details:z.string().max(50,{message:"MustBe 50 Charactor"})
        .optional(),
        orders: z.array(z.string()).optional()
      }); 

     export type ClientSchema = z.infer<typeof clientSchema>;


      export const partnerSchema = z.object({
        id:z.string().optional(),
        name: z.string().min(3, { message: 'Partner Name Required' })
        .max(30, {message: 'Max 30 Charactor '} ),
        partnerid:z.string(),
        email: z.string().email({message:'Please Enter a Valid Email'}),
        phone:z.string().min(10,{message: "In Valid Phone Number"})
        .max(30,{message: "Invalid Phone Number"}),
        location:z.string().max(30,{message: "Location Required"}).min(2,{message: "Location Required"}),
        contactperson:z.string().min(1,{message:"Name Required"}),
        image:z.string().optional(),
      }); 

      export type PartnerSchema = z.infer<typeof partnerSchema>;


    // export  const productSchema = z.object({
    //           name: z.string().min(3, { message: 'Product Name Required' })
    //           .max(10, {message: 'Max 10 Charactor '} ),
    //           productid:z.string(),
    //           spec1:z.string(),
    //           spec2:z.string(),
    //           spec3:z.string(),
    //           contactperson:z.string().min(1,{message:"Name Required"}),
    //           image:z.instanceof(File,{message:"Partner Image Required"}),
    //           details:z.string().max(50,{message:"MustBe 50 Charactor"}).optional()
    //         }); 
      
    //       export type productSchema = z.infer<typeof productSchema>;

    
    //  export  const serviceSchema = z.object({
    //         name: z.string().min(3, { message: ' Name Of Service Required' })
    //         .max(10, {message: 'Max 10 Charactor '} ),
    //         serviceid:z.string(),
    //         contactperson:z.string().min(1,{message:"Name Required"}),
    //         image:z.instanceof(File,{message:"Service Image Required"}),
    //         details:z.string().max(50,{message:"MustBe 50 Charactor"}).optional()
    //       }); 
    
    //     export  type serviceSchema = z.infer<typeof serviceSchema>;