import EmployeeProvider from './EmployeeProvider'

interface ChildrenProps { children: React.ReactNode }

const AppProviders: React.FC<ChildrenProps> = ({ children }: ChildrenProps) => (
  <EmployeeProvider>
    {children}
  </EmployeeProvider>
)

export default AppProviders
