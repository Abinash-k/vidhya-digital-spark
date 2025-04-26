
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface ProjectBadgeProps {
  label: string
  variant?: "meta" | "hostinger" | "canva" | "default"
  className?: string
}

export function ProjectBadge({ label, variant = "default", className }: ProjectBadgeProps) {
  const variantStyles = {
    meta: "bg-blue-50 text-blue-700 hover:bg-blue-100",
    hostinger: "bg-purple-50 text-purple-700 hover:bg-purple-100",
    canva: "bg-teal-50 text-teal-700 hover:bg-teal-100",
    default: "bg-gray-50 text-gray-700 hover:bg-gray-100"
  }

  return (
    <Badge 
      variant="outline"
      className={cn(
        "px-3 py-1 transition-colors duration-200",
        variantStyles[variant],
        className
      )}
    >
      {label}
    </Badge>
  )
}
