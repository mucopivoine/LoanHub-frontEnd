import  { createContext, useState, useMemo} from 'react'
import { createTheme } from '@mui/material/styles'

export const tokens = (mode) => ({
    ...createContext(mode === 'dark'
        ? white
    )
})