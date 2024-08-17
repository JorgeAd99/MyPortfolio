import { ContainerPage } from "@/components/container";
import TransitionPage from "@/components/transition-page";

const PortfolioPage = () => {
    return (
        <>
            <TransitionPage/>
            <ContainerPage>
                <h1>From container</h1>
            </ContainerPage>
        </>
    )
};

export default PortfolioPage