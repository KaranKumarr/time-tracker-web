import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar"
import {Calendar, ChartSpline, Clock7, Home, Inbox, Logs, Search, Settings} from "lucide-react"

export function AppSidebar() {
    // Menu items.
    const items = [
        {
            title: "Time Tracking",
            url: "#",
            icon: Clock7,
        },
        {
            title: "Goals",
            url: "#",
            icon: Logs,
        },
        {
            title: "Progress",
            url: "#",
            icon: ChartSpline,
        },

    ]

    return (
        <Sidebar className={'relative max-h-[calc(100dvh-64px)]'}>
            <SidebarHeader>
                <h4>
                    Welcome
                </h4>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <a href={item.url}>
                                    <item.icon />
                                    <span className={'font-semibold'}>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter/>
        </Sidebar>
    )
}