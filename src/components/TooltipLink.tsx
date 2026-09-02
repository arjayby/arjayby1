import type { ReactNode } from "react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

type TooltipLinkProps = {
  children: ReactNode
  href: `https://${string}`
}

export default function TooltipLink({ children, href }: TooltipLinkProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{href}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
