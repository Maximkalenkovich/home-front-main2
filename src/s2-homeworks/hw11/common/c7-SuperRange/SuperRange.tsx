import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const sliderStyles = {
    color: '#3f51b5',
    height: 8,
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-rail': {
        color: '#d8d8d8',
        opacity: 1,
        height: 8,
    },
};
const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={ // стили для слайдера // пишет студент
                sliderStyles
            }
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
