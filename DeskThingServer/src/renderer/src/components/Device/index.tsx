import { useState } from 'react'
import Tabs from './Tabs'
import Devices from './Devices'
import Loading from '../Loading'

export type View = 'mappings' | 'status'

const Index = (): JSX.Element => {
  const [currentView, setCurrentView] = useState<View>('mappings')
  const renderView = (): JSX.Element | undefined => {
    switch (currentView) {
      case 'mappings':
        return <Devices />
      case 'status':
        return <Loading message="Not Implemented" />
      default:
        return undefined
    }
  }

  return (
    <>
      <Tabs currentView={currentView} setCurrentView={setCurrentView} />
      <div className="w-full h-full">{renderView()}</div>
    </>
  )
}

export default Index