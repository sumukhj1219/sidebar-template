import Container from '@/components/common/container';
import { OrdersTable } from './orders-table'

const data = [
  {
    id: 1,
    orderId: "#CM9801",
    img: "https://images.unsplash.com/photo-1648415041078-d5b259c683be?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: "Natali Craig",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: 2,
    orderId: "#CM9802",
    img: "https://images.unsplash.com/photo-1724225618356-4af4289f62d9?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: "Kate Morrison",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: 3,
    orderId: "#CM9803",
    img: "https://plus.unsplash.com/premium_photo-1680020185326-45491267f8da?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: "Drew Cano",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: 4,
    orderId: "#CM9804",
    img: "https://plus.unsplash.com/premium_photo-1677883711109-f38c34a4ddfb?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: "Orlando Diggs",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: 5,
    orderId: "#CM9805",
    img: "https://images.unsplash.com/photo-1656338997878-279d71d48f6e?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    user: "Andi Lane",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];




const OrdersPage = () => {
    return (
      <Container className='flex flex-1'>
        <OrdersTable data={data} />
      </Container>
    )
}

export default OrdersPage

