import { Outlet } from "react-router-dom";
import { useForm } from 'react-hook-form'
import PropTypes from 'prop-types'

function SearchBar({ filter }) {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = (data) => {
        filter(data.text)
        reset();
    }

    return (
        <div >
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Find your film" {...register('text')} />
                <button type="submit">Search</button>
            </form>
            <Outlet />
        </div>

    )
}

export default SearchBar;

SearchBar.propTypes = {
    filter: PropTypes.func.isRequired
}