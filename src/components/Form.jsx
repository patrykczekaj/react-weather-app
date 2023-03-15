import React from 'react';

const Form = ({ value, change }) => {

    return (
        <form>
            <input type="text" value={value} onChange={change} placeholder="type city..." />
            <button>Search City</button>
        </form>
    );
};

export default Form;
