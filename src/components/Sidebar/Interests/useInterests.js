import React from "react";

const useInterests = () => {
    const [openInterest1, setOpenInterest1] = React.useState(true);
    const [openInterest2, setOpenInterest2] = React.useState(true);
    const [openInterest3, setOpenInterest3] = React.useState(true);
    const [openInterest4, setOpenInterest4] = React.useState(true);
    const [openInterest5, setOpenInterest5] = React.useState(true);

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
    const handleChange5 = () => {
        setOpenInterest5((prev) => !prev);
    };


    return {
        openInterest1,
        openInterest2,
        openInterest3,
        openInterest4,
        openInterest5,
        handleChange1,
        handleChange2,
        handleChange3,
        handleChange4,
        handleChange5,
    }
}

export default useInterests
