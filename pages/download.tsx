import Image from "next/image";
import AppImage from "../components/appImage";

export default function Download() {
    const platforms = [
        { name: "iOS", href: "/download/ios", image: "/app/download-ios.svg", width: 150, height: 50, alt: "Apple App Store" },
        { name: "Android", href: "/download/android", image: "/app/download-android.svg", width: 170, height: 50, alt: "Google Play Store" }
    ];

    return <>
        <div className="row mx-0">
            <div className="col-sm-6 col-md-8 col-xxl-9 mt-3 d-flex flex-column justify-content-center">
                <div className="text-center">
                    <h1>Download the App</h1>

                    <p style={{ fontSize: "1.125em" }}>Start meal planning, saving money, and helping the environment today!</p>

                    <div className="d-flex flex-wrap justify-content-center">
                        {platforms.map((platform, index) =>
                            <a href={platform.href} target="_blank" rel="noopener noreferrer" className="m-1" key={index}>
                                <Image src={platform.image} width={platform.width} height={platform.height} alt={platform.alt} />
                            </a>
                        )}
                    </div>

                    <div className="mt-3"><em>Desktop and web versions are coming soon.</em></div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-xxl-3 mt-3">
                <AppImage app="login" />
            </div>
        </div>
    </>;
}