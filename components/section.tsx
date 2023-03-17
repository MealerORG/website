export default function Section(props: any) {
    const backgrounds: any = {
        lightBlue: "var(--light-blue)",
        medBlue: "var(--med-blue)",
        darkBlue: "var(--dark-blue)"
    };

    return <>
        <div className={`p-3 ${props.className ?? ""}`}
            style={{ backgroundColor: backgrounds[props.background] ?? "white"}}
        >
            {props.children}
        </div>
    </>;
}