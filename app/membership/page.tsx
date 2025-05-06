import Link from "next/link"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata = {
  title: "Membership Plans - FitForge",
  description: "Explore our flexible membership options designed to fit your lifestyle and fitness goals.",
}

const plans = [
  {
    name: "Basic",
    description: "Perfect for beginners and casual gym-goers",
    monthly: 29,
    quarterly: 79,
    yearly: 290,
    features: [
      { name: "Access to gym equipment", included: true },
      { name: "Locker room access", included: true },
      { name: "2 group classes per month", included: true },
      { name: "Fitness assessment", included: true },
      { name: "Personal training sessions", included: false },
      { name: "Nutrition consultation", included: false },
      { name: "Access to sauna and spa", included: false },
      { name: "Guest passes", included: false },
    ],
    popular: false,
  },
  {
    name: "Premium",
    description: "Our most popular plan for fitness enthusiasts",
    monthly: 59,
    quarterly: 159,
    yearly: 590,
    features: [
      { name: "Access to gym equipment", included: true },
      { name: "Locker room access", included: true },
      { name: "Unlimited group classes", included: true },
      { name: "Fitness assessment", included: true },
      { name: "1 personal training session/month", included: true },
      { name: "Nutrition consultation", included: true },
      { name: "Access to sauna and spa", included: true },
      { name: "Guest passes", included: false },
    ],
    popular: true,
  },
  {
    name: "Elite",
    description: "The ultimate fitness experience",
    monthly: 99,
    quarterly: 269,
    yearly: 990,
    features: [
      { name: "Access to gym equipment", included: true },
      { name: "Locker room access", included: true },
      { name: "Unlimited group classes", included: true },
      { name: "Fitness assessment", included: true },
      { name: "4 personal training sessions/month", included: true },
      { name: "Nutrition consultation", included: true },
      { name: "Access to sauna and spa", included: true },
      { name: "Guest passes (2 per month)", included: true },
    ],
    popular: false,
  },
]

export default function MembershipPage() {
  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Membership Plans</h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Choose the perfect membership plan that fits your fitness goals and lifestyle. All plans include access
                to our state-of-the-art facilities and supportive community.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <Tabs defaultValue="monthly" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="quarterly">Quarterly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="monthly" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={`rounded-lg border bg-background p-6 shadow-sm ${
                        plan.popular ? "ring-2 ring-primary" : ""
                      }`}
                    >
                      {plan.popular && (
                        <div className="mb-4">
                          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                      </div>
                      <div className="mb-6">
                        <span className="text-3xl font-bold">${plan.monthly}</span>
                        <span className="text-muted-foreground"> /month</span>
                      </div>
                      <ul className="mb-6 space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature.name} className="flex items-center gap-2">
                            {feature.included ? (
                              <Check className="h-4 w-4 text-primary" />
                            ) : (
                              <X className="h-4 w-4 text-muted-foreground" />
                            )}
                            <span className={`text-sm ${!feature.included ? "text-muted-foreground" : ""}`}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className={plan.popular ? "" : "bg-muted hover:bg-muted/80 text-foreground"}
                        size="lg"
                        variant={plan.popular ? "default" : "outline"}
                      >
                        <Link href="/contact" className="w-full">
                          Get Started
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="quarterly" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={`rounded-lg border bg-background p-6 shadow-sm ${
                        plan.popular ? "ring-2 ring-primary" : ""
                      }`}
                    >
                      {plan.popular && (
                        <div className="mb-4">
                          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                      </div>
                      <div className="mb-6">
                        <span className="text-3xl font-bold">${plan.quarterly}</span>
                        <span className="text-muted-foreground"> /quarter</span>
                        <p className="text-sm text-muted-foreground mt-1">Save up to 10% compared to monthly</p>
                      </div>
                      <ul className="mb-6 space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature.name} className="flex items-center gap-2">
                            {feature.included ? (
                              <Check className="h-4 w-4 text-primary" />
                            ) : (
                              <X className="h-4 w-4 text-muted-foreground" />
                            )}
                            <span className={`text-sm ${!feature.included ? "text-muted-foreground" : ""}`}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className={plan.popular ? "" : "bg-muted hover:bg-muted/80 text-foreground"}
                        size="lg"
                        variant={plan.popular ? "default" : "outline"}
                      >
                        <Link href="/contact" className="w-full">
                          Get Started
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="yearly" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={`rounded-lg border bg-background p-6 shadow-sm ${
                        plan.popular ? "ring-2 ring-primary" : ""
                      }`}
                    >
                      {plan.popular && (
                        <div className="mb-4">
                          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">{plan.name}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>
                      </div>
                      <div className="mb-6">
                        <span className="text-3xl font-bold">${plan.yearly}</span>
                        <span className="text-muted-foreground"> /year</span>
                        <p className="text-sm text-muted-foreground mt-1">Save up to 15% compared to monthly</p>
                      </div>
                      <ul className="mb-6 space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature.name} className="flex items-center gap-2">
                            {feature.included ? (
                              <Check className="h-4 w-4 text-primary" />
                            ) : (
                              <X className="h-4 w-4 text-muted-foreground" />
                            )}
                            <span className={`text-sm ${!feature.included ? "text-muted-foreground" : ""}`}>
                              {feature.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        className={plan.popular ? "" : "bg-muted hover:bg-muted/80 text-foreground"}
                        size="lg"
                        variant={plan.popular ? "default" : "outline"}
                      >
                        <Link href="/contact" className="w-full">
                          Get Started
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Plan Comparison</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Compare our membership plans to find the perfect fit for your fitness journey.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 bg-background">Features</th>
                    {plans.map((plan) => (
                      <th key={plan.name} className="text-center p-4 bg-background">
                        <div className="font-bold text-lg">{plan.name}</div>
                        <div className="text-primary font-medium">${plan.monthly}/mo</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4 bg-background">Gym Access</td>
                    <td className="border p-4 text-center bg-background">24/5</td>
                    <td className="border p-4 text-center bg-background">24/7</td>
                    <td className="border p-4 text-center bg-background">24/7</td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-background">Group Classes</td>
                    <td className="border p-4 text-center bg-background">2 per month</td>
                    <td className="border p-4 text-center bg-background">Unlimited</td>
                    <td className="border p-4 text-center bg-background">Unlimited</td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-background">Personal Training</td>
                    <td className="border p-4 text-center bg-background">
                      <X className="h-4 w-4 text-muted-foreground mx-auto" />
                    </td>
                    <td className="border p-4 text-center bg-background">1 session/month</td>
                    <td className="border p-4 text-center bg-background">4 sessions/month</td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-background">Nutrition Consultation</td>
                    <td className="border p-4 text-center bg-background">
                      <X className="h-4 w-4 text-muted-foreground mx-auto" />
                    </td>
                    <td className="border p-4 text-center bg-background">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                    <td className="border p-4 text-center bg-background">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-background">Sauna & Spa</td>
                    <td className="border p-4 text-center bg-background">
                      <X className="h-4 w-4 text-muted-foreground mx-auto" />
                    </td>
                    <td className="border p-4 text-center bg-background">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                    <td className="border p-4 text-center bg-background">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-background">Guest Passes</td>
                    <td className="border p-4 text-center bg-background">
                      <X className="h-4 w-4 text-muted-foreground mx-auto" />
                    </td>
                    <td className="border p-4 text-center bg-background">
                      <X className="h-4 w-4 text-muted-foreground mx-auto" />
                    </td>
                    <td className="border p-4 text-center bg-background">2 per month</td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-background">Body Composition Analysis</td>
                    <td className="border p-4 text-center bg-background">Once</td>
                    <td className="border p-4 text-center bg-background">Monthly</td>
                    <td className="border p-4 text-center bg-background">Bi-weekly</td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-background">Custom Workout Program</td>
                    <td className="border p-4 text-center bg-background">
                      <X className="h-4 w-4 text-muted-foreground mx-auto" />
                    </td>
                    <td className="border p-4 text-center bg-background">
                      <X className="h-4 w-4 text-muted-foreground mx-auto" />
                    </td>
                    <td className="border p-4 text-center bg-background">
                      <Check className="h-4 w-4 text-primary mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-4 bg-background"></td>
                    {plans.map((plan) => (
                      <td key={plan.name} className="border p-4 text-center bg-background">
                        <Button
                          asChild
                          className={plan.popular ? "" : "bg-muted hover:bg-muted/80 text-foreground"}
                          variant={plan.popular ? "default" : "outline"}
                        >
                          <Link href="/contact">Choose {plan.name}</Link>
                        </Button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our membership plans.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold">Is there a joining fee?</h3>
                  <p className="text-muted-foreground">
                    Yes, there is a one-time joining fee of $49 for all new members. This fee is occasionally waived
                    during promotional periods.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Can I freeze my membership?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can freeze your membership for up to 3 months per year for medical reasons or extended
                    travel at a reduced monthly rate.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">What is your cancellation policy?</h3>
                  <p className="text-muted-foreground">
                    Monthly memberships require 30 days' notice for cancellation. Annual memberships can be canceled
                    with a fee after the initial 3 months.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold">Can I upgrade my membership?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can upgrade your membership at any time. The new rate will be prorated for the remainder of
                    your billing cycle.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Are there family discounts?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer a 10% discount on additional family memberships when two or more family members join.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Do you offer corporate memberships?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer special rates for corporate memberships. Please contact our sales team for more
                    information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Start Your Fitness Journey?
            </h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto opacity-90">
              Join FitForge today and take the first step towards a healthier, stronger you.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground"
                asChild
              >
                <Link href="/classes">View Classes</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
