import { Mail, Phone, MapPin, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"

export const metadata = {
  title: "Contact Us - FitForge",
  description: "Get in touch with FitForge. Contact us for membership inquiries, class bookings, or general questions.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col max-w-6xl mx-auto">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Contact Us</h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Have questions about our gym, membership plans, or classes? We're here to help. Reach out to us using
                the form below or contact information.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Get in Touch</h2>
                <ContactForm />
              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Location</h3>
                      <address className="not-italic text-muted-foreground">
                        <p>123 Fitness Street</p>
                        <p>New York, NY 10001</p>
                      </address>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-muted-foreground">info@fitforge.com</p>
                      <p className="text-muted-foreground">membership@fitforge.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Phone</h3>
                      <p className="text-muted-foreground">(123) 456-7890</p>
                      <p className="text-muted-foreground">(123) 456-7891</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Hours</h3>
                      <ul className="text-muted-foreground space-y-1">
                        <li>
                          <span className="font-medium">Mon-Fri:</span> 5am - 10pm
                        </li>
                        <li>
                          <span className="font-medium">Sat:</span> 7am - 8pm
                        </li>
                        <li>
                          <span className="font-medium">Sun:</span> 8am - 6pm
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="bg-muted p-3 rounded-full hover:bg-muted/80" aria-label="Facebook">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-muted p-3 rounded-full hover:bg-muted/80" aria-label="Instagram">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                    <a href="#" className="bg-muted p-3 rounded-full hover:bg-muted/80" aria-label="Twitter">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-muted p-3 rounded-full hover:bg-muted/80" aria-label="YouTube">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                        <path d="m10 15 5-3-5-3z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Find Us</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Located in the heart of the city, FitForge is easily accessible by public transportation.
              </p>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="FitForge Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Find answers to common questions about our gym and services.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
                {FAQ.map((faq, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-bold">{faq.question}</h3>
                    <p className="text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

const FAQ = [
  {
    question: "How do I book a class?",
    answer: "You can book a class through our website, mobile app, or by calling our front desk. Members can book classes up to 7 days in advance.",
  },
  {
    question: "What should I bring to my first visit?",
    answer: "Please bring a valid ID, comfortable workout clothes, athletic shoes, and a water bottle. Towels are provided at the gym.",
  },
  {
    question: "Do you offer free trials?",
    answer: "Yes, we offer a 3-day free trial for new visitors. Contact us to schedule your trial period.",
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we have a dedicated parking lot for members with 2 hours of free parking. Street parking is also available nearby.",
  },
  {
    question: "Can I freeze my membership?",
    answer: "Yes, members can freeze their membership for up to 3 months per year for medical reasons or extended travel.",
  },
  {
    question: "Do you have showers and lockers?",
    answer: "Yes, we have fully equipped locker rooms with showers, lockers, and amenities. Bring your own lock or rent one at the front desk.",
  },
]