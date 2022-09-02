import React from 'react';
import {Stack} from '@mui/material'
import {categories} from "../utils/constants";

function Sidebar({selectedCategory, setSelectedCategory}) {
    const sidebar_menu = categories.map((category) => (
        <button
            key={category.name}
            className='category-btn'
            style={{
                background: selectedCategory === category.name && '#FC1503',
                color: 'white'
            }}
            onClick={() => {
                setSelectedCategory(category.name)
            }}
        >
            <span style={{
                color: selectedCategory === category.name ? 'white' : '#FC1503',
                marginRight: '15px'
            }}>{category.icon}</span>
            <span style={{
                opacity: selectedCategory === category.name ? '1' : '0.8'
            }}>{category.name}</span>
        </button>
    ))
    return (
        <Stack
            direction='row'
            sx={{
                overflowY: 'auto',
                height: {
                    sx: 'auto',
                    md: '95%'
                },
                flexDirection: {
                    md: 'column',
                }
            }}
        >
            {sidebar_menu}
        </Stack>
    );
}

export default Sidebar;