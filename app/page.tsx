export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get Started
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Welcome! This is your starting point.
          </p>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Quick Start
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Placeholder content for getting started guide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Features
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Feature placeholder 1</li>
                <li>Feature placeholder 2</li>
                <li>Feature placeholder 3</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Next Steps
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Add your content here to guide users through the next steps.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
