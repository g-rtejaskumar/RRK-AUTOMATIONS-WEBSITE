import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEOHead
        title="Privacy Policy"
        description="Read the RRK Automations privacy policy. Learn how we collect, use, and protect your personal information."
        path="/privacy-policy"
      />

      <section className="page-hero py-20 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">
              Last updated: March 20, 2026
            </p>

            <div className="prose prose-invert max-w-none space-y-8 text-foreground/90">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you visit our website or use our services, we may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, and business name that you provide through our contact forms.</li>
                  <li><strong className="text-foreground">Usage Data:</strong> Pages visited, time spent on pages, referring URLs, and browser/device information collected automatically.</li>
                  <li><strong className="text-foreground">Communication Data:</strong> Messages and inquiries submitted through our contact form, WhatsApp, or email.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To deliver and maintain our automation services</li>
                  <li>To send you relevant updates about our services (only with your consent)</li>
                  <li>To improve our website and user experience</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Data Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your data only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li><strong className="text-foreground">Service Providers:</strong> With trusted third-party tools (e.g., Supabase, WhatsApp Business API) necessary to deliver our services.</li>
                  <li><strong className="text-foreground">Legal Requirements:</strong> When required by law, regulation, or legal process.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement industry-standard security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure. We strive to protect your data but cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Cookies & Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use cookies and similar tracking technologies to improve user experience and analyze website traffic. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Access, update, or delete your personal information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a copy of the data we hold about you</li>
                  <li>Lodge a complaint with a data protection authority</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">7. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites (e.g., Calendly, WhatsApp). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">8. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. We encourage you to review this page periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">9. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us:
                </p>
                <ul className="list-none space-y-2 text-muted-foreground mt-4">
                  <li>📧 Email: <a href="mailto:rrkautomations@gmail.com" className="text-secondary hover:underline">rrkautomations@gmail.com</a></li>
                  <li>💬 WhatsApp: <a href="https://wa.me/918341374436" className="text-secondary hover:underline">+91 83413 74436</a></li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
