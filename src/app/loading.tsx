import Image from "next/image";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className="fixed bg-white w-full z-50 h-screen top-0 grid place-items-center">
        <div className="flex flex-col items-center">
            <span><Image src={'/ripplegif.gif'} alt="loading.." width={100} height={100}/></span>
            <span className="font-bold sr-only">DIGICOM</span>
        </div>
    </div>
}