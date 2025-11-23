import { OrdersTable } from './orders-table'

const data = [
    {
        orderId: 1,
        user: 'Cover page',
        status: 'In Process',
        project: '18',
        address: '5',
        date: 'Eddie Lake'
    },
    {
        orderId: 2,
        user: 'Table of contents',
        status: 'Done',
        project: '29',
        address: '24',
        date: 'Eddie Lake'
    },
    {
        orderId: 3,
        user: 'Narrative',
        status: 'Done',
        project: '10',
        address: '13',
        date: 'Eddie Lake'
    },
    {
        orderId: 4,
        user: 'Narrative',
        status: 'Done',
        project: '27',
        address: '23',
        date: 'Jamik Tashpulatov'
    },
    {
        orderId: 5,
        user: 'Narrative',
        status: 'In Process',
        project: '2',
        address: '16',
        date: 'Jamik Tashpulatov'
    },
    {
        orderId: 6,
        user: 'Narrative',
        status: 'In Process',
        project: '20',
        address: '8',
        date: 'Jamik Tashpulatov'
    },
    {
        orderId: 7,
        user: 'Narrative',
        status: 'In Process',
        project: '19',
        address: '21',
        date: 'Jamik Tashpulatov'
    },
    {
        orderId: 8,
        user: 'Narrative',
        status: 'Done',
        project: '25',
        address: '26',
        date: 'Assign date'
    },
    {
        orderId: 9,
        user: 'Technical content',
        status: 'Done',
        project: '7',
        address: '23',
        date: 'Assign date'
    },
    {
        orderId: 10,
        user: 'Narrative',
        status: 'Done',
        project: '30',
        address: '28',
        date: 'Assign date'
    },
    {
        orderId: 11,
        user: 'Narrative',
        status: 'Done',
        project: '9',
        address: '31',
        date: 'Assign date'
    },
    {
        orderId: 12,
        user: 'Narrative',
        status: 'Done',
        project: '12',
        address: '0',
        date: 'Assign date'
    },
    {
        orderId: 13,
        user: 'Narrative',
        status: 'Done',
        project: '22',
        address: '33',
        date: 'Assign date'
    },
    {
        orderId: 14,
        user: 'Narrative',
        status: 'Done',
        project: '15',
        address: '34',
        date: 'Assign date'
    },
    {
        orderId: 15,
        user: 'Narrative',
        status: 'Done',
        project: '3',
        address: '35',
        date: 'Assign date'
    },
    {
        orderId: 16,
        user: 'Narrative',
        status: 'In Process',
        project: '6',
        address: '36',
        date: 'Assign date'
    },
    {
        orderId: 17,
        user: 'Narrative',
        status: 'Done',
        project: '4',
        address: '37',
        date: 'Assign date'
    },
    {
        orderId: 18,
        user: 'Plain language',
        status: 'Done',
        project: '14',
        address: '38',
        date: 'Assign date'
    },
    {
        orderId: 19,
        user: 'Narrative',
        status: 'Done',
        project: '17',
        address: '39',
        date: 'Assign date'
    },
    {
        orderId: 20,
        user: 'Narrative',
        status: 'Done',
        project: '11',
        address: '40',
        date: 'Assign date'
    },
    {
        orderId: 21,
        user: 'Technical content',
        status: 'In Process',
        project: '24',
        address: '18',
        date: 'Maya Johnson'
    },
    {
        orderId: 22,
        user: 'Narrative',
        status: 'Done',
        project: '15',
        address: '22',
        date: 'Carlos Rodriguez'
    },
    {
        orderId: 23,
        user: 'Legal',
        status: 'In Process',
        project: '31',
        address: '27',
        date: 'Sarah Chen'
    },
    {
        orderId: 24,
        user: 'Technical content',
        status: 'Done',
        project: '8',
        address: '12',
        date: 'Raj Patel'
    },
    {
        orderId: 25,
        user: 'Visual',
        status: 'In Process',
        project: '19',
        address: '25',
        date: 'Leila Ahmadi'
    },
    {
        orderId: 26,
        user: 'Technical content',
        status: 'Done',
        project: '22',
        address: '20',
        date: 'Thomas Wilson'
    },
    {
        orderId: 27,
        user: 'Technical content',
        status: 'In Process',
        project: '17',
        address: '14',
        date: 'Assign date'
    },
    {
        orderId: 28,
        user: 'Narrative',
        status: 'Done',
        project: '26',
        address: '30',
        date: 'Eddie Lake'
    },
    {
        orderId: 29,
        user: 'Financial',
        status: 'In Process',
        project: '13',
        address: '16',
        date: 'Jamik Tashpulatov'
    },
    {
        orderId: 30,
        user: 'Research',
        status: 'Done',
        project: '29',
        address: '32',
        date: 'Sophia Martinez'
    },
    {
        orderId: 31,
        user: 'Research',
        status: 'In Process',
        project: '21',
        address: '19',
        date: 'Assign date'
    },
    {
        orderId: 32,
        user: 'Technical content',
        status: 'Done',
        project: '16',
        address: '23',
        date: 'Alex Thompson'
    },
    {
        orderId: 33,
        user: 'Research',
        status: 'In Process',
        project: '27',
        address: '24',
        date: 'Nina Patel'
    },
    {
        orderId: 34,
        user: 'Legal',
        status: 'Done',
        project: '18',
        address: '21',
        date: 'Assign date'
    },
    {
        orderId: 35,
        user: 'Technical content',
        status: 'In Process',
        project: '23',
        address: '26',
        date: 'DavorderId Kim'
    },
    {
        orderId: 36,
        user: 'Technical content',
        status: 'Done',
        project: '14',
        address: '17',
        date: 'Jamik Tashpulatov'
    },
    {
        orderId: 37,
        user: 'Technical content',
        status: 'In Process',
        project: '25',
        address: '28',
        date: 'Eddie Lake'
    },
    {
        orderId: 38,
        user: 'Research',
        status: 'Done',
        project: '20',
        address: '15',
        date: 'Assign date'
    },
    {
        orderId: 39,
        user: 'Narrative',
        status: 'In Process',
        project: '12',
        address: '19',
        date: 'Maria Garcia'
    },
    {
        orderId: 40,
        user: 'Technical content',
        status: 'Done',
        project: '28',
        address: '31',
        date: 'James Wilson'
    },
    {
        orderId: 41,
        user: 'Technical content',
        status: 'In Process',
        project: '19',
        address: '22',
        date: 'Assign date'
    },
    {
        orderId: 42,
        user: 'Technical content',
        status: 'Done',
        project: '30',
        address: '33',
        date: 'Priya Singh'
    },
    {
        orderId: 43,
        user: 'Research',
        status: 'In Process',
        project: '11',
        address: '14',
        date: 'Eddie Lake'
    },
    {
        orderId: 44,
        user: 'Research',
        status: 'Done',
        project: '24',
        address: '27',
        date: 'Assign date'
    },
    {
        orderId: 45,
        user: 'Legal',
        status: 'In Process',
        project: '17',
        address: '20',
        date: 'Sarah Johnson'
    },
    {
        orderId: 46,
        user: 'Narrative',
        status: 'Done',
        project: '22',
        address: '25',
        date: 'Jamik Tashpulatov'
    },
    {
        orderId: 47,
        user: 'Technical content',
        status: 'In Process',
        project: '15',
        address: '18',
        date: 'Assign date'
    },
    {
        orderId: 48,
        user: 'Technical content',
        status: 'Done',
        project: '26',
        address: '29',
        date: 'Michael Chen'
    },
    {
        orderId: 49,
        user: 'Legal',
        status: 'In Process',
        project: '13',
        address: '16',
        date: 'Assign date'
    },
    {
        orderId: 50,
        user: 'Technical content',
        status: 'Done',
        project: '28',
        address: '31',
        date: 'Eddie Lake'
    },
    {
        orderId: 51,
        user: 'Technical content',
        status: 'In Process',
        project: '21',
        address: '24',
        date: 'Jamik Tashpulatov'
    },
    {
        orderId: 52,
        user: 'Technical content',
        status: 'Done',
        project: '16',
        address: '19',
        date: 'Assign date'
    },
    {
        orderId: 53,
        user: 'Technical content',
        status: 'In Process',
        project: '29',
        address: '32',
        date: 'Lisa Wong'
    },
    {
        orderId: 54,
        user: 'Planning',
        status: 'Done',
        project: '14',
        address: '17',
        date: 'Eddie Lake'
    },
    {
        orderId: 55,
        user: 'Planning',
        status: 'In Process',
        project: '27',
        address: '30',
        date: 'Assign date'
    },
    {
        orderId: 56,
        user: 'Planning',
        status: 'Done',
        project: '20',
        address: '23',
        date: 'Jamik Tashpulatov'
    },
    {
        orderId: 57,
        user: 'Planning',
        status: 'In Process',
        project: '15',
        address: '18',
        date: 'Assign date'
    },
    {
        orderId: 58,
        user: 'Planning',
        status: 'Done',
        project: '30',
        address: '33',
        date: 'Eddie Lake'
    },
    {
        orderId: 59,
        user: 'Technical content',
        status: 'In Process',
        project: '23',
        address: '26',
        date: 'Jamik Tashpulatov'
    },
    {
        orderId: 60,
        user: 'Technical content',
        status: 'Done',
        project: '18',
        address: '21',
        date: 'Assign date'
    },
    {
        orderId: 61,
        user: 'Technical content',
        status: 'In Process',
        project: '25',
        address: '28',
        date: 'Daniel Park'
    },
    {
        orderId: 62,
        user: 'Technical content',
        status: 'Done',
        project: '12',
        address: '15',
        date: 'Eddie Lake'
    },
    {
        orderId: 63,
        user: 'Technical content',
        status: 'In Process',
        project: '27',
        address: '30',
        date: 'Jamik Tashpulatov'
    },
    {
        orderId: 64,
        user: 'Planning',
        status: 'Done',
        project: '22',
        address: '25',
        date: 'Assign date'
    },
    {
        orderId: 65,
        user: 'Planning',
        status: 'In Process',
        project: '19',
        address: '22',
        date: 'Emma Davis'
    },
    {
        orderId: 66,
        user: 'Technical content',
        status: 'Done',
        project: '24',
        address: '27',
        date: 'Eddie Lake'
    },
    {
        orderId: 67,
        user: 'Planning',
        status: 'In Process',
        project: '21',
        address: '24',
        date: 'Jamik Tashpulatov'
    },
    {
        orderId: 68,
        user: 'Legal',
        status: 'Done',
        project: '26',
        address: '29',
        date: 'Assign date'
    }
]



const OrdersPage = () => {
    return (
        <OrdersTable data={data} />
    )
}

export default OrdersPage

