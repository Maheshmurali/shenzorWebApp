'use client'
import React, { Dispatch, SetStateAction, useActionState, useEffect, useTransition } from 'react'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import InputField from '../InputField'
import Image from 'next/image'
import Upload from '@/Assets/upload.png'
import { PartnerSchema, partnerSchema } from '@/lib/formValidationSchema'
import { toast } from 'react-toastify'
import { createPartner, updatePartner} from '@/lib/serveractions'
import { useRouter } from 'next/navigation'

   

export default function PartnerForm( {type,data,setopen} : {type: "create" | "update"; data?: any; setopen:Dispatch<SetStateAction<boolean>>;} ) {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm <PartnerSchema>({
        resolver: zodResolver(partnerSchema),
      });
   const [isPending, startTransition] = useTransition()
      const [state, formAction] = useActionState(type === "create"? createPartner : updatePartner, {success:false, error:false})
       const onSubmit = handleSubmit((data) => {
          startTransition(() => {
          formAction(data)
     })
  })
    const router = useRouter()
  
    useEffect(()=>{
      if (state.success){
        toast(`Partner has been ${type === 'create' ? "Added" : "UpDated"} Success!`)
        setopen(false)
        router.refresh()
      }
    },[state])


  return (
    
    <div>
      <form className='flex flex-col gap-8' onSubmit={onSubmit}>
        <h2 className='text-xl font-semibold'>{type=== "create" ? "Create New" : "Upadate" } Partner</h2>
        <span className='text-xs text-gray-400 font-semibold'>Partner Information</span>
        <div className='flex justify-between flex-wrap gap-4'>
          <InputField 
             label="Partner Id"
             name="partnerid"
             defaultValue={data?.partnerid} 
             register={register}
             error={errors.partnerid}/>
            {data &&
             <InputField 
                label=" Id"
                name="id"
                register={register}
                defaultValue={data?.id}
                error={errors.id}
                hidden/>}
          <InputField 
            label="Partner Name"
            name="name"
            register={register}
            defaultValue={data?.name} 
            error={errors.name}/>
           <InputField 
            label="Email"
            name="email"
            register={register}
            defaultValue={data?.email} 
            error={errors.email}/>
           <InputField 
            label="Contact Number"
            name="phone"
            register={register}
            defaultValue={data?.phone} 
            error={errors.phone}/>
           <InputField 
            label="Location"
            name="location"
            register={register}
            defaultValue={data?.location} 
            error={errors.location}/>
            <InputField 
            label="Resprasanative Name"
            name="contactperson"
            register={register}
            defaultValue={data?.contactperson}
            error={errors.contactperson}/>
        </div>
        {/* <div className='flex flex-col gap-2 w-full'>
         <label className='text-xs text-gray-500'>Company Bio</label>
          <input type="text"
             {...register("name")} 
             defaultValue={data?.details}
             className='ring-[1.5px] ring-gray-300 rounded-md text-xs w-full p-4'/>
           {errors.details?.message && <p className='text-xs text-red-600'>{errors.details?.message.toString()}</p>}
        </div> */}
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
         {state.error && <span>Something Went Wrong...!</span>} 
        <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500'>{type === "create" ? "Create" : "Up Date"}</button>
      </form>
    </div>
  )
}
