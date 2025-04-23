import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const solutions = [
  {
    title: "For Startups",
    description: "Scalable solutions designed to grow with your business",
    price: "$49",
    features: [
      "Cloud infrastructure setup",
      "Basic analytics dashboard",
      "5 team members",
      "24/7 email support",
      "1 TB storage"
    ],
    cta: "Perfect for new ventures",
    popular: false
  },
  {
    title: "For Business",
    description: "Comprehensive tools for established businesses",
    price: "$99",
    features: [
      "Advanced infrastructure management",
      "Custom analytics solutions",
      "Unlimited team members",
      "Priority 24/7 support",
      "5 TB storage",
      "Custom integrations"
    ],
    cta: "Most popular choice",
    popular: true
  },
  {
    title: "For Enterprise",
    description: "Tailored solutions for large organizations",
    price: "Custom",
    features: [
      "Dedicated infrastructure",
      "Enterprise analytics suite",
      "Unlimited everything",
      "Dedicated account manager",
      "Unlimited storage",
      "Custom development",
      "SLA guarantees"
    ],
    cta: "For large organizations",
    popular: false
  }
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Solutions</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose the right plan for your business
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We offer flexible options designed to meet the needs of businesses of all sizes.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-3">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`rounded-lg shadow-lg divide-y divide-gray-200 ${
                solution.popular ? 'border-2 border-blue-500 relative' : 'border border-gray-200'
              }`}
            >
              {solution.popular && (
                <div className="absolute top-0 inset-x-0 transform -translate-y-1/2">
                  <div className="inline-block px-4 py-1 text-sm font-semibold tracking-wider uppercase bg-blue-500 text-white rounded-full">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">{solution.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{solution.description}</p>
                <p className="mt-4">
                  <span className="text-4xl font-extrabold text-gray-900">{solution.price}</span>
                  {solution.price !== "Custom" && <span className="text-base font-medium text-gray-500">/mo</span>}
                </p>
                <Button 
                  className={`mt-6 w-full ${solution.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={solution.popular ? "default" : "outline"}
                >
                  Get started
                </Button>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide">{solution.cta}</h4>
                <ul className="mt-6 space-y-4">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex">
                      <CheckCircle className="flex-shrink-0 h-5 w-5 text-green-500" />
                      <span className="ml-3 text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;