import {
  UserPlus,
  Link as LinkIcon,
  Megaphone,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const testimonials = [
  {
    initials: "JD",
    name: "John Doe",
    role: "Health Coach",
    quote:
      "I've been promoting HardcoreWisdoms for 6 months and the results have been amazing. My audience loves the product and I'm earning consistent commissions every month.",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
    profileImage: "https://ph-avatars.imgix.net/6889/original",
  },
  {
    initials: "SM",
    name: "Sarah Miller",
    role: "Wellness Blogger",
    quote:
      "The 20% commission rate is one of the best in the industry. I made over $500 in my first month just by sharing with my email list!",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    profileImage: "https://ph-avatars.imgix.net/6861/original",
  },
  {
    initials: "RK",
    name: "Robert King",
    role: "Fitness Trainer",
    quote:
      "My clients trust my recommendations, and this product has helped me generate passive income while helping others.",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
    profileImage: "https://ph-avatars.imgix.net/6885/original",
  },
  {
    initials: "AJ",
    name: "Amy Johnson",
    role: "Nutritionist",
    quote:
      "The support team is amazing, and the product sells itself. I'm averaging $300/month in commissions!",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    profileImage: "https://ph-avatars.imgix.net/6864/original",
  },
  {
    initials: "MR",
    name: "Mike Robinson",
    role: "YouTuber",
    quote:
      "Started promoting to my audience 3 months ago. The conversion rates are incredible!",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
    profileImage: "https://ph-avatars.imgix.net/9008/original",
  },
  {
    initials: "EP",
    name: "Emma Parker",
    role: "Health Influencer",
    quote:
      "Best affiliate program I've joined. Consistent earnings and great product quality.",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    profileImage: "https://ph-avatars.imgix.net/787066/original",
  },
  {
    initials: "DS",
    name: "David Smith",
    role: "Wellness Coach",
    quote:
      "The tracking system is reliable, and payments are always on time. Making $400+ monthly.",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
    profileImage: "https://ph-avatars.imgix.net/78766/original",
  },
  {
    initials: "LW",
    name: "Lisa Wong",
    role: "Health Blogger",
    quote:
      "My blog readers love the product. I've earned over $2000 in just 4 months!",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    profileImage: "https://ph-avatars.imgix.net/6853/original",
  },
];

export default function Affiliate() {
  const benefits = [
    { label: "Cookie days", value: "30 days" },
    { label: "Commission type", value: "Percent Of Sale" },
    { label: "Commission amount", value: "20%" },
    {
      label: "Additional terms",
      value:
        "You will get a 20% commission on total Pine pollen tincture sales when a customer makes a purchase through your affiliate link or uses your coupon code.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      {/* How it works */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">How It Works</h2>
        <div className="text-lg text-muted-foreground">
          It's a straightforward path to become an Affiliate
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Register */}
        <div className="flex flex-col items-center">
          <div className="relative mb-3">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <UserPlus className="w-7 h-7 text-purple-600" />
            </div>
            <div className="hidden md:block absolute top-1/2 left-[calc(50%+32px)] w-[calc(100%-64px)] h-[2px] bg-gray-200 -translate-y-1/2" />
          </div>
          <div className="text-base font-semibold">Register</div>
        </div>

        {/* Get an affiliate link */}
        <div className="flex flex-col items-center">
          <div className="relative mb-3">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <LinkIcon className="w-7 h-7 text-blue-600" />
            </div>
            <div className="hidden md:block absolute top-1/2 left-[calc(50%+32px)] w-[calc(100%-64px)] h-[2px] bg-gray-200 -translate-y-1/2" />
          </div>
          <div className="text-base font-semibold">Get an affiliate link</div>
        </div>

        {/* Promote */}
        <div className="flex flex-col items-center">
          <div className="relative mb-3">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <Megaphone className="w-7 h-7 text-red-600" />
            </div>
            <div className="hidden md:block absolute top-1/2 left-[calc(50%+32px)] w-[calc(100%-64px)] h-[2px] bg-gray-200 -translate-y-1/2" />
          </div>
          <div className="text-base font-semibold">Promote</div>
        </div>

        {/* Earn */}
        <div className="flex flex-col items-center">
          <div className="mb-3">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <DollarSign className="w-7 h-7 text-purple-600" />
            </div>
          </div>
          <div className="text-base font-semibold">Earn</div>
        </div>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-3">Join our Affiliate Program</h1>
      </div>

      <div className="max-w-3xl mx-auto mb-8">
        <div className="border rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-left">Benefits</h2>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-[40%,60%] gap-4 sm:gap-8 items-start"
              >
                <div className="text-base font-bold font-mono">
                  {benefit.label}
                </div>
                <div className="flex items-start gap-2 min-w-0 sm:min-w-[200px]">
                  <div className="bg-[#319E5E] rounded-full p-0.5 mt-1 flex-shrink-0">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6667 5L7.50001 14.1667L3.33334 10"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text-sm">{benefit.value}</div>
                </div>
              </div>
            ))}
          </div>

          <hr className="my-6" />
        </div>
      </div>

      {/* Sales Statistics */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <div className="text-3xl font-bold bg-gradient-to-r  from-[#121212] to-[#670404] text-[#121212 bg-clip-text text-transparent">
              $50K+
            </div>
            <div className="text-sm text-gray-600">Paid to Affiliates</div>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <div className="text-3xl font-bold bg-gradient-to-r  from-[#121212] to-[#670404] text-[#121212 bg-clip-text text-transparent">
              500+
            </div>
            <div className="text-sm text-gray-600">Active Affiliates</div>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <div className="text-3xl font-bold bg-gradient-to-r  from-[#121212] to-[#670404] text-[#121212 bg-clip-text text-transparent">
              $250
            </div>
            <div className="text-sm text-gray-600">Avg. Monthly Earnings</div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-2">What Our Affiliates Say</h2>
          <div className="text-lg text-muted-foreground">
            Join our successful affiliate community
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials
              .slice(currentIndex, currentIndex + 2)
              .map((testimonial, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 shadow-sm transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {testimonial.profileImage ? (
                      <img
                        src={testimonial.profileImage}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className={`w-10 h-10 ${testimonial.bgColor} rounded-full flex items-center justify-center`}
                      >
                        <span
                          className={`${testimonial.textColor} font-semibold text-sm`}
                        >
                          {testimonial.initials}
                        </span>
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
              ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * 2)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentIndex === index * 2
                      ? "bg-purple-600 w-4"
                      : "bg-gray-300"
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          to="/dashboard"
          className="inline-flex items-center justify-center rounded-md text-xs sm:text-sm px-3 py-2 border-2 border-[#121212] bg-white hover:bg-gradient-to-r from-[#121212] to-[#670404] text-[#121212] hover:text-white transition-colors duration-300"
        >
          Apply Now →
        </Link>
      </div>
    </div>
  );
}
