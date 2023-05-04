const PrivacyLicense = () => {
    return (
        <div className="grid grid-cols-[1fr,auto] items-center gap-x-4 gap-y-16 py-8 opacity-60 md:grid-cols-[auto,1fr,auto] md:py-12">
            <a className="link" href="/privacy">Privacy Policy</a>
            <a className="link mr-auto" href="/terms">Terms of Service</a>
            <p className="col-span-2 text-center md:col-span-1">
                <a href="https://github.com/withastro/astro/blob/main/LICENSE" target="_blank" className="link">MIT License</a> © 2023
                <a href="https://github.com/withastro/astro/graphs/contributors" className="link" target="_blank">Astro Contributors</a>
            </p>
        </div>
    )
}