import React from "react";

const useInterests = () => {
    const [openInterest1, setOpenInterest1] = React.useState(false);
    const [openInterest2, setOpenInterest2] = React.useState(false);
    const [openInterest3, setOpenInterest3] = React.useState(false);
    const [openInterest4, setOpenInterest4] = React.useState(false);

    const handleChange1 = () => {
        setOpenInterest1((prev) => !prev);
    };
    const handleChange2 = () => {
        setOpenInterest2((prev) => !prev);
    };
    const handleChange3 = () => {
        setOpenInterest3((prev) => !prev);
    };
    const handleChange4 = () => {
        setOpenInterest4((prev) => !prev);
    };


    return {
        openInterest1,
        openInterest2,
        openInterest3,
        openInterest4,
        handleChange1,
        handleChange2,
        handleChange3,
        handleChange4,
    }
}

export default useInterests
