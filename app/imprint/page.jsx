import ContactCTA from '@/components/ContactCTA'
import styles from './styles.module.css'

const Imprint = () => {
    return (
        <>
            <section className={styles.imprint}>
                <div className="wrapper">
                    <article>
                        <h1>
                            Imprint
                        </h1>
                        <h3>
                            K2Integris Sp. z o.o.
                        </h3>

                        <p>
                            Przyszowa 146<br />34-604 Przyszowa<br />POLAND
                        </p>

                        <p>
                            NIP: <span>872-21-52-522</span>
                        </p>

                        <p>
                            REGON: <span>691691523</span>
                        </p>
                    </article>

                    <aside></aside>
                </div>
            </section>
        </>
    )
}

export default Imprint