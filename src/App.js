import { SliderModal } from './components'

import { SliderModalProvider } from './hooks'

import { AppRoutes } from './routes'

function App() {
  return (
    <SliderModalProvider>
      <AppRoutes />
      <SliderModal />
    </SliderModalProvider>
  )
}

export default App
