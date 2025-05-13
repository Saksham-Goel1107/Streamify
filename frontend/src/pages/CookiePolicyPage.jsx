import { CookieIcon, ShieldCheckIcon, EyeIcon, ArrowRightIcon } from "lucide-react";

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-base-200">
      <div className="container mx-auto max-w-4xl space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold">Cookie Policy</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            We use cookies to enhance your experience and understand how you use Streamify
          </p>
        </div>

        {/* Main Content Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Essential Cookies */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-2 mb-4">
                <CookieIcon className="text-primary w-6 h-6" />
                <h2 className="card-title">Essential Cookies</h2>
              </div>
              <p className="opacity-80">
                Required for basic functionality like authentication and security.
                These cannot be disabled.
              </p>
              <div className="mt-4">
                <span className="badge badge-primary">Always Active</span>
              </div>
            </div>
          </div>

          {/* Performance Cookies */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheckIcon className="text-success w-6 h-6" />
                <h2 className="card-title">Performance</h2>
              </div>
              <p className="opacity-80">
                Help us improve our website by collecting anonymous information
                about how you use Streamify.
              </p>
              <div className="mt-4">
                <span className="badge badge-success">Analytics</span>
              </div>
            </div>
          </div>

          {/* Personalization Cookies */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex items-center gap-2 mb-4">
                <EyeIcon className="text-secondary w-6 h-6" />
                <h2 className="card-title">Personalization</h2>
              </div>
              <p className="opacity-80">
                Remember your preferences and provide personalized features
                for better experience.
              </p>
              <div className="mt-4">
                <span className="badge badge-secondary">Preferences</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cookie Management Section */}
        <div className="card bg-base-100 shadow-xl mt-8">
          <div className="card-body">
            <h2 className="card-title mb-4">Managing Your Cookie Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-base-200 rounded-lg">
                <div>
                  <h3 className="font-semibold">Essential Cookies</h3>
                  <p className="text-sm opacity-70">Required for basic site functionality</p>
                </div>
                <input type="checkbox" checked disabled className="toggle toggle-primary" />
              </div>

              <div className="flex items-center justify-between p-4 bg-base-200 rounded-lg">
                <div>
                  <h3 className="font-semibold">Analytics Cookies</h3>
                  <p className="text-sm opacity-70">Help us improve our website</p>
                </div>
                <input type="checkbox" className="toggle toggle-success" />
              </div>

              <div className="flex items-center justify-between p-4 bg-base-200 rounded-lg">
                <div>
                  <h3 className="font-semibold">Personalization Cookies</h3>
                  <p className="text-sm opacity-70">Customize your experience</p>
                </div>
                <input type="checkbox" className="toggle toggle-secondary" />
              </div>
            </div>

            <div className="card-actions justify-end mt-6">
              <button className="btn btn-primary">
                Save Preferences
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="prose max-w-none mt-8">
          <h2>Additional Information</h2>
          <p>
            We use different types of cookies to run our website and ads-related functions. A cookie is a small file containing a string of characters that is sent to your computer when you visit a website.
          </p>
          <h3>Updates to This Policy</h3>
          <p>
            We may update this Cookie Policy from time to time. When we make changes, we'll update the "Last Updated" date at the top of this policy and notify you through the app or by email.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
