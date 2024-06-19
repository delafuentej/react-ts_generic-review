import React from 'react'
import { useForm } from 'react-hook-form';


type FormInputs = {
    email: string;
    password: string;
};

export const Forms = () => {
    const {register, handleSubmit, formState, watch }= useForm<FormInputs>({
        defaultValues: {
            email: 'xxxxx@gmail.com',
            password:'123456'
        }
    });

    const onSubmit =(myForm: FormInputs)=>{
        console.log(myForm)
    }
    watch('email')
  return (
    <>
        <h3>Form</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{display:'flex',flexDirection:'column', }}>
                <input type="text" placeholder="email" {...register('email',{required: true})}/>
                <input type="text" placeholder="password" {...register('password',{ required: true})}/>

                <button type='submit'>Login</button>
            </div>
        </form>
        <pre>
            {JSON.stringify(formState, null, 2)}
        </pre>
    
    </>
  )
}
