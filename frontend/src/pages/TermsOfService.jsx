import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";

const TermsOfService = () => {
  return (
    <Layout>
      <SEOHead
        title="Terms of Service"
        description="Read the RRK Automations terms of service. Understand the terms and conditions for using our automation services."
        path="/terms-of-service"
      />

      <section className="page-hero py-20 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground mb-12">
              Last updated: March 20, 2026
            </p>

            <div className="prose prose-invert max-w-none space-y-8 text-foreground/90">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the RRK Automations website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  RRK Automations provides AI-powered automation systems, WhatsApp chatbot development, web development, and related digital services. The specific scope, timeline, and deliverables for each project will be discussed and agreed upon before work begins.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">3. Project Process</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Consultation:</strong> All projects begin with a free consultation call to understand your requirements.</li>
                  <li><strong className="text-foreground">Proposal:</strong> We provide a detailed proposal including scope, timeline, and pricing before any work begins.</li>
                  <li><strong className="text-foreground">Development:</strong> Once approved, we build and test your automation system.</li>
                  <li><strong className="text-foreground">Delivery:</strong> Systems are deployed and handed over with documentation and a walkthrough.</li>
                  <li><strong className="text-foreground">Support:</strong> Post-delivery support is included as specified in your plan.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">4. Pricing & Payment</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Prices listed on our website are starting points. Final pricing is discussed and agreed upon based on your specific requirements.</li>
                  <li>Payment terms will be outlined in the project proposal. Typically, a deposit is required before work begins.</li>
                  <li>All prices are exclusive of applicable taxes unless stated otherwise.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">5. Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To ensure successful delivery, clients are expected to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                  <li>Provide timely access to required accounts, APIs, and credentials</li>
                  <li>Respond to clarification requests within a reasonable timeframe</li>
                  <li>Provide accurate business information and requirements</li>
                  <li>Test and approve deliverables within the agreed timeline</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">6. Intellectual Property</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Upon full payment, the client owns all custom automation workflows and configurations built specifically for their project.</li>
                  <li>RRK Automations retains the right to use general methodologies, techniques, and non-proprietary components across projects.</li>
                  <li>We may reference the project (without sharing confidential details) in our portfolio unless the client requests otherwise.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">7. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We treat all client information, business data, and project details as confidential. We will not share your information with third parties without your consent, except as necessary to deliver our services or as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">8. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  RRK Automations shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services, including but not limited to loss of revenue, data, or business opportunities. Our total liability shall not exceed the amount paid for the specific service in question.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">9. Revisions & Modifications</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Each project includes a reasonable number of revisions as specified in the project proposal. Additional revisions or scope changes beyond the agreed scope may incur additional charges, which will be communicated and approved before proceeding.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">10. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate the engagement with written notice. In case of termination, the client will be billed for work completed up to the termination date. Any advance payments for undelivered work will be refunded on a pro-rata basis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">12. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to update or modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Continued use of our services constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-foreground">13. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these terms, please contact us:
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

export default TermsOfService;
