import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import DashHeader from "./DashHeader";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

export default function DashboardPlan() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);
    setCurrentDate(formattedDate);
  }, []);

  const purchaseStatus = {
    isPurchased: true,
    plan: "Lifetime Pro Access",
    purchaseDate: "March 1, 2024",
    price: "$49.99",
    features: [
      "Lifetime access to all articles",
      "Priority support",
      "Advanced analytics",
      "All future updates included",
    ],
  };

  return (
    <div className="flex flex-col h-screen bg-white/40 backdrop-blur-md">
      <DashHeader />

      <div className="flex-1 p-4 lg:p-8 overflow-y-auto">
        <div className="flex items-center mb-8">
          <div>
            <h1 className="text-xl font-semibold text-black">
              Subscription Plan
            </h1>
            <p className="text-sm text-muted-foreground">{currentDate}</p>
          </div>
        </div>

        <Card className="p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-[#670404]">
              Access Status
            </h2>
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                purchaseStatus.isPurchased
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {purchaseStatus.isPurchased ? "Lifetime Access" : "No Access"}
            </span>
          </div>

          {purchaseStatus.isPurchased ? (
            <>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Plan Type</p>
                  <p className="font-medium">{purchaseStatus.plan}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">One-time Price</p>
                  <p className="font-medium">{purchaseStatus.price}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Purchase Date</p>
                  <p className="font-medium">{purchaseStatus.purchaseDate}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Valid Until</p>
                  <p className="font-medium">Lifetime Access</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">Plan Features</h3>
                {purchaseStatus.features?.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="rounded-full bg-red-100 p-3">
                  <X className="h-6 w-6 text-red-600" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">No Access</h3>
                <p className="text-gray-500 mb-4">
                  Get lifetime access to all premium features and tools
                </p>
              </div>
              <Button className="w-full bg-[#670404] hover:bg-[#500303]">
                Purchase Now
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
