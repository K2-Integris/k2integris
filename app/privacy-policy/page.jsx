import styles from './privacy.module.css'
import Link from "next/link";

const PrivacyPolicy = () => {
    return (
        <section className={styles.privacy}>
            <div className="wrapper">
                <article className={styles.container}>
                    <h1>Privacy Policy</h1>
                    <section id="introduction" className={styles.block}>
                        <h2>Introduction</h2>
                        <p>K2Integris Sp. z o.o. (referred to as "K2Integris", "we", "us", or "our") is committed to protecting your personal data and respecting your privacy. This Privacy Policy describes how we collect, use, and protect personal data when you use our website, in compliance with the EU General Data Protection Regulation (GDPR) and applicable privacy laws. We aim to be transparent about our data practices and ensure that your rights are safeguarded.</p>
                        <p>This policy applies to the website operated by K2Integris Sp. z o.o. and any personal data collected through it. By using our website, you acknowledge that you have read and understood this Privacy Policy.</p>
                    </section>

                    <section id="data-controller" className={styles.block}>
                        <h2>Data Controller and Contact Information</h2>
                        <p>The Data Controller responsible for processing your personal data is <strong>K2Integris Sp. z o.o.</strong>, a Polish limited liability company. Our registered office is at [Company Address]. Our company is registered in Poland under the following identifiers: KRS: <strong>[KRS Number]</strong>, NIP: <strong>[NIP Number]</strong>, REGON: <strong>[REGON Number]</strong>. For full legal details, please refer to our <Link href="imprint">Imprint</Link>.</p>
                        <p>If you have any questions or requests regarding your personal data or this Privacy Policy, you can contact us by email at <a href="mailto:privacy@k2integris.com">privacy@k2integris.com</a> or by mail at the address provided above.</p>
                    </section>

                    <section id="data-collection" className={styles.block}>
                        <h2>Personal Data We Collect</h2>
                        <p><strong>Contact Form Data:</strong> We only collect personal data that you voluntarily provide to us through our contact form. This may include:</p>
                        <ul>
                            <li>Company name</li>
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Phone number (optional)</li>
                            <li>Message content (any information you choose to include in your message)</li>
                        </ul>
                        <p>Providing a phone number is optional. Please avoid submitting more personal data than necessary when using the contact form. We do not collect any other personal data on our website aside from the information you provide in the contact form and basic technical data captured by our analytics tools (described below).</p>
                        <p><strong>No Other Data Collection:</strong> We do not use our website to collect any personal data beyond the contact form. We do not have user accounts or profiles, we do not offer a newsletter subscription, and we do not use any advertising or marketing trackers that collect personal information. Furthermore, we do not use the personal data we collect to perform any kind of automated decision-making or profiling of individuals. We also do not knowingly collect any sensitive personal data.</p>
                    </section>

                    <section id="purpose-use" className={styles.block}>
                        <h2>Purpose and Use of Collected Data</h2>
                        <p>Any personal data you submit through our contact form will be used solely for the purpose of responding to your inquiry and communicating with you. For example, we will use your email address (and phone number, if provided) to contact you regarding your message or request. We will not use the information you provide for any unrelated purposes such as marketing without your explicit consent.</p>
                        <p>The legal basis for processing your contact form data is your consent (GDPR Article 6(1)(a)) when you choose to submit the form and provide your data to us. In some cases, responding to your inquiry may also be considered a step at your request prior to entering into a contract, or it may fall under our legitimate interest (GDPR Article 6(1)(f)) to effectively communicate with website users. We will rely on the appropriate legal basis depending on the context of your inquiry.</p>
                        <p><strong>Data Processing Method:</strong> When you submit the contact form, the data is sent to us via email (SMTP). We do not store your contact form submissions in a website database. Instead, the information is delivered directly to our email inbox. This means your data is retained in our email system for as long as needed to address your inquiry or as required for record-keeping. We treat this correspondence confidentially and do not share it with third parties except as described in this policy.</p>
                    </section>

                    <section id="cookies-analytics" className={styles.block}>
                        <h2>Use of Cookies and Analytics</h2>
                        <p>Our website uses cookies and similar technologies to enhance user experience and gather analytics data. Upon your first visit, you will be presented with a cookie banner that allows you to accept or reject the use of non-essential cookies (such as analytics cookies). You have the choice to opt in to analytics tracking or to decline it. If you reject, we will not load analytics cookies or trackers on your device.</p>
                        <p><strong>Google Analytics:</strong> We use Google Analytics (a web analytics service provided by Google LLC) to collect anonymous statistical information about how visitors use our site. This helps us understand website traffic and improve our services. Google Analytics may set cookies on your device to collect data such as your IP address, browser type, pages visited, and time spent on the site. We have configured Google Analytics for basic analytics purposes only; we do not enable advertising features or personal identification through Analytics. IP anonymization is enabled where possible, so Google truncates/anonymizes the last octet of your IP address within the European Economic Area. </p>
                        <p>The information generated by Google Analytics cookies about your use of our website may be transmitted to and stored by Google on servers outside the EU (e.g., in the United States). Google may rely on the EU-U.S. Data Privacy Framework or Standard Contractual Clauses (SCCs) to ensure an adequate level of protection for personal data transferred outside the EEA. You can learn more about how Google handles data in Google's <a href="https://policies.google.com/technologies/partner-sites" target='_blank'>Privacy Policy for partner sites</a>.</p>
                        <p><strong>Google Tag Manager:</strong> We use Google Tag Manager to implement and manage our analytics tools. Google Tag Manager is a platform that deploys other tags (such as Google Analytics) on our website. The Tag Manager itself does not collect personal data; it is a tool we use for efficiency in managing scripts. It will only load the Google Analytics script (or similar tags) if you have given consent via the cookie banner.</p>
                        <p><strong>Essential Cookies:</strong> In addition to analytics cookies, our website may use essential cookies that are necessary for the site to function properly (for example, to remember your cookie preferences). These essential cookies are always active because they do not store personal data and are required for basic website operations. They are not used for tracking purposes and cannot be disabled via our cookie banner (though you can always control or delete cookies through your browser settings).</p>
                    </section>

                    <section id="third-party-services" className={styles.block}>
                        <h2>Third-Party Services and Data Processing</h2>
                        <p>We utilize a few third-party services in operating our website, which may process personal data to some extent:</p>
                        <ul>
                            <li><strong>Hostinger (Website Hosting):</strong> Our website is hosted by Hostinger, which primarily uses servers located in the European Union. When you visit our site, your IP address and other technical data are logged by our web server (as is standard for any website). These server logs may include your IP address, browser type, operating system, referring URLs, and timestamps of visits. Hostinger stores these logs securely and typically retains them for a limited time for debugging and security purposes. We and our hosting provider only use this information to ensure the security and proper functioning of the website.</li>
                            <li><strong>Email (SMTP) Service:</strong> As noted above, when you send a message via our contact form, it is transmitted to us via email. Our email service provider will therefore process your personal data (as contained in the email). We use a reputable email service to handle these communications. The email may pass through secure servers that could be outside of our direct infrastructure, but we take steps to ensure our email service is reliable and GDPR-compliant.</li>
                            <li><strong>Google Analytics and Tag Manager:</strong> As described above, Google Analytics and Google Tag Manager (operated by Google LLC, based in the USA) may process certain data about your device and browsing if you consent to analytics cookies. Google Analytics data is used only by us for statistical analysis of our site usage. Google acts as a data processor for us in this context. We have configured these tools to minimize data collection (for example, by enabling IP anonymization). No personally identifiable information (such as your name or contact details) is sent to Google via these tools.</li>
                            <li><strong>Google Fonts:</strong> We use Google Fonts on our website to ensure a consistent and attractive appearance of text. When you load our site, your browser may connect to Google servers to download the required font files. This means your device’s IP address and certain technical data (like the browser type) can be received by Google as part of the font request. According to Google, this data is used only for delivering the fonts efficiently and aggregating usage statistics. We do not collect any personal data through this process, but we want to inform you of this third-party connection. The use of Google Fonts is based on our legitimate interest in providing a uniform and visually pleasing website (GDPR Article 6(1)(f)).</li>
                        </ul>
                        <p>Apart from the services listed above, we do not share your personal data with any third parties unless it is necessary to comply with a legal obligation or a lawful request from authorities. We do not sell, rent, or trade your personal information to anyone.</p>
                    </section>

                    <section id="data-retention" className={styles.block}>
                        <h2>Data Retention</h2>
                        <p>We keep personal data only for as long as it is necessary to fulfill the purposes for which it was collected, or to comply with legal and contractual obligations. Specifically:</p>
                        <ul>
                            <li><strong>Contact Form Communications:</strong> We retain emails and correspondence resulting from the contact form for as long as needed to address your inquiry and any follow-up communications. In general, we periodically review and delete inquiry emails that are no longer required. However, if your inquiry leads to further business relations or is important for record-keeping, we may retain it for a longer period (for example, to establish, exercise, or defend legal claims, or to comply with accounting/tax requirements).</li>
                            <li><strong>Analytics Data:</strong> Data collected via Google Analytics is retained according to the settings we have configured with Google (for instance, we might set data retention to 14 months or another standard period). This data is aggregated and does not directly identify individuals. We use it for long-term analysis of website performance. Remember, you can delete or block cookies in your browser at any time, which will prevent Google Analytics from collecting data during your future visits.</li>
                            <li><strong>Server Logs:</strong> Server logs maintained by our hosting provider (Hostinger) are generally retained for a short period (usually a few weeks or months) unless needed longer for security analysis. These logs are used for troubleshooting and security monitoring and are automatically purged on a regular schedule.</li>
                        </ul>
                    </section>

                    <section id="your-rights" className={styles.block}>
                        <h2>Your Rights Under GDPR</h2>
                        <p>Under the GDPR, you have the following rights regarding your personal data:</p>
                        <ul>
                            <li><strong>Right of Access:</strong> You have the right to request confirmation of whether we are processing your personal data, and if so, to receive a copy of the personal data we hold about you, as well as information about how we use it.</li>
                            <li><strong>Right to Rectification:</strong> You have the right to request that we correct any inaccurate or incomplete personal data we have about you.</li>
                            <li><strong>Right to Erasure (\"Right to be Forgotten\"):</strong> You have the right to request that we delete your personal data when, for example, it is no longer necessary for the purposes it was collected, or if you have withdrawn your consent and there is no other legal basis for processing, or if you object to processing and we have no overriding legitimate grounds to continue, or if the data was processed unlawfully.</li>
                            <li><strong>Right to Restrict Processing:</strong> You have the right to request that we limit the processing of your personal data in certain circumstances – for instance, if you contest the accuracy of the data, or if the processing is unlawful but you prefer restriction over deletion, or if we no longer need the data but you need us to keep it for the establishment, exercise, or defense of legal claims.</li>
                            <li><strong>Right to Data Portability:</strong> You have the right (when technically feasible) to receive the personal data you have provided to us in a structured, commonly used, machine-readable format, and to have that data transmitted to another controller, where the processing is based on your consent or a contract and the processing is carried out by automated means.</li>
                            <li><strong>Right to Object:</strong> You have the right to object to our processing of your personal data when we base it on legitimate interests (including for analytics purposes). If you object, we will cease processing your data for that purpose unless we have compelling legitimate grounds to continue or if it is needed for legal reasons. Additionally, if we were to process your data for direct marketing (which we do not), you have the absolute right to object at any time to that processing.</li>
                            <li><strong>Right to Withdraw Consent:</strong> If we are processing your personal data based on your consent, you have the right to withdraw that consent at any time. This will not affect the lawfulness of processing based on consent before its withdrawal – once consent is withdrawn, we will stop the processing that was based on it.</li>
                        </ul>
                        <p>To exercise any of your rights, please contact us using the contact details provided in the <a href="#data-controller">Data Controller and Contact Information</a> section above, or as listed on our <Link href="imprint">Imprint</Link> page. We will respond to your request as soon as possible, and no later than one month from receipt, in accordance with applicable law. Please note that we may need to verify your identity before fulfilling certain requests, to ensure that your data is not disclosed to an unauthorized person.</p>
                        <p>If you believe that our processing of your personal data infringes the GDPR or other applicable data protection laws, you have the right to lodge a complaint with a data protection supervisory authority. In Poland, the supervisory authority is the President of the Personal Data Protection Office (Prezes Urzędu Ochrony Danych Osobowych, or UODO). If you reside or work in another European Union country, you may alternatively contact the supervisory authority in that country.</p>
                    </section>

                    <section id="data-security" className={styles.block}>
                        <h2>Data Security</h2>
                        <p>We take the security of your personal data very seriously. We implement appropriate technical and organizational measures to protect your data against unauthorized access, alteration, disclosure, or destruction. These measures include using secure transmission (our website is protected by HTTPS encryption to safeguard data in transit) and maintaining up-to-date systems and software. We also restrict access to personal data to authorized personnel who need to process it.</p>
                        <p>Furthermore, any third-party service providers we engage (such as our hosting provider or analytics services) are chosen for their trustworthiness and commitment to security and privacy. They are bound by contracts to process personal data in compliance with GDPR and to implement adequate security measures. While we strive to protect your information, please note that no method of internet transmission or electronic storage is completely infallible. However, we continuously review and enhance our security practices to help ensure your personal data is safe.</p>
                    </section>

                    <section id="policy-updates" className={styles.block}>
                        <h2>Changes to this Privacy Policy</h2>
                        <p>We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or for other operational reasons. If we make significant changes, we will notify users by appropriate means (for example, by posting a prominent notice on our website or informing you via email, if we have your contact details for this purpose). We encourage you to review this page periodically to stay informed about how we are protecting your personal data.</p>
                        <p>Any updates to this policy will include a new "Last updated" date below. Continued use of our website after any changes to the Privacy Policy constitutes acceptance of those changes, to the extent permitted by law.</p>
                    </section>

                    <section id="contact-info" className={styles.block}>
                        <h2>Contact Information</h2>
                        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please do not hesitate to contact us:</p>
                        <p>
                            K2Integris Sp. z o.o.<br />
                            [Company Address]<br />
                            Email: <a href="mailto:privacy@k2integris.com">privacy@k2integris.com</a><br />
                            Phone: [Phone Number]<br />
                        </p>
                        <p>For additional information about our company, including legal registration details, please visit our <Link href="imprint">Imprint</Link> page.</p>
                        <p><em>Last updated: 22/07/2025</em></p>
                    </section>
                </article>
            </div>
        </section>
    )
}

export default PrivacyPolicy