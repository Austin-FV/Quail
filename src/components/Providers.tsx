"use client"

import { SessionProvider } from 'next-auth/react';
import React from 'react'
import { ThemeProvider as NextThemesProvider, ThemeProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

// dont need anymore since using next theme package
// type Props = {
//     children: React.ReactNode;
// };

const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem {...props}>
      <SessionProvider>
        {children}
      </SessionProvider>
    </ThemeProvider>
  )
};

export default Providers;