import { Outlet } from "react-router-dom";
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'

function SearchBar({ filter }) {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        console.log(data.text)
        filter(data.text)
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Find your film" {...register('text')} />
                <button type="submit">Search</button>
            </form>
            <Outlet />
        </>

    )
}

export default SearchBar;

SearchBar.propTypes = {
    filter: PropTypes.func.isRequired
}