'use client'
import React, { useActionState, useEffect, useTransition, Dispatch, SetStateAction, } from 'react'
import {useForm} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import InputField from '../InputField'
import Image from 'next/image'
import Upload from '@/Assets/upload.png'
import { clientSchema,ClientSchema } from '@/lib/formValidationSchema'
import { createClient, updateClient } from '@/lib/serveractions'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'


export default function Clientform( {type,data,setopen,relatedData} : {type: "create" | "update"; data?: any;
   setopen:Dispatch<SetStateAction<boolean>>; relatedData?:any} ) {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm <ClientSchema>({
        resolver: zodResolver(clientSchema),
      });
      const [isPending, startTransition] = useTransition()
      const [state, formAction] = useActionState(type ==="create" ? createClient : updateClient, {success:false, error:false})
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
        <h2 className='text-xl font-semibold'>{type === "create"? "Create New" : "Update"} Client</h2>
        <span className='text-xs text-gray-400 font-semibold'>Client Information</span>
        <div className='flex justify-between flex-wrap gap-4'>
          <InputField 
             label="Client Id"
             name="clientid"
             defaultValue={data?.clientid} 
             register={register}
             error={errors.clientid}/>
          {data && <InputField 
             label="Id"
             name="id"
             defaultValue={data?.id} 
             register={register}
             error={errors.id}
             hidden/>}
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
            name="addressline1"
            defaultValue={data?.addressline1} 
            register={register}
            error={errors.addressline1}/>
            <InputField 
            label="Region"
            name="addressline2"
            defaultValue={data?.addressline2} 
            register={register}
            error={errors.addressline2}/>
            <InputField 
            label="Country"
            name="addressline3"
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
        {state.error && <span className='text-red-500'>Something Wrong...!</span>}
        <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500'>{type === "create" ? "Create" : "UpDate"}</button>
      </form>
    </div> 
  )
}
