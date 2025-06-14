export type TeamMember = {
  name: string
  role: string
  lead: boolean
}

export type Initiative = {
  name: string;
  result: string
}

export type Metrics = Record<string, number | string> | null

export type Modules = Record<string, { summary: string, tags: string[] }>

export type Project = {
  id: string;
  title: string;
  overview: string;
  tools: string[];
  launchDate: string;
  metrics: Metrics;
  initiatives: Initiative[];
  guestFeedback: number[];
  modules: Modules;
  imageUrl: string;
  team: TeamMember[];
  documentLinks: string[]
}

export const propertyTypes = ["all", "business", "heritage", "resort"] as const

export type PropertyType = typeof propertyTypes[number]

export type PropertyData = {
  id: string;
  title: string;
  propertyType: PropertyType;
  isFlagship: boolean;
  role: string;
  location: string;
  duration: string;
  projects: Partial<Project>[];
}

export const hospitalityData: PropertyData[] = [
  {
    "id": "EXP001",
    "title": "Taj Palace Mumbai",
    "propertyType": "business",
    "isFlagship": true,
    "role": "Front Office Manager",
    "location": "Mumbai, India",
    "duration": "2022",
    "projects": [
      {
        "id": "P001",
        "title": "VIP Guest Protocol Upgrade",
        "overview": "Redesigned the arrival and service flow for VIP guests.",
        "launchDate": "2022-04-10",
        "tools": [
          "Opera PMS",
          "CRM Lite"
        ],
        "metrics": {
          "satisfactionScore": 4.9,
          "resolutionTimeHrs": 2
        },
        "initiatives": [
          {
            "name": "Fast Lane Check-in",
            "result": "40% reduction in wait time"
          },
          {
            "name": "Welcome Ambassador Program",
            "result": "+0.6 guest score uplift"
          }
        ],
        "guestFeedback": [
          5,
          5,
          4,
          4,
          3,
          5
        ],
        "modules": {
          "planning": {
            "summary": "Mapped the full guest journey and pain points.",
            "tags": [
              "journey_mapping",
              "vip_segmentation"
            ]
          },
          "operations": {
            "summary": "Trained 12-member team and monitored new process.",
            "tags": [
              "workflow_rollout",
              "feedback_loop"
            ]
          }
        },
        "team": [
          {
            "name": "Amit Sharma",
            "role": "Chef",
            "lead": true
          },
          {
            "name": "Neha Sinha",
            "role": "Service Manager",
            "lead": false
          }
        ],
        "imageUrl": "https://example.com/vip-checkin.jpg"
      },
      {
        "id": "P002",
        "title": "Mobile Check-in Rollout",
        "overview": "Implemented mobile check-in for loyalty guests.",
        "launchDate": "2022-08-01",
        "tools": [
          "Mobile App",
          "QR Code Kiosk"
        ],
        "metrics": {
          "adoptionRate": "65%",
          "timeSavedPerGuestMin": 3
        },
        "initiatives": [],
        "guestFeedback": [],
        "modules": {},
        "team": [],
        "documentLinks": [
          "https://example.com/checkin-process.pdf"
        ]
      }
    ]
  },
  {
    "id": "EXP002",
    "title": "Leela Palace Udaipur",
    "propertyType": "heritage",
    "isFlagship": false,
    "role": "F&B Operations Lead",
    "location": "Udaipur, India",
    "duration": "2021",
    "projects": [
      {
        "id": "P003",
        "title": "Theme Dining Launch",
        "overview": "Introduced regional cuisine theme nights.",
        "tools": [
          "POS Tracker",
          "Dining Reservations Tool"
        ],
        "metrics": {
          "avgCoversPerNight": 160,
          "upsellRate": "12%"
        },
        "initiatives": [
          {
            "name": "Rajasthani Nights",
            "result": "$12K revenue uplift/month"
          },
          {
            "name": "Chef Table Pairing",
            "result": "+0.4 NPS improvement"
          }
        ],
        "guestFeedback": [
          4,
          5,
          4,
          4
        ],
        "modules": {
          "conceptDesign": {
            "summary": "Worked with chefs and marketing to align themes.",
            "tags": [
              "menu_concept",
              "event_marketing"
            ]
          },
          "execution": {
            "summary": "Led rollout and service SOP alignment.",
            "tags": [
              "guest_feedback_loop",
              "staff_rotas"
            ]
          }
        },
        "team": [
          {
            "name": "Dev Raj",
            "role": "Sous Chef",
            "lead": false
          }
        ]
      }
    ]
  },
  {
    "id": "EXP003",
    "title": "Four Seasons Bali",
    "propertyType": "resort",
    "isFlagship": false,
    "role": "Guest Experience Head",
    "location": "Bali, Indonesia",
    "duration": "2020",
    "projects": [
      {
        "id": "P004",
        "title": "Spa Booking Revamp",
        "overview": "Revamped spa booking to allow mobile reservations and preferences.",
        "tools": [
          "SpaSoft",
          "Customer Portal"
        ],
        "metrics": null,
        "initiatives": [],
        "guestFeedback": [
          5,
          4,
          5
        ],
        "modules": {
          "planning": {
            "summary": "Designed flow with wellness team.",
            "tags": [
              "ux_mockup",
              "workflow_mapping"
            ]
          }
        },
        "team": [],
        "imageUrl": "https://example.com/spa-booking-ui.jpg"
      }
    ]
  }
]