"use client";

import * as React from "react";
import {
  AudioWaveform,
  PackageSearch,
  LogOut,
  Command,
  GalleryVerticalEnd,
  House,
  Settings2,
  Gauge,
  Construction,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProfile } from "@/components/nav-profile";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { NavDashboard } from "./nav-dashboard";

// Sample data
const data = {
  user: {
    name: "Juan Dela Cruz",
    email: "juan.delacruz@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "MCR Division",
      logo: GalleryVerticalEnd,
      plan: "(meaning of MCR)",
    },
    {
      name: "TR/DI Division",
      logo: AudioWaveform,
      plan: "(meaning of TR/DI)",
    },
    {
      name: "PH Division",
      logo: Command,
      plan: "(meaning of PH)",
    },
  ],
  navMain: [
    {
      title: "Process",
      url: "#",
      icon: PackageSearch,
      isActive: true,
      items: [
        {
          title: "[PROCESS 1]",
          url: "#",
        },
        {
          title: "[PROCESS 2]",
          url: "#",
        },
        {
          title: "[PROCESS 3]",
          url: "#",
        },
      ],
    },
    {
      title: "Maintenance",
      url: "#",
      icon: Construction,
      isActive: true,
      items: [
        {
          title: "[MAINTENANCE 1]",
          url: "#",
        },
        {
          title: "[MAINTENANCE 2]",
          url: "#",
        },
        {
          title: "[MAINTENANCE 3]",
          url: "#",
        },
      ],
    },
  ],
  navDashboard: [
    {
      name: "Home",
      url: "#",
      icon: House,
    },
    {
      name: "Dashboard",
      url: "#",
      icon: Gauge,
    },
  ],
  navProfile: [
    {
      name: "Account Settings",
      url: "#",
      icon: Settings2,
    },
    {
      name: "Logout",
      url: "#",
      icon: LogOut,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <NavUser user={data.user} />
      </SidebarHeader>
      <SidebarContent className="flex flex-col justify-between">
        <div>
          <NavDashboard items={data.navDashboard} />
          <NavMain items={data.navMain} />
        </div>
        <NavProfile items={data.navProfile} />
      </SidebarContent>
      <SidebarFooter>
        <TeamSwitcher teams={data.teams} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
