import { Header } from '../../../components'

const Dashboard = () => {

  const user = { name: 'Admin' } // Replace with actual user fetching logic

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Welcome ${user?.name ?? 'Guest'} 👋`}
        description="Manage all of your travel agency's bookings and customers"
      />
      Dashboard page contents
    </main>
  )
}

export default Dashboard