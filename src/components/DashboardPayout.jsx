import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import DashHeader from "./DashHeader";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";

export default function DashboardPayout() {
  const [currentDate, setCurrentDate] = useState("");
  const [currentEarnings, setCurrentEarnings] = useState(75); // Example amount
  const minimumPayout = 100;

  // Sample payout history - replace with actual data from your backend
  const [payoutHistory, setPayoutHistory] = useState([
    { id: 1, date: "2024-03-15", amount: 150, status: "Completed" },
    { id: 2, date: "2024-02-15", amount: 200, status: "Completed" },
    { id: 3, date: "2024-01-15", amount: 175, status: "Completed" },
    // Add more history items as needed
  ]);

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

  const progressPercentage = (currentEarnings / minimumPayout) * 100;

  return (
    <div className="flex flex-col h-screen bg-white/40 backdrop-blur-md">
      <DashHeader />

      <div className="flex-1 p-4 lg:p-8 overflow-y-auto">
        <div className="flex items-center mb-8">
          <div>
            <h1 className="text-xl font-semibold text-black">
              Payout Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">{currentDate}</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Current Earnings Section */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-[#670404] mb-4">
              Current Earnings
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  Progress to minimum payout
                </span>
                <span className="text-sm font-medium">
                  ${currentEarnings} / ${minimumPayout}
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
              <p className="text-sm text-muted-foreground">
                Minimum payout threshold: ${minimumPayout}
              </p>
              {currentEarnings >= minimumPayout ? (
                <div className="space-y-3">
                  <div className="bg-green-100 p-3 rounded-md text-green-700 text-sm">
                    You have reached the minimum payout threshold!
                  </div>
                  <button
                    className="w-full py-2 px-4 bg-[#670404] text-white rounded-md hover:bg-[#4a0303] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() => {
                      // Add your checkout logic here
                      console.log("Processing payout...");
                    }}
                  >
                    Request Payout
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="bg-yellow-100 p-3 rounded-md text-yellow-700 text-sm">
                    ${minimumPayout - currentEarnings} more needed for next
                    payout
                  </div>
                  <button
                    className="w-full py-2 px-4 bg-[#670404] text-white rounded-md opacity-50 cursor-not-allowed"
                    disabled
                  >
                    Request Payout
                  </button>
                </div>
              )}
            </div>
          </Card>

          {/* Payout History Section */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-[#670404] mb-4">
              Recent Payouts
            </h2>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payoutHistory.map((payout) => (
                    <TableRow key={payout.id}>
                      <TableCell>
                        {new Date(payout.date).toLocaleDateString()}
                      </TableCell>
                      <TableCell>${payout.amount}</TableCell>
                      <TableCell>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {payout.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
