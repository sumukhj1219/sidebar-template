import NumberCards from "@/packages/analytics/components/number-cards"
import { ChartBar } from "@/packages/analytics/components/bar-chart"
import Container from "@/components/common/container"
import { ChartLine } from "@/packages/analytics/components/line-chart"


const DashboardPage = () => {
    return (
        <>
            <Container className="grid md:grid-cols-2">
                <NumberCards />
                <ChartBar />
            </Container>
            <Container className="grid md:grid-cols-6 gap-3 mt-8">
                <ChartLine className="col-span-4 w-full" />
            </Container>
        </>
    )
}

export default DashboardPage
