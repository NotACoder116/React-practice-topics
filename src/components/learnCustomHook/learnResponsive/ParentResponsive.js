import React from 'react'
import { useResponsive } from './useResponsive'

export const ParentResponsive = () => {
    const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <div>isMobile: {String(isMobile)} -- isTablet: {String(isTablet)} -- isDesktop: {String(isDesktop)}</div>
  )
}

