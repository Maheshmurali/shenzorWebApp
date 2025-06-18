'use client'
import React from 'react'
import {z} from "zod"
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import InputField from '../InputField'
import Image from 'next/image'
import Upload from '@/Assets/upload.png'

    const schema = z.object({
        name: z.string().min(3, { message: ' Name Of Service Required' })
        .max(10, {message: 'Max 10 Charactor '} ),
        serviceid:z.string(),
        contactperson:z.string().min(1,{message:"Name Required"}),
        image:z.instanceof(File,{message:"Service Image Required"}),
        details:z.string().max(50,{message:"MustBe 50 Charactor"}).optional()
      }); 

      type Inputs = z.infer<typeof schema>;

export default function ServiceForm( {type,data} : {type: "create" | "update"; data?: any} ) {

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
        <h2 className='text-xl font-semibold'>Create New Service</h2>
        <span className='text-xs text-gray-400 font-semibold'>Service Information</span>
        <div className='flex justify-between flex-wrap gap-4'>
          <InputField 
             label="Service Id"
             name="serviceid"
             defaultValue={data?.serviceid} 
             register={register}
             error={errors.serviceid}/>
          <InputField 
            label="service Name"
            name="name"
            defaultValue={data?.name} 
            register={register}
            error={errors.name}/>

            <InputField 
            label="Resprasanative Name"
            name="contactperson"
            defaultValue={data?.contactperson} 
            register={register}
            error={errors.contactperson}/>
        </div>
        <div className='flex flex-col gap-2 w-full'>
         <label className='text-xs text-gray-500'>About Service</label>
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
