import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Basic",
    price: "$29",
    period: "per month",
    description: "Perfect for beginners and casual gym-goers",
    features: ["Access to gym equipment", "Locker room access", "2 group classes per month", "Fitness assessment"],
    cta: "Get Started",
    href: "/membership",
    popular: false,
  },
  {
    name: "Premium",
    price: "$59",
    period: "per month",
    description: "Our most popular plan for fitness enthusiasts",
    features: [
      "Full gym access 24/7",
      "Unlimited group classes",
      "1 personal training session/month",
      "Nutrition consultation",
      "Access to sauna and spa",
    ],
    cta: "Get Started",
    href: "/membership",
    popular: true,
  },
  {
    name: "Elite",
    price: "$99",
    period: "per month",
    description: "The ultimate fitness experience",
    features: [
      "All Premium features",
      "4 personal training sessions/month",
      "Quarterly body composition analysis",
      "Custom workout program",
      "Priority class booking",
      "Guest passes (2 per month)",
    ],
    cta: "Get Started",
    href: "/membership",
    popular: false,
  },
]

export default function PricingPreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`rounded-lg border bg-background p-6 shadow-sm ${plan.popular ? "ring-2 ring-primary" : ""}`}
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
            <span className="text-3xl font-bold">{plan.price}</span>
            <span className="text-muted-foreground"> {plan.period}</span>
          </div>
          <ul className="mb-6 space-y-2">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className={plan.popular ? "" : "bg-muted hover:bg-muted/80 text-foreground"}
            size="lg"
            variant={plan.popular ? "default" : "outline"}
          >
            <Link href={plan.href} className="w-full">
              {plan.cta}
            </Link>
          </Button>
        </div>
      ))}
    </div>
  )
}
