export const metadata = {
  title: "Imprint | Legal Disclosure of K2Integris Sp. z o.o.",
  description: "Official company information and legal disclosure for K2Integris Sp. z o.o., including address, registration numbers, and contact details of managing directors.",
}

const Imprint = () => {
    return (
        <>
            <section className="imprint default">
                <div className="wrapper">
                    <article className="container" style={{display: "flex", flexDirection: "column", gap: "5rem"}}>
                        <h1 style={{marginBottom: "2rem"}}>
                            Imprint
                        </h1>
                        <div className="block" style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
                            <h2>
                                K2Integris Sp. z o.o.
                            </h2>

                            <p style={{textTransform: "uppercase"}}>
                                <span style={{fontSize: "1.4rem"}}>
                                    Registered Office:
                                </span>
                                <br />
                                Osiedle Szymony 7/22, 
                                34-500 Zakopane, POLAND
                            </p>

                            <p style={{textTransform: "uppercase"}}>
                                <span style={{fontSize: "1.4rem"}}>
                                    Court Of Registration:
                                </span>
                                <br />
                                Sąd Rejonowy dla Krakowa-Śródmieścia w Krakowie,<br />XII Wydział Gospodarczy Krajowego Rejestru Sądowego
                            </p>

                            <p style={{textTransform: "uppercase"}}>
                                <span style={{fontSize: "1.4rem"}}>
                                    KRS Number:
                                </span>
                                <br />
                                0001185218
                            </p>

                            <p style={{textTransform: "uppercase"}}>
                                <span style={{fontSize: "1.4rem"}}>
                                    Tax Identification Number (NIP):
                                </span>
                                <br />
                                7361754020
                            </p>

                            <p style={{textTransform: "uppercase"}}>
                                <span style={{fontSize: "1.4rem"}}>
                                    REGON:
                                </span>
                                <br />
                                54230069100000
                            </p>

                            <p style={{textTransform: "uppercase"}}>
                                <span style={{fontSize: "1.4rem"}}>
                                    Share Capital:
                                </span>
                                <br />
                                PLN 5.000,00 (fully paid)
                            </p>

                            <p style={{textTransform: "uppercase"}}>
                                <span style={{fontSize: "1.4rem"}}>
                                    E-Mail:
                                </span>
                                <br />
                                <a href="mailto:partner@k2integris.com">
                                    partner<span className="at">@</span>k2integris.com
                                </a>
                            </p>
                        </div>

                        <div className="block">
                            <h3>
                                Viktor Karpinski
                            </h3>

                            <p>
                                <a href="tel:+48000000000">+48 731 499 788</a>
                            </p>

                            <p>
                                <a href="mailto:karpinski@k2integris.com">
                                    karpinski<span className="at">@</span>k2integris.com
                                </a>
                            </p>
                        </div>

                        <div className="block">
                            <h3>
                                Mateusz Kaminski
                            </h3>

                            <p>
                                <a href="tel:+48453633138">+48 453 633 138</a>
                            </p>

                            <p>
                                <a href="mailto:kaminski@k2integris.com">
                                    kaminski<span className="at">@</span>k2integris.com
                                </a>
                            </p>

                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Imprint