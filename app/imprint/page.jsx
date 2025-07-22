import styles from './styles.module.css'

const Imprint = () => {
    return (
        <>
            <section className={styles.imprint}>
                <div className="wrapper">
                    <article className={styles.container}>
                        <h1>
                            Imprint
                        </h1>
                        <div className={styles.block}>
                            <h3>
                                K2Integris Sp. z o.o.
                            </h3>

                            <p>
                                <span>
                                    Registered Office:
                                </span>
                                <br />
                                Przyszowa 146, 34-604 Przyszowa, POLAND
                            </p>

                            <p>
                                <span>
                                    Court Of Registration:
                                </span>
                                <br />
                                Przyszowa 146, 34-604 Przyszowa, POLAND
                            </p>

                            <p>
                                <span>
                                    KRS Number:
                                </span>
                                <br />
                                0000123456
                            </p>

                            <p>
                                <span>
                                    Tax Identification Number (NIP):
                                </span>
                                <br />
                                123-456-78-90
                            </p>

                            <p>
                                <span>
                                    Share Capital:
                                </span>
                                <br />
                                PLN 5.000,00 (fully paid)
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h3>
                                Viktor Karpinski
                            </h3>

                            <p>
                                +48 731 499 788
                            </p>

                            <p>
                                karpinski<span className={styles.at}>@</span>k2integris.com
                            </p>
                        </div>

                        <div className={styles.block}>
                            <h3>
                                Mateusz Kaminski
                            </h3>

                            <p>
                                +48 731 499 788
                            </p>

                            <p>
                                kaminski<span className={styles.at}>@</span>k2integris.com
                            </p>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Imprint