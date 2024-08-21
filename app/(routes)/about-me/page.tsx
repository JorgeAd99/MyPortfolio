import Avatar from "@/components/avatar";
import { ContainerPage } from "@/components/container";
import CounterServices from "@/components/counter-service";
import MyExperience from "@/components/myexperience";
import TimeLine from "@/components/time-line";
import TransitionPage from "@/components/transition-page";

const PageAbautMe = () => {
    return (
        <>
            <TransitionPage/>
            <ContainerPage>
                <Avatar/>
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Toda Mi 
                    <span className="font-bold text-secondary"> Trayectoria</span>
                </h1>
                <CounterServices/>
                <TimeLine/>
                
            </ContainerPage>
        </>
        

       
    )
};

export default PageAbautMe