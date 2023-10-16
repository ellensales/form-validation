import { useForm } from 'react-hook-form';
import { isEmail } from "validator";
import './styles.css'


export default function Form(){

    const { register, handleSubmit, formState: { errors }, } = 
    useForm({ defaultValues: {name:'', email:'', password: ''}});

    const onSubmit = (data) => {
        alert(JSON.stringify(data))

    }

    return(
        <div className="form" >
            <div className="class-input">
                <input
                    className={errors?.name && "input-error"}
                    type="text"
                    placeholder="Enter your name..."
                    {...register("name", {required: true})}
                />
                {errors?.name?.type === "required" && (<p className="error-message">Name is required.</p>)}
            </div>
            <div className="class-input">
                <input
                    className={errors?.email && "input-error"}
                    type="email"
                    placeholder="Enter your e-mail..."
                    {...register("email", {required: true, validate: (value) => isEmail(value), })}
                />
                {errors?.email?.type === "required" && (<p className="error-message">E-mail is required.</p>)}
                {errors?.email?.type === "validate" && (<p className="error-message">E-mail is invalid.</p>)}
            </div>

            <div className="class-input">
                <input
                    className={errors?.password && "input-error"}
                    type="password"
                    placeholder="Enter your password."
                    {...register("password", {required: true, minLength: 7})}
                />
                {errors?.password?.type === "required" && (<p className="error-message">Password is required.</p>)}
                {errors?.password?.type === "minLength" && (<p className="error-message">Password needs to have at least 7 characters.</p>)}
            </div>
            <button className="class-button" onClick={() => handleSubmit(onSubmit)()}>Sign up</button>
        </div>
    )
}