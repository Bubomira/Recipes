import {useState} from 'react'

export default function useRecipeValidator (){
    let [errors, setErrors] = useState({
        title: '',
        ingridients: '',
        imageUrl: '',
        steps: ''
    })
    const lengthValidator = (e, minLength) => {
        setErrors(oldErrors => ({
            ...oldErrors,
            [e.target.name]: e.target.value.length < minLength
        }))
    }
    const imageUrlValidator = (e) => {
        setErrors(oldErrors => ({
            ...oldErrors,
            imageUrl: !e.target.value.startsWith('https://')
        }))
    }


    return [
        errors,
        lengthValidator,
        imageUrlValidator
    ]

}