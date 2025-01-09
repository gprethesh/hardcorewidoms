import { Card, CardHeader, CardContent } from "@/components/ui/card";
import DashHeader from "./DashHeader";
import { Button } from "@/components/ui/button";
import {
  Edit,
  Settings,
  Copy,
  CheckCheck,
  BookOpen,
  GraduationCap,
  Brain,
  Lightbulb,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [copied, setCopied] = useState(false);
  const affiliateLink = "https://example.com/ref/ahmed123";
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

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(affiliateLink);
    setCopied(true);
    toast.success("Affiliate link copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-screen bg-white/40 backdrop-blur-md">
      <DashHeader />

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-6 overflow-y-auto">
        {/* Header Section - More compact */}
        <div className="flex items-center  mb-6">
          <div>
            <h1 className="text-xl font-semibold text-black">Dashboard</h1>
            <p className="text-sm text-muted-foreground">{currentDate}</p>
          </div>
        </div>

        {/* Welcome Card - More stylish */}
        <Card className="mb-6">
          <CardContent className="p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="space-y-2">
                <h2 className="text-xl lg:text-2xl font-semibold text-[#670404]">
                  Hi, Ahmed
                </h2>
                <p className="text-muted-foreground">
                  Ready to explore insights on relationships and personal
                  growth?
                </p>
                <Link to="/mastery">
                  <Button
                    variant="default"
                    size="sm"
                    className="bg-[#670404] hover:bg-[#670404]/90"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Start Learning
                  </Button>
                </Link>
              </div>
              <img
                src="/illustration.svg"
                alt="Illustration"
                className="h-24 lg:h-32"
              />
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid - More consistent styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Total Earnings", value: "$2.4k" },
            { label: "Total Referrals", value: "156" },
            { label: "Total Payouts", value: "$2.4k" },
            { label: "Conversion Rate", value: "3.2%" },
          ].map((stat, index) => (
            <Card
              key={index}
              className="hover:bg-[#670404]/5 transition-colors"
            >
              <CardHeader className="p-4 pb-2">
                <div className="text-2xl font-semibold text-[#670404]">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Affiliate Link Card - Moved below stats grid */}
        <Card>
          <CardHeader className="pb-2">
            <h3 className="text-lg font-semibold text-[#670404]">
              Your Affiliate Link
            </h3>
            <p className="text-sm text-muted-foreground">
              Share this link to earn rewards
            </p>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex space-x-2">
              <Input
                readOnly
                value={affiliateLink}
                className="font-mono text-sm bg-muted/50"
              />
              <Button
                variant="outline"
                size="icon"
                onClick={copyToClipboard}
                className="shrink-0"
              >
                {copied ? (
                  <CheckCheck className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Active</span>
              </div>
              <span className="text-xs">•</span>
              <span>0 clicks today</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
