import React from 'react';


function Filter({ inputRef, onSearchChange }) {
    const [searchData, setSearchData] = React.useState({ search: "" });

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSearchData(prevSearchData => ({
            ...prevSearchData,
            [name]: value
        }));
        onSearchChange(value);
    };

    return (
        <div className="filter--container">
            <input
                ref={inputRef}
                autoComplete="off"
                className="filter--input"
                onChange={handleChange}
                name="search"
                value={searchData.search}
            />
        </div>
    );
}

export default Filter;
