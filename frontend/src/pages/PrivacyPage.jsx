import {
  Shield,
  Lock,
  Eye,
  User,
  Server,
  KeyRound,
  Bell,
  UserCog,
  RefreshCcw,
} from "lucide-react";

const PrivacyPage = () => {
  const dataPoints = [
    {
      icon: User,
      title: "Profile Information",
      description: "Name, email, language preferences",
    },
    {
      icon: Bell,
      title: "Communication",
      description: "Messages, call history, notifications",
    },
    {
      icon: Server,
      title: "Usage Data",
      description: "Login times, features used, interactions",
    },
  ];

  const securityMeasures = [
    {
      icon: Lock,
      title: "Encryption",
      description: "End-to-end encryption for messages and calls",
    },
    {
      icon: Shield,
      title: "Data Protection",
      description: "Regular security audits and updates",
    },
    {
      icon: KeyRound,
      title: "Access Control",
      description: "Strict authentication and authorization",
    },
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 bg-base-200">
      <div className="container mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Your privacy is our top priority. Learn how we protect your data.
          </p>
        </div>

        {/* Data Collection Section */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Eye className="text-primary" />
              Data We Collect
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {dataPoints.map((point, index) => (
                <div key={index} className="border border-base-300 rounded-lg p-4">
                  <point.icon className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold mb-2">{point.title}</h3>
                  <p className="text-sm opacity-70">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Measures */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Shield className="text-primary" />
              How We Protect Your Data
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {securityMeasures.map((measure, index) => (
                <div key={index} className="border border-base-300 rounded-lg p-4">
                  <measure.icon className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold mb-2">{measure.title}</h3>
                  <p className="text-sm opacity-70">{measure.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* User Rights Card */}
        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-4">
              <UserCog className="w-8 h-8" />
              <h2 className="card-title text-2xl">Your Privacy Rights</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">Access Your Data</h3>
                <p className="opacity-90">
                  Request a copy of all your personal data we store
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Data Portability</h3>
                <p className="opacity-90">
                  Export your data in a machine-readable format
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Delete Your Data</h3>
                <p className="opacity-90">
                  Request complete deletion of your account
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Update Information</h3>
                <p className="opacity-90">
                  Modify or correct your personal information
                </p>
              </div>
            </div>
            <div className="card-actions justify-end mt-4">
              <button className="btn btn-outline btn-sm">
                <RefreshCcw className="w-4 h-4 mr-2" />
                Update Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
