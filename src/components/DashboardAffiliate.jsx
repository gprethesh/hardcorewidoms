import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import DashHeader from "./DashHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function DashboardAffiliate() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 5;
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

  const affiliateData = [
    {
      email: "john.doe@example.com",
      amountBought: "$499",
      commission: "$49.90",
      status: "Paid",
      date: "2024-03-02",
    },
    {
      email: "sarah.smith@example.com",
      amountBought: "$999",
      commission: "$99.90",
      status: "Pending",
      date: "2024-03-01",
    },
  ];

  const totalPages = Math.ceil(affiliateData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = affiliateData.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col h-screen bg-white/40 backdrop-blur-md">
      <DashHeader />

      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8 overflow-y-auto">
        <div className="flex items-center mb-8">
          <div>
            <h1 className="text-xl font-semibold text-black">
              Affiliate History
            </h1>
            <p className="text-sm text-muted-foreground">{currentDate}</p>
          </div>
        </div>

        {/* Affiliate Stats Table */}
        <Card className="p-4">
          <h2 className="text-lg font-semibold text-[#670404] mb-4">
            Affiliate Data
          </h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Amount Bought</TableHead>
                  <TableHead>Commission</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.amountBought}</TableCell>
                    <TableCell>{row.commission}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          row.status === "Paid"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {row.status}
                      </span>
                    </TableCell>
                    <TableCell>{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 flex justify-center">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    className={
                      currentPage === 1
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>

                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      onClick={() => setCurrentPage(i + 1)}
                      isActive={currentPage === i + 1}
                      className="cursor-pointer"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    className={
                      currentPage === totalPages
                        ? "pointer-events-none opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </Card>
      </div>
    </div>
  );
}
