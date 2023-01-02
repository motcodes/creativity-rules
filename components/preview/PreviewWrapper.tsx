import { ReactNode } from 'react'

export interface PreviewWrapperProps {
  children: ReactNode
}

export function PreviewWrapper({ children }: PreviewWrapperProps) {
  return <div>{children}</div>
}
