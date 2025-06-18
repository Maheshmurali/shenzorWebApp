'use client'
import React from 'react'
import {z} from "zod"
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import InputField from '../InputField'
import Image from 'next/image'
import Upload from '@/Assets/upload.png'

    const schema = z.object({
        name: z.string().min(3, { message: 'Required' })
        .max(10, {message: 'Max 10 Charactor '} ),
        clientid:z.string(),
        email: z.string().email({message:'Please Enter a Valid Email'}),
        password:z.string().min(8,{message:'Minimun 8 Charractors Require'})
        .regex(/[A-Z]/, { message: "Must contain at least one uppercase letter" })
        .regex(/[\W_]/, { message: "Must contain at least one special character" }),
        phone:z.string()
        .min(10,{message: "In Valid Phone Number"})
        .max(10,{message: "Invalid Phone Number"}),
        location:z.string()
        .max(12,{message: "Location Required"})
        .min(2,{message: "Location Required"}),
        addressline1: z.string()
        .max(12,{message: " Required"})
        .min(2,{message: " Required"}),
        addressline2: z.string()
        .max(12,{message: " Required"})
        .min(2,{message: " Required"}),
        addressline3: z.string()
        .max(12,{message: " Required"})
        .min(2,{message: " Required"}),
        contactperson:z.string().min(1,{message:"Name Required"}),
        image:z.instanceof(File,{message:"Client Image Required"}),
        details:z.string().max(50,{message:"MustBe 50 Charactor"})
        .optional()
      }); 

      type Inputs = z.infer<typeof schema>;

export default function Clientform( {type,data} : {type: "create" | "update"; data?: any} ) {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm <Inputs>({
        resolver: zodResolver(schema),
      });

      const onSubmit = handleSubmit(data=>{
        console.log(data)
      })
  return (
    
    <div>
      <form action="" className='flex flex-col gap-8' onSubmit={onSubmit}>
        <h2 className='text-xl font-semibold'>Create New Client</h2>
        <span className='text-xs text-gray-400 font-semibold'>Client Information</span>
        <div className='flex justify-between flex-wrap gap-4'>
          <InputField 
             label="Client Id"
             name="clientid"
             defaultValue={data?.clientid} 
             register={register}
             error={errors.clientid}/>
          <InputField 
            label="Client Name"
            name="name"
            defaultValue={data?.name} 
            register={register}
            error={errors.name}/>
           <InputField 
            label="Email"
            name="email"
            defaultValue={data?.email} 
            register={register}
            error={errors.email}/>
           <InputField 
            label="Contact Number"
            name="phone"
            defaultValue={data?.phone} 
            register={register}
            error={errors.phone}/>
           <InputField 
            label="Locations"
            name="location"
            defaultValue={data?.location} 
            register={register}
            error={errors.location}/>
          <InputField 
            label="Street"
            name="adressline1"
            defaultValue={data?.addressline1} 
            register={register}
            error={errors.addressline1}/>
            <InputField 
            label="Region"
            name="adressline2"
            defaultValue={data?.addressline2} 
            register={register}
            error={errors.addressline2}/>
            <InputField 
            label="Country"
            name="adressline3"
            defaultValue={data?.addressline3} 
            register={register}
            error={errors.addressline3}/>
            <InputField 
            label="Manager Name"
            name="contactperson"
            defaultValue={data?.contactperson} 
            register={register}
            error={errors.contactperson}/>
            <InputField 
             label = "Password"
             name = "password"
             defaultValue={data?.password}
             register = {register}
             type = "password"
             error = {errors.password}/>
        </div>
        <div className='flex flex-col gap-2 w-full'>
         <label className='text-xs text-gray-500'>Company Bio</label>
          <input type="text"
             {...register("name")} 
             defaultValue={data?.details}
             className='ring-[1.5px] ring-gray-300 rounded-md text-xs w-full p-4'/>
           {errors.details?.message && <p className='text-xs text-red-600'>{errors.details?.message.toString()}</p>}
        </div>
        <div className='flex gap-2 w-full md:w-1/4 cursor-pointer'>
         <label className='flex item-center text-xs text-gray-500b cursor-pointer' htmlFor="image">
          <Image src={Upload} alt='Client Profile image' width={28} height={28} />
          <span className='text-gray-500 items-center flex align-middle'>Upload a Photo</span>
         </label>
          <input type='file'
          id='image'
          {...register("image")}
          className='hidden'/>
           {errors.image?.message && <p className='text-xs text-red-600'>{errors.image?.message.toString()}</p>}
        </div>
        <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500'>{type === "create" ? "Create" : "UpDate"}</button>
      </form>
    </div>
  )
}
