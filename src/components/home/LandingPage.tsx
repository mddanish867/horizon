'use client'

import { motion } from "framer-motion"
import { CreditCard, Banknote, PiggyBank } from "lucide-react"

const LandingPage = () => {
  return (
    <div className="py-16">
      <main className="p-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Welcome to Horizon Banking
          </h2>
          <p className="mb-8 text-white text-xl">
            Your trusted partner for all your financial needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {[
            {
              icon: CreditCard,
              title: "Credit Cards",
              description:
                "Explore our range of credit cards with great benefits",
            },
            {
              icon: Banknote,
              title: "Personal Loans",
              description:
                "Get the funds you need with our flexible loan options",
            },
            {
              icon: PiggyBank,
              title: "Savings Accounts",
              description:
                "Grow your wealth with our high-interest savings accounts",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <item.icon className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            Why Choose Horizon Banking?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "24/7 Online Banking",
              "Competitive Interest Rates",
              "Secure Transactions",
              "Mobile App",
              "Excellent Customer Service",
              "Wide Range of Financial Products",
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center"
              >
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}

export default LandingPage