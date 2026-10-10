"use client";
import {useEffect} from "react";
import Lenis from "lenis";

type SmoothScrollProps = {
    children: React.ReactNode;
}

export default function SmoothScroll({children}: SmoothScrollProps){
    useEffect(() => {
        const lenis = new Lenis({
          autoRaf: true,
          anchors: true,
          allowNestedScroll: true,
        });
        return () => lenis.destroy();
    }, []);
    return <>{children}</>;
}