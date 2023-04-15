import Image from "next/image";

export default function AppImage(props: any) {
    const frame = {
        src: "/app/frame.png",
        width: 1240,
        height: 2500,
        alt: "iPhone Frame"
    };

    const app = {
        src: `/app/${props.app}.png`,
        width: 1084,
        height: 2345,
        alt: "Mealer App Image"
    };

    const appInset = {
        left: "6.4%",
        right: "6.4%",
        top: "3.2%",
        bottom: "3.2%"
    };

    return <>
        <div className={`position-relative ${props.className}`} style={{ aspectRatio: `${frame.width} / ${frame.height}`, ...props.style }}>
            <Image className="position-absolute" src={frame.src} alt={frame.alt} fill style={{ objectFit: "contain", zIndex: "1" }} priority={true} />
            <div className="position-absolute" style={{...appInset , aspectRatio: `${app.width} / ${app.height}` }}>
                <Image className="position-absolute" src={app.src} alt={app.alt} fill style={{ objectFit: "contain" }} />
            </div>
        </div>
    </>;
}