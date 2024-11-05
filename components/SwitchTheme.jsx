"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function SwitchTheme() {

  const { theme, setTheme } = useTheme()

  return (
    <Button variant='outline' className="max-laptop:p-5" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <p className="max-laptop:hidden laptop:pr-2 ">Switch to {theme === 'dark' ? 'light' : 'dark'} mode</p>
      { theme === 'dark' ? <Sun /> : <Moon /> }
    </Button>
  );
}
 