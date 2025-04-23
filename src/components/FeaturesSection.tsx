import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Shield, Zap, Globe, Code, Users } from "lucide-react";

const features = [
  {
    title: "Advanced Analytics",
    description: "Gain valuable insights with our powerful analytics platform that transforms raw data into actionable business intelligence.",
    icon: <BarChart3 className="h-10 w-10 text-blue-500" />
  },
  {
    title: "Enterprise Security",
    description: "Protect your business with our enterprise-grade security solutions, ensuring your data remains safe and compliant.",
    icon: <Shield className="h-10 w-10 text-blue-500" />
  },
  {
    title: "High Performance",
    description: "Experience lightning-fast performance with our optimized infrastructure designed for speed and reliability.",
    icon: <Zap className="h-10 w-10 text-blue-500" />
  },
  {
    title: "Global Reach",
    description: "Connect with customers worldwide through our globally distributed network ensuring low latency and high availability.",
    icon: <Globe className="h-10 w-10 text-blue-500" />
  },
  {
    title: "Custom Development",
    description: "Get tailored solutions built specifically for your business needs by our expert development team.",
    icon: <Code className="h-10 w-10 text-blue-500" />
  },
  {
    title: "Dedicated Support",
    description: "Receive 24/7 support from our dedicated team of experts committed to your success and satisfaction.",
    icon: <Users className="h-10 w-10 text-blue-500" />
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our comprehensive suite of tools and services designed to help your business thrive in the digital age.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;