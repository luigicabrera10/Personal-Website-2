
import Image from "next/image";
import ArrowMotion from "./_components/ArrowMotion";

export default function Logo({
    size,
    circlePadding = 10,
    fontColor = "#000000",
    fontSize = 'auto',
    animate = true
} : {
    size: number,
    circlePadding?: number,
    fontColor?: string,
    fontSize?: number | 'auto',
    animate?: boolean
}) {

    const circle = size + circlePadding;
    const square = Math.ceil(size / (Math.sqrt(2)));
    const fontSizeCalc = fontSize === 'auto' ? Math.ceil(square * 0.36) : fontSize;

    return (
        <div 
            className="bg-white rounded-full" 
            style={{ width: `${circle}px`, height: `${circle}px`}}
        >
            <div className="relative w-full h-full flex justify-center items-center">
                {
                    animate ? <ArrowMotion square={square} />
                    :<Image
                        className="absolute"
                        src='/imgs/logo/logo-arrow.png'
                        width={square}
                        height={square}
                        alt={"Name Logo"}
                    />
                }

                <div style={{width: `${square}px`, height: `${square}px`}}>
                    <div className="w-full h-full font-[Arapey] grid grid-cols-3 grid-rows-3 place-items-center">
                        <div className="col-start-2 row-start-1"
                            style={{fontSize: `${fontSizeCalc}px`, color: fontColor}}>L</div>
                        <div className="col-start-1 row-start-2"
                            style={{fontSize: `${fontSizeCalc}px`, color: fontColor}}>A</div>
                        <div className="col-start-3 row-start-2"
                            style={{fontSize: `${fontSizeCalc}px`, color: fontColor}}>C</div>
                        <div className="col-start-2 row-start-3"
                            style={{fontSize: `${fontSizeCalc}px`, color: fontColor}}>H</div>
                    </div>
                </div>

            </div>

        </div>
    );
}