export default function Footer(props: any) {
    return <>
        <footer className={`p-3 ${props.className ?? ""}`}>
            <div className="text-muted text-center">&copy; Mealer 2023</div>
        </footer>
    </>;
}