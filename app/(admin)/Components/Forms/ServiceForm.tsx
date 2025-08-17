'use client'
import React, { Dispatch, SetStateAction, useActionState, useEffect, useTransition } from 'react'
import {z} from "zod"
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import InputField from '../InputField'
import Image from 'next/image'
import Upload from '@/Assets/upload.png'
import { serviceSchema, ServiceSchema } from '@/lib/formValidationSchema'
import { createService } from '@/lib/serveractions'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

 

export default function ServiceForm( {type,data,setopen} : {type: "create" | "update"; data?: any; setopen:Dispatch<SetStateAction<boolean>>} ) {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm <ServiceSchema>({
        resolver: zodResolver(serviceSchema),
      });

      const [isPending, startTransition] = useTransition()
            const [state, formAction] = useActionState(createService, {success:false, error:false})
             const onSubmit = handleSubmit((data) => {
              startTransition(() => {
              formAction(data)
          })
        })
      
        //mannual redirect
        const router = useRouter()
      
        useEffect(()=>{
          if (state.success){
            toast(`Client has been ${type === 'create' ? "Added" : "UpDated"} Success!`)
            setopen(false)
            router.refresh()
          }
        },[state])
      
  return (
    
    <div>
      <form  className='flex flex-col gap-8' onSubmit={onSubmit}>
        <h2 className='text-xl font-semibold'>{type === "create"? "Create" : "Up Date"} Service</h2>
        <span className='text-xs text-gray-400 font-semibold'>Service Information</span>
        <div className='flex justify-between flex-wrap gap-4'>
          <InputField 
             label="Service Id"
             name="serviceid"
             defaultValue={data?.serviceid} 
             register={register}
             error={errors.serviceid}/>
             <InputField 
             label="Partner Id"
             name="partnerid"
             defaultValue={data?.partnerid} 
             register={register}
             error={errors.partnerid}/>
          <InputField 
            label="service Name"
            name="name"
            defaultValue={data?.name} 
            register={register}
            error={errors.name}/>
          <InputField 
            label="Specification 1"
            name="spec1"
            defaultValue={data?.spec1} 
            register={register}
            error={errors.name}/>
          <InputField 
            label="Specification 2"
            name="spec2"
            defaultValue={data?.spec2} 
            register={register}
            error={errors.spec2}/>
          <InputField 
            label="Specification 3"
            name="spec3"
            defaultValue={data?.spec3} 
            register={register}
            error={errors.spec3}/>
        </div>
        <div className='flex flex-col gap-2 w-full'>
         <label className='text-xs text-gray-500'>About Service</label>
          <input type="text"
             {...register("details")} 
             defaultValue={data?.details}
             className='ring-[1.5px] ring-gray-300 rounded-md text-xs w-full p-4'/>
           {errors.details?.message && <p className='text-xs text-red-600'>{errors.details?.message.toString()}</p>}
        </div>
        {/* <div className='flex gap-2 w-full md:w-1/4 cursor-pointer'>
         <label className='flex item-center text-xs text-gray-500b cursor-pointer' htmlFor="image">
          <Image src={Upload} alt='Client Profile image' width={28} height={28} />
          <span className='text-gray-500 items-center flex align-middle'>Upload a Photo</span>
         </label>
          <input type='file'
          id='image'
          {...register("image")}
          className='hidden'/>
           {errors.image?.message && <p className='text-xs text-red-600'>{errors.image?.message.toString()}</p>}
        </div> */}
        <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500'>{type === "create" ? "Create" : "Up Date"}</button>
      </form>
    </div>
  )
}
