import EmployeesPanel from './pages/EmployeesPanel'
import './lib/axios/config'
import AppProviders from './providers/AppProviders'

const App = () => (
  <AppProviders>
    <EmployeesPanel />
  </AppProviders>
)

export default App
