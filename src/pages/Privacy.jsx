import React from 'react';

const Privacy = () => {
    return (
        <div style={{ paddingTop: '80px' }}>
            <div className="section" style={{ padding: '80px 5%' }}>
                <div className="container w-container" style={{ maxWidth: '800px' }}>
                    <h1 className="heading h2" style={{ marginBottom: '40px' }}>Privacy Policy</h1>

                    <div style={{ lineHeight: '1.8', color: '#475569' }}>
                        <p style={{ marginBottom: '20px' }}><strong>Last Updated: January 2026</strong></p>

                        <h3 className="heading h4" style={{ marginTop: '30px', marginBottom: '15px' }}>1. Introduction</h3>
                        <p style={{ marginBottom: '20px' }}>
                            Nexora ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                        </p>

                        <h3 className="heading h4" style={{ marginTop: '30px', marginBottom: '15px' }}>2. Data We Collect</h3>
                        <p style={{ marginBottom: '20px' }}>
                            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                        </p>
                        <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                            <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                        </ul>

                        <h3 className="heading h4" style={{ marginTop: '30px', marginBottom: '15px' }}>3. How We Use Your Data</h3>
                        <p style={{ marginBottom: '20px' }}>
                            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                        </p>
                        <ul style={{ marginBottom: '20px', paddingLeft: '20px' }}>
                            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                            <li>Where we need to comply with a legal or regulatory obligation.</li>
                        </ul>

                        <h3 className="heading h4" style={{ marginTop: '30px', marginBottom: '15px' }}>4. Data Security</h3>
                        <p style={{ marginBottom: '20px' }}>
                            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                        </p>

                        <h3 className="heading h4" style={{ marginTop: '30px', marginBottom: '15px' }}>5. Contact Us</h3>
                        <p style={{ marginBottom: '20px' }}>
                            If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:privacy@nexora.com" style={{ color: '#3b82f6' }}>privacy@nexora.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
