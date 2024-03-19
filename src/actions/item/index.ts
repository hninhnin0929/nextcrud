'use server';

import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export async function createItem(
    formState: {message: string}, 
    formData: FormData
    ) {
    
    try{
         // Check the user's inputs and make sure they're valid
        const title = formData.get('title') as string;
        const description = formData.get('description') as string;
        console.log("actions");
        console.log("title--------", title);
        console.log("description-----", description);

        if(typeof title != 'string' || title.length < 3){
            return {
                message: 'Title must be longer'
            };
        }

        if(typeof description != 'string' || description.length < 10){
            return {
                message: 'Description must be longer'
            };
        }

        // Create a new record in the database
        

    }catch (err: unknown){
        if(err instanceof Error){
            return {
                message: err.message
            };
        }else{
            return {
                message: 'Something went wrong...'
            };
        }
    }
   
    revalidatePath('/');
    // Redirect the user back to the root route
    redirect('/');

}