"use client"

import * as React from "react"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Logo from "../../images/Website Pictures/logo.jpg"
import { cn } from "@/lib/utils"
import Headroom from "react-headroom"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Courses",
    href: "/courses",
    description: "View all the courses available at Ibest Institute",
  },
  {
    title: "Consultancy",
    href: "/consultancy",
    description: "View all the consultancy services available at Ibest Institute",
  },
]

const NavigationBar = () => {
  return (
    <Headroom >
      {/* Sticky Navigation */}
      <div className="fixed top-0 left-0 w-screen md:w-screen h-24 bg-white backdrop-blur-md z-50 shadow-md">
        <div className="flex flex-row h-full w-full">
          {/* Left side logo */}
          <div className="h-full w-1/6 flex items-center justify-center">
            <div className="w-20 h-20 bg-red-400 rounded-full">
            <Link href="/">
              <Avatar className="w-20 h-20 border-current">
              <AvatarImage src={Logo.src} alt="@shadcn" />  
              </Avatar>
              </Link>
      
            </div>
          </div>
          {/* Center title */}
          <div className="h-full w-2/6 flex items-center ">
            <h1 className="text-black text-left md:text-sm lg:text-lg">Get skilled today for a bright future!</h1>

          </div>
          {/* Right side navigation */}
          <div className="h-full w-3/6 flex items-center justify-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:w-[200px] md:grid-cols-2 lg:w-[400px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/aboutUs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link href="/contactUs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
      {/* Add padding to the main content to prevent overlap */}
      <div className="pt-24">
        {/* Your main page content goes here */}
      </div>
    </Headroom>
  );
}

export default NavigationBar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
})

ListItem.displayName = "ListItem"
