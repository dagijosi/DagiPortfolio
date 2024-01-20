"use client"

import React from 'react'
import { Text } from "@radix-ui/themes";
import { useTheme } from 'next-themes';

const Footer = () => {
    const { theme } = useTheme();
  return (
<div className={` w-full text-center py-4 text-sm ${theme === 'dark' ? 'bg-gray-900 ' : 'bg-gray-300 '}`}>
    <Text>
      © 2024 Bytez. All rights reserved. 
    </Text>
  </div>
  )
}

export default Footer
