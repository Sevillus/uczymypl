"use client"
import React, {useState} from 'react'
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const AddStudentSelect = (props) => {
    const title = props.title;
    const afterClick = props.afterClick
    const [option, setOption] = useState(props.default);

    const handleChange = (e) => {
        setOption(e.target.value);
        if (props.onChange) {
            props.onChange(e.target.value);
        }
    };

    const optionArray = props.array;

    return (
        <FormControl variant="standard" fullWidth>
            <InputLabel id="demo-simple-select-label">{title}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Rodzaj szkoły"
                value={option}
                onChange={handleChange}
                error={option === "" && afterClick}
            >
                {optionArray.map((option) => (
                    option ? (
                        <MenuItem value={`${option}`} key={option}>
                            {option}
                        </MenuItem>
                    ) : null
                ))}
            </Select>
        </FormControl>
    );
};

export default AddStudentSelect
