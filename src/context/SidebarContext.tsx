import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface SidebarProviderProps {
  children: ReactNode
}

type SidebarContextData = {
  sidebar: boolean
  setSidebar: (boolean) => void
}

const SidebarContext = createContext({} as SidebarContextData)

export const SidebarProvider = ({children}: SidebarProviderProps) => {
  const [sidebar, setSidebar] = useState(false)
  const router = useRouter();

  useEffect(() => {
    setSidebar(false)
  }, [router.asPath])

  return (
    <SidebarContext.Provider value={{sidebar, setSidebar}}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => useContext(SidebarContext)