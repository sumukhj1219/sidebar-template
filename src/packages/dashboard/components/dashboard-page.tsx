import NumberCards from "@/packages/analytics/components/number-cards"
import { ChartBar } from "@/packages/analytics/components/bar-chart"
import Container from "@/components/common/container"
import { ChartLine } from "@/packages/analytics/components/line-chart"
import RevenueByLocation from "@/packages/analytics/components/revenue-by-location"
import TopSellingProducts from "@/packages/analytics/components/top-selling-products"
import { ChartPie } from "@/packages/analytics/components/pie-chart"

const DashboardPage = () => {
    return (
        <>
            <Container className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <NumberCards className="w-full" />
                <ChartBar className="w-full" />
            </Container>


            <Container className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-8">
                <ChartLine className="col-span-1 md:col-span-4 w-full" />
                <RevenueByLocation className="col-span-1 md:col-span-2 w-full" />
            </Container>

            <Container className="grid grid-cols-1 md:grid-cols-6 gap-6 mt-8">
                <TopSellingProducts className="col-span-1 md:col-span-4 w-full" />
                <ChartPie className="col-span-1 md:col-span-2 w-full" />
            </Container>
        </>
    )
}

export default DashboardPage
