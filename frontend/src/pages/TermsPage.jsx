import { Scale, Shield, UserCheck, MessageSquare, VideoIcon, Globe2 } from "lucide-react";

const TermsPage = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-base-200">
      <div className="container mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Last updated: May 13, 2025
          </p>
        </div>

        {/* Key Points Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <Scale className="w-8 h-8 text-primary mb-4" />
              <h3 className="card-title">Fair Usage</h3>
              <p className="opacity-80">Use our services responsibly and legally, respecting other users' rights.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <Shield className="w-8 h-8 text-primary mb-4" />
              <h3 className="card-title">Data Protection</h3>
              <p className="opacity-80">We prioritize the security and privacy of your personal information.</p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <UserCheck className="w-8 h-8 text-primary mb-4" />
              <h3 className="card-title">User Rights</h3>
              <p className="opacity-80">You retain rights to your content while granting us license to use it.</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Communication Guidelines</h2>
              </div>
              <p className="opacity-80">
                Maintain respectful communication with other users. Harassment, hate speech,
                or any form of discrimination will not be tolerated and may result in account suspension.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <VideoIcon className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Video Call Rules</h2>
              </div>
              <p className="opacity-80">
                Video calls should be used for language learning purposes. Recording calls
                without consent is prohibited. Report any inappropriate behavior immediately.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Globe2 className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Content Guidelines</h2>
              </div>
              <p className="opacity-80">
                Share content that's appropriate for a diverse, global audience. You retain
                ownership of your content while granting us license to display it on our platform.
              </p>
            </div>
          </div>
        </div>

        {/* Action Card */}
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">Need More Information?</h2>
            <p>Contact our support team for detailed explanations of our terms and policies.</p>
            <div className="card-actions justify-end">
              <a href="https://github.com/Saksham-Goel1107/" target="_blank" className="btn">Contact Support</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
