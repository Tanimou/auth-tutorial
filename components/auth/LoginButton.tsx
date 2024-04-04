"use client"

import { useRouter } from "next/navigation"

interface LoginButtonProps {
    children: React.ReactNode,
    asChild?: boolean,
    mode?: "modal" | "redirect",
}

export const LoginButton: React.FC<LoginButtonProps> = ({ children, asChild = false, mode = "redirect" }) => { 
    const router = useRouter()
    const onClick = () => {
        router.push("/auth/login")
    }

    if (mode === "modal") { 
        return (
            <div onClick={onClick} className="cursor-pointer">
                {children}
            </div>
        )
    }
    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    )
}