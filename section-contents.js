
export const navbar_links = [
    {
        name: "How it works",
        href: "/#how-it-works",
        type: "link",
    },
    {
        name: "Pricing",
        href: "/#pricing",
        type: "link",
    },
    {
        name: "Get Started",
        href: "/#get-started",
        type: "button-primary",
    },
    {
        name: "Login",
        href: "/login",
        type: "button-secondary",
    },
]

export const hero_content = {
    Texts: {
        heading: "Meet Nexa — All Your Workflows. Connected.",
        paragraph: "Unify Gmail, Sheets, Slack, Calendar, AI Agents, and your Website into one seamless SaaS platform.",
    },
    Buttons: [
        {
            type: "primary",
            text: "Start Free Trial",
        },
        {
            type: "secondary",
            text: "See Pricing",
        },
    ],
}

export const keyboard_icons = [
    {
        greyscale: "/images/keyboard-icons/slack-1.png",
        colored: "/images/keyboard-icons/slack-2.png"
    },
    {
        greyscale: "/images/keyboard-icons/gmail-1.png",
        colored: "/images/keyboard-icons/gmail-2.png"
    },
    {
        greyscale: "/images/keyboard-icons/calendar-1.png",
        colored: "/images/keyboard-icons/calendar-2.png"
    },
    {
        greyscale: "/images/keyboard-icons/sheets-1.png",
        colored: "/images/keyboard-icons/sheets-2.png"
    },
    {
        greyscale: "/images/keyboard-icons/ai-1.png",
        colored: "/images/keyboard-icons/ai-2.png"
    }
]

export const problem_solution_content = {
    Texts: {
        heading: "Too Many Tools. Too Little Time.",
        paragraph: "Your emails live in Gmail. Tasks in Sheets. Meetings in Calendar. Conversations in Slack. Everything is scattered — focus is lost, productivity drops.",
        heading2: "Nexa brings them all together.",
        paragraph2: "One hub. One flow. One future.",
    },
    coins: [
        {
            text: "Gmail",
            icon: "/images/solution-coins/gmail.png",
        },
        
        {
            text: "Sheets",
            icon: "/images/solution-coins/sheets.png",
        },
        
        {
            text: "Calendar",
            icon: "/images/solution-coins/calendar.png",
        },
        
        
        {
            text: "Slack",
            icon: "/images/solution-coins/slack.png",
        },

        {
            text: "AI Agents",
            icon: "/images/solution-coins/ai-logo.png",
        },


        
    ],  
}

export const how_it_works_content = {
    Texts: {
        heading: "How It Works",
        paragraph: "Get started in minutes with our simple 5-step integration process.",
    },
    steps: [
        {
            title: "Connect Gmail for email automation",
            description: "Automatically sync your emails, create smart filters, and set up automated responses across all your accounts.",
        },
        {
            title: "Sync Google Sheets for data management",
            description: "Keep your data synchronized in real-time, create automated reports, and manage your spreadsheets effortlessly.",
        },
        {
            title: "Integrate Google Calendar for scheduling",
            description: "Sync all your calendars, automate meeting scheduling, and never miss important appointments again.",
        },
        {
            title: "Connect Slack for team communication",
            description: "Streamline team communication with automated notifications, smart channel management, and workflow integration.",
        },
        {
            title: "Deploy AI agents to automate workflows",
            description: "Let our intelligent AI agents handle repetitive tasks, analyze data patterns, and optimize your entire workflow automatically.",
        },
    ],
}


export const pricing_content = {
    Texts: {
        heading: "Plans",
        paragraph: "Simple, Transparent Pricing",
    },
    cards: [
        {
            id: "starter",
            name: "Starter",
            description: "For small businesses",
            price: 10,
            previousPrice: 9,
            features: ["Connect up to 2 apps."],
        },  
        {
            id: "professional",
            name: "Professional",
            description: "For medium businesses",
            price: 20,
            previousPrice: 14,
            features: ["Unlimited integrations, automations, AI workflows."],
        },
        {
            id: "enterprise",
            name: "Enterprise",
            description: "For large businesses",
            price: 30,
            features: ["Unlimited integrations, automations, AI workflows.", "Teams, advanced AI, priority support."],
        },
    ],
    buttons: [
        {
            type: "primary",
            text: "Get Started",
        },
    ],
}

export const testimonials_content = {
    Texts: {
        title: "What early adopters are saying",
        description: "Join thousands of teams who have already transformed their productivity with Nexa.",
    },
    cards: [
        {
            id: "1",
            description: `"Finally, one tool that connects Gmail, Sheets, and Slack without hacks."`,
            name: "— Sarah M., Product Manager @ BetaTech",
            position: {
                y: '50%',
                x: '50%',
                rotate: 0,
                zindex: 3,
            },
        },
        {
            id: "2",
            description: `“It feels like all my apps are finally talking to each other.”`,
            name: "— Daniel R., Operations Lead @ NovaWorks",
            position: {
                y: '50%',
                x: '80%',
                rotate: 10,
                zindex: 2,
            },
        },
        {
            id: "3",
            description: `“The integrations saved us hours every single week.”`,
            name: "— Lina A., Founder @ StartupFlow",
            position: {
                y: '30%',
                x: '25%',
                rotate: -20,
                zindex: 1,
            },
        },
    ],
}

export const final_cta_content = {
    Texts: {
        title: "Stop Switching Between Apps.",
        description: "With Nexa your entire workflow lives in one place.",
    },
    buttons: [
        {
            type: "primary",
            text: "Start Free Trial",
        },
        {
            type: "secondary",
            text: "See Pricing",
        },
    ],
}



export const footer_content = {
    company: {
        name: "Nexa",
        description: "Unify all your workflows into one seamless SaaS platform.",
        logo: "/logo.svg"
    },
    links: {
        product: [
            { name: "Features", href: "/" },
            { name: "Pricing", href: "/" },
            { name: "Integrations", href: "/" },
            { name: "API", href: "/" }
        ],
        company: [
            { name: "About", href: "/" },
            { name: "Blog", href: "/" },
            { name: "Careers", href: "/" },
            { name: "Contact", href: "/" }
        ],
        support: [
            { name: "Help Center", href: "/" },
            { name: "Documentation", href: "/" },
            { name: "Status", href: "/" },
            { name: "Community", href: "/" }
        ],
        legal: [
            { name: "Privacy Policy", href: "/" },
            { name: "Terms of Service", href: "/" },
            { name: "Cookie Policy", href: "/" },
            { name: "GDPR", href: "/" }
        ]
    },
    social: [
        { name: "Twitter", href: "/", icon: "twitter" },
        { name: "LinkedIn", href: "/", icon: "linkedin" },
        { name: "GitHub", href: "/", icon: "github" },
        { name: "Discord", href: "/", icon: "discord" }
    ],
    copyright: "© 2024 Nexa. All rights reserved.",
    newsletter: {
        title: "Stay updated",
        description: "Get the latest news and updates delivered to your inbox.",
        placeholder: "Enter your email",
        button: "Subscribe"
    }
}
