import { useState } from 'react'

import './RecipeSearch.css'

export default function RecipeSearch() {
    let [name, setName] = useState('')
    const onChangeHandler = (e) => {
        setName(oldName => (e.target.value))
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(name)
    }
    return (
        <form className="search-form" onSubmit={onSubmitHandler}>
            <input type="text"
                className="search-input"
                placeholder="search recipe title here..."
                value={name}
                onChange={onChangeHandler}
            />
            <input type="submit" className="search-submit" value="Search" />
        </form>
    )
}