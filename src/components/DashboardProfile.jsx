import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import DashHeader from "./DashHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Edit2, Save } from "lucide-react";

export default function DashboardProfile() {
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

  // Sample initial data - replace with actual data from your backend
  const [billingDetails, setBillingDetails] = useState({
    streetAddress: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
  });

  const [bankDetails, setBankDetails] = useState({
    accountName: "John Doe",
    accountNumber: "1234567890",
    bankName: "Chase Bank",
    swiftCode: "CHASUS33",
  });

  const [editingBilling, setEditingBilling] = useState(false);
  const [editingBank, setEditingBank] = useState(false);

  const handleBillingUpdate = (e) => {
    e.preventDefault();
    // Add API call to update billing details
    setEditingBilling(false);
  };

  const handleBankUpdate = (e) => {
    e.preventDefault();
    // Add API call to update bank details
    setEditingBank(false);
  };

  return (
    <div className="flex flex-col h-screen bg-white/40 backdrop-blur-md">
      <DashHeader />

      <div className="flex-1 p-4 lg:p-8 overflow-y-auto">
        <div className="flex items-center mb-8">
          <div>
            <h1 className="text-xl font-semibold text-black">
              Profile Settings
            </h1>
            <p className="text-sm text-muted-foreground">{currentDate}</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Billing Address Section */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-[#670404]">
                Billing Address
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingBilling(!editingBilling)}
              >
                {editingBilling ? (
                  <Save className="h-4 w-4" />
                ) : (
                  <Edit2 className="h-4 w-4" />
                )}
              </Button>
            </div>

            <form onSubmit={handleBillingUpdate}>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Street Address</label>
                  <Input
                    disabled={!editingBilling}
                    value={billingDetails.streetAddress}
                    onChange={(e) =>
                      setBillingDetails({
                        ...billingDetails,
                        streetAddress: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">City</label>
                    <Input
                      disabled={!editingBilling}
                      value={billingDetails.city}
                      onChange={(e) =>
                        setBillingDetails({
                          ...billingDetails,
                          city: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">State</label>
                    <Input
                      disabled={!editingBilling}
                      value={billingDetails.state}
                      onChange={(e) =>
                        setBillingDetails({
                          ...billingDetails,
                          state: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">ZIP Code</label>
                    <Input
                      disabled={!editingBilling}
                      value={billingDetails.zipCode}
                      onChange={(e) =>
                        setBillingDetails({
                          ...billingDetails,
                          zipCode: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Country</label>
                    <Input
                      disabled={!editingBilling}
                      value={billingDetails.country}
                      onChange={(e) =>
                        setBillingDetails({
                          ...billingDetails,
                          country: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                {editingBilling && (
                  <Button
                    type="submit"
                    className="w-full bg-[#670404] hover:bg-[#500303]"
                  >
                    Save Billing Details
                  </Button>
                )}
              </div>
            </form>
          </Card>

          {/* Bank Details Section */}
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-[#670404]">
                Bank Details
              </h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setEditingBank(!editingBank)}
              >
                {editingBank ? (
                  <Save className="h-4 w-4" />
                ) : (
                  <Edit2 className="h-4 w-4" />
                )}
              </Button>
            </div>

            <form onSubmit={handleBankUpdate}>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">
                    Account Holder Name
                  </label>
                  <Input
                    disabled={!editingBank}
                    value={bankDetails.accountName}
                    onChange={(e) =>
                      setBankDetails({
                        ...bankDetails,
                        accountName: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Account Number</label>
                  <Input
                    disabled={!editingBank}
                    value={bankDetails.accountNumber}
                    onChange={(e) =>
                      setBankDetails({
                        ...bankDetails,
                        accountNumber: e.target.value,
                      })
                    }
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Bank Name</label>
                  <Input
                    disabled={!editingBank}
                    value={bankDetails.bankName}
                    onChange={(e) =>
                      setBankDetails({
                        ...bankDetails,
                        bankName: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">SWIFT Code</label>
                    <Input
                      disabled={!editingBank}
                      value={bankDetails.swiftCode}
                      onChange={(e) =>
                        setBankDetails({
                          ...bankDetails,
                          swiftCode: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                {editingBank && (
                  <Button
                    type="submit"
                    className="w-full bg-[#670404] hover:bg-[#500303]"
                  >
                    Save Bank Details
                  </Button>
                )}
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
