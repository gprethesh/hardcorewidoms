import {
  Bell,
  Mail,
  ChevronDown,
  Plus,
  Monitor,
  Edit,
  Users,
  Settings,
  Eye,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, useLocation } from "react-router-dom";

export default function DashHeader() {
  const location = useLocation();

  // Helper function to determine if a path is active
  const isActivePath = (path) => location.pathname === path;

  return (
    <div className="border-b p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#670404] text-white flex items-center justify-center">
              HCW
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <Link to="/dashboard">
              <Button
                variant="ghost"
                size="icon"
                className={`text-gray-500 hover:bg-[#670404] hover:text-white ${
                  isActivePath("/dashboard") ? "bg-[#670404] text-white" : ""
                }`}
              >
                <Monitor size={20} />
              </Button>
            </Link>
            <Link to="/dashboard-affiliate">
              <Button
                variant="ghost"
                size="icon"
                className={`text-gray-500 hover:bg-[#670404] hover:text-white ${
                  isActivePath("/dashboard-affiliate")
                    ? "bg-[#670404] text-white"
                    : ""
                }`}
              >
                <Eye size={20} />
              </Button>
            </Link>
            <Link to="/dashboard-profile">
              <Button
                variant="ghost"
                size="icon"
                className={`text-gray-500 hover:bg-[#670404] hover:text-white ${
                  isActivePath("/dashboard-profile")
                    ? "bg-[#670404] text-white"
                    : ""
                }`}
              >
                <Edit size={20} />
              </Button>
            </Link>
            <Link to="/dashboard-plan">
              <Button
                variant="ghost"
                size="icon"
                className={`text-gray-500 hover:bg-[#670404] hover:text-white ${
                  isActivePath("/dashboard-plan")
                    ? "bg-[#670404] text-white"
                    : ""
                }`}
              >
                <Settings size={20} />
              </Button>
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="flex items-center gap-2 hover:bg-[#670404] group"
            >
              <Avatar className="h-8 w-8">
                <AvatarImage src="" />
                <AvatarFallback>AK</AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline group-hover:text-white">
                Ahmed Khan
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-[#670404] hover:text-white"
            >
              <LogOut size={20} />
            </Button>
          </div>
        </div>
      </div>

      <nav className="md:hidden flex items-center gap-2 justify-between mt-4 border-t pt-4">
        <Link to="/dashboard">
          <Button
            variant="ghost"
            size="icon"
            className={`text-gray-500 hover:bg-[#670404] hover:text-white ${
              isActivePath("/dashboard") ? "bg-[#670404] text-white" : ""
            }`}
          >
            <Monitor size={20} />
          </Button>
        </Link>
        <Link to="/dashboard-affiliate">
          <Button
            variant="ghost"
            size="icon"
            className={`text-gray-500 hover:bg-[#670404] hover:text-white ${
              isActivePath("/dashboard-affiliate")
                ? "bg-[#670404] text-white"
                : ""
            }`}
          >
            <Eye size={20} />
          </Button>
        </Link>
        <Link to="/dashboard-profile">
          <Button
            variant="ghost"
            size="icon"
            className={`text-gray-500 hover:bg-[#670404] hover:text-white ${
              isActivePath("/dashboard-profile")
                ? "bg-[#670404] text-white"
                : ""
            }`}
          >
            <Edit size={20} />
          </Button>
        </Link>
        <Link to="/dashboard-plan">
          <Button
            variant="ghost"
            size="icon"
            className={`text-gray-500 hover:bg-[#670404] hover:text-white ${
              isActivePath("/dashboard-plan") ? "bg-[#670404] text-white" : ""
            }`}
          >
            <Settings size={20} />
          </Button>
        </Link>
      </nav>
    </div>
  );
}
