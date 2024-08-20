'use client'

import ContactForm from "@/components/contact";
import { ContainerPage } from "@/components/container";
import TransitionPage from "@/components/transition-page";

const TestimonialsPage = () => {
    return (
        <>
            <TransitionPage/>
            <ContainerPage>
                <h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
                    Contactate  
                    <span className="font-bold text-secondary"> conmigo</span>
                </h1>
                <ContactForm/>
            </ContainerPage>
        </>
    )
};
export default TestimonialsPage