import React from 'react'
import { Outlet, useMatches } from 'react-router-dom'
import LayoutDefault from '@layouts/Layout-default/LayoutDefault'
import SeoHead from '@components/common/SeoHead/SeoHead'
import './layout.scss'

type RouteHandle = {
  layout?: 'default'
  name?: 'home' | 'about' | 'services' | 'contact'
  breadcrumbs?: { name: string; url: string }[]
}

function useLayout() {
  const matches = useMatches()
  const currentMatch = matches[matches.length - 1] as (typeof matches)[number] & {
    handle?: RouteHandle
  }

  return {
    layout: currentMatch?.handle?.layout || 'default',
    pageName: currentMatch?.handle?.name || 'home',
    breadcrumbs: currentMatch?.handle?.breadcrumbs || [{ name: 'Home', url: '/' }],
  }
}

const MainLayout: React.FC = () => {
  const { layout, pageName, breadcrumbs } = useLayout()
  const layouts: Record<string, React.ComponentType<{ children: React.ReactNode }>> = {
    default: LayoutDefault,
  }

  const ActiveLayout = layouts[layout] || LayoutDefault

  return (
    <>
      <SeoHead pageKey={pageName} breadcrumbs={breadcrumbs} />
      <div id="l-document">
        <ActiveLayout>
          <Outlet />
        </ActiveLayout>
      </div>
    </>
  )
}

export default MainLayout
