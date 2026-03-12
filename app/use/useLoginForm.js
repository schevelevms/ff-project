import {useField, useForm} from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
export function useLoginForm(){
        const tokenStore = useTokenStore()
        const router = useRouter()
        const {handleSubmit, isSubmitting} = useForm()

        const {value:nickname, errorMessage:eEmail, handleBlur:eBlur} = useField(
            'nickname',
            yup
            .string()
            .trim()
            .required('Пожайлуста введите nickname')
            .min(4, 'nickname должен быть больше 4 символов')
        )
        const {value:password, errorMessage:ePassword, handleBlur:pBlur} = useField(
            'password',
            yup
            .string()
            .trim()
            .required('Пожайлуста введите пароль')
            .min(5, 'Пароль должен быть больше 5 символов')
        )
  
        const submitLogin = handleSubmit( async values => {
                await tokenStore.login(values)
                router.push({name: 'lenta'})  
        })
        const submitRegister = handleSubmit( async values => {
                await tokenStore.register(values)
                router.push({name: 'lenta'})  
        })


        return{
            nickname,
            password,
            eEmail,
            ePassword,
            eBlur,
            pBlur,
            submitLogin,
            submitRegister,
            isSubmitting,
        }
    }