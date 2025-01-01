import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Inventory",
      url: "/inventory",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Inventory List",
          url: "/inventory",
        },
        {
          title: "Add Inventory",
          url: "/inventory/additem",
        },

        {
          title: "Update Inventory Item",
          url: "/inventory/updateitem",
        },
        {
          title: "Delete Inventory Item",
          url: "/inventory/deleteitem",
        },
      ],
    },
    {
      title: "Orders",
      url: "/orders",
      icon: Bot,
      items: [
        {
          title: "Orders List",
          url: "/orders",
        },
        {
          title: "Add Order",
          url: "/orders/add",
        },
        {
          title: "Update Order",
          url: "/orders/update",
        },
        {
          title: "Delete Order",
          url: "/orders/delete",
        },
      ],
    },
    {
      title: "Dispatches",
      url: "/dispatches",
      icon: BookOpen,
      items: [
        {
          title: "Dispatches List",
          url: "/dispatches",
        },
        {
          title: "Add Dispatch",
          url: "/dispatches/add",
        },
        {
          title: "Update Dispatch",
          url: "/dispatches/update",
        },
        {
          title: "Delete Dispatch",
          url: "/dispatches/delete",
        },
      ],
    },
    {
      title: "Reports",
      url: "/reports/general",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/reports/general",
        },
        {
          title: "Team",
          url: "/reports/team",
        },
        {
          title: "Billing",
          url: "/reports/billing",
        },
        {
          title: "Limits",
          url: "/reports/limits",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Inventory</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
