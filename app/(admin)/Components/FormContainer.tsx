import prisma from "@/lib/prisma";
import FormModal from "./FormModal";

export type FormContainerProps = {
    table: 
    |"client"
    |"partner"
    |"order"
    |"product"
    |"service";
    type: "create" | "update" | "delete";
    data?: "any";
    id?:number | string;
}


const FormContainer = async({
    table,
    type,
    data,
    id,
}:FormContainerProps) => {

    let relatedData = {}

    if(type !== "delete"){
        switch(table){
            case "client":
                const clientOrder = await prisma.order.findMany({
                    select: {id: true, products:true, services: true, clientid: true}
                });
                 relatedData = {order: clientOrder}
             break

            default:
                break;
        }
    }

    return(
        <div>
            <FormModal table={table} type={type} data={data} id={id} relatedData={relatedData}/>
        </div>
    )
}

export default FormContainer