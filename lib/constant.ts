export const classes = [
  {
    id: 1,
    name: "Power Yoga",
    description:
      "A dynamic, fitness-based approach to vinyasa-style yoga that builds strength and flexibility.",
    image: "/placeholder.svg?height=400&width=600",
    category: "yoga",
    duration: 60,
    intensity: "Medium",
    trainer: "Jessica Chen",
    schedule: [
      { day: "Monday", time: "6:00 AM" },
      { day: "Wednesday", time: "6:00 AM" },
      { day: "Friday", time: "6:00 AM" },
    ],
  },
  {
    id: 2,
    name: "HIIT Circuit",
    description:
      "High-intensity interval training that alternates between intense bursts of activity and fixed periods of less-intense activity or rest.",
    image: "/placeholder.svg?height=400&width=600",
    category: "hiit",
    duration: 45,
    intensity: "High",
    trainer: "Sophia Williams",
    schedule: [
      { day: "Tuesday", time: "5:30 PM" },
      { day: "Thursday", time: "5:30 PM" },
      { day: "Saturday", time: "9:00 AM" },
    ],
  },
  {
    id: 3,
    name: "Spin Class",
    description:
      "Indoor cycling workout that combines cardio and strength training using stationary bikes and motivating music.",
    image: "/placeholder.svg?height=400&width=600",
    category: "cardio",
    duration: 50,
    intensity: "High",
    trainer: "Marcus Johnson",
    schedule: [
      { day: "Monday", time: "7:00 PM" },
      { day: "Wednesday", time: "7:00 PM" },
      { day: "Saturday", time: "10:30 AM" },
    ],
  },
  {
    id: 4,
    name: "Strength Training",
    description:
      "Focus on building muscle and strength using free weights, weight machines, and bodyweight exercises.",
    image: "/placeholder.svg?height=400&width=600",
    category: "strength",
    duration: 60,
    intensity: "Medium",
    trainer: "Alex Rivera",
    schedule: [
      { day: "Tuesday", time: "6:00 AM" },
      { day: "Thursday", time: "6:00 AM" },
      { day: "Saturday", time: "8:00 AM" },
    ],
  },
  {
    id: 5,
    name: "Pilates",
    description:
      "Low-impact exercise that aims to strengthen muscles while improving postural alignment and flexibility.",
    image: "/placeholder.svg?height=400&width=600",
    category: "yoga",
    duration: 55,
    intensity: "Low",
    trainer: "Jessica Chen",
    schedule: [
      { day: "Monday", time: "9:00 AM" },
      { day: "Wednesday", time: "9:00 AM" },
      { day: "Friday", time: "9:00 AM" },
    ],
  },
  {
    id: 6,
    name: "Boxing Fundamentals",
    description:
      "Learn boxing techniques while getting a full-body workout that improves cardiovascular health and strength.",
    image: "/placeholder.svg?height=400&width=600",
    category: "cardio",
    duration: 60,
    intensity: "High",
    trainer: "Alex Rivera",
    schedule: [
      { day: "Tuesday", time: "7:00 PM" },
      { day: "Thursday", time: "7:00 PM" },
    ],
  },
  {
    id: 7,
    name: "Zumba",
    description:
      "Dance fitness program that combines Latin and international music with dance moves for a fun cardio workout.",
    image: "/placeholder.svg?height=400&width=600",
    category: "cardio",
    duration: 60,
    intensity: "Medium",
    trainer: "Sophia Williams",
    schedule: [
      { day: "Monday", time: "5:30 PM" },
      { day: "Wednesday", time: "5:30 PM" },
      { day: "Friday", time: "5:30 PM" },
    ],
  },
  {
    id: 8,
    name: "CrossFit",
    description:
      "High-intensity functional movements that combine elements from different sports and types of exercise.",
    image: "/placeholder.svg?height=400&width=600",
    category: "hiit",
    duration: 60,
    intensity: "Very High",
    trainer: "Marcus Johnson",
    schedule: [
      { day: "Tuesday", time: "6:00 PM" },
      { day: "Thursday", time: "6:00 PM" },
      { day: "Saturday", time: "9:00 AM" },
    ],
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "10 Essential Tips for Building Muscle",
    excerpt:
      "Learn the fundamental principles of muscle building, from proper nutrition to effective workout routines.",
    category: "Training",
    author: "David Martinez",
    date: "April 21, 2023",
    readTime: "5 min read",
    image: "/placeholder.svg",
    tags: ["Muscle Building", "Nutrition", "Workout"],
  },
  {
    id: 2,
    title: "The Complete Guide to HIIT Workouts",
    excerpt:
      "Discover how High-Intensity Interval Training can transform your fitness routine and maximize results.",
    category: "Cardio",
    author: "Lisa Chen",
    date: "April 18, 2023",
    readTime: "7 min read",
    image: "/placeholder.svg",
    tags: ["HIIT", "Cardio", "Fat Loss"],
  },
  {
    id: 3,
    title: "Nutrition Tips for Pre and Post Workout",
    excerpt:
      "Optimize your workout performance with the right nutrition timing and food choices.",
    category: "Nutrition",
    author: "Emma Wilson",
    date: "April 15, 2023",
    readTime: "6 min read",
    image: "/placeholder.svg",
    tags: ["Nutrition", "Recovery", "Performance"],
  },
  {
    id: 4,
    title: "The Science Behind HIIT: Why It Works So Well",
    excerpt:
      "Explore the science and benefits of High-Intensity Interval Training and why it's so effective for fat loss and fitness.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 22, 2023",
    author: "Sophia Williams",
    category: "Fitness Science",
    slug: "hiit-science",
  },
  {
    id: 5,
    title: "5 Common Workout Mistakes and How to Fix Them",
    excerpt:
      "Avoid these common exercise mistakes that could be hindering your progress and learn how to correct them.",
    image: "/placeholder.svg?height=400&width=600",
    date: "February 15, 2023",
    author: "Alex Rivera",
    category: "Workouts",
    slug: "workout-mistakes",
  },
  {
    id: 6,
    title: "Mindfulness and Exercise: The Perfect Combination",
    excerpt:
      "Discover how combining mindfulness practices with your workout routine can enhance results and reduce stress.",
    image: "/placeholder.svg?height=400&width=600",
    date: "January 30, 2023",
    author: "Jessica Chen",
    category: "Wellness",
    slug: "mindfulness-exercise",
  },
];

export const trainers = [
  {
    name: "Alex Rivera",
    role: "Head Trainer",
    bio: "Alex has over 10 years of experience in fitness training and specializes in strength and conditioning. Certified in CrossFit and personal training.",
    image: "/gym2.jpeg",
    socials: {
      twitter: "#",
      instagram: "#",
      facebook: "#",
    },
  },
  {
    name: "Jessica Johnson",
    role: "Yoga Instructor",
    bio: "Jessica is a certified yoga instructor with 8 years of experience. She specializes in vinyasa flow and restorative yoga practices.",
    image: "/gymyoga.jpeg",
    socials: {
      twitter: "#",
      instagram: "#",
      facebook: "#",
    },
  },
  {
    name: "Marcus Johnson",
    role: "Nutrition Coach",
    bio: "Marcus holds a degree in nutrition and helps members develop personalized meal plans to complement their fitness goals.",
    image: "/gym5.jpg",
    socials: {
      twitter: "#",
      instagram: "#",
      facebook: "#",
    },
  },
  {
    name: "Sophia Williams",
    role: "HIIT Specialist",
    bio: "Sophia specializes in high-intensity interval training and has helped hundreds of clients achieve rapid results through her energetic classes.",
    image: "/gymhiit.jpeg",
    socials: {
      twitter: "#",
      instagram: "#",
      facebook: "#",
    },
  },
];

export const achievements = [
  {
    title: "Best Gym in the City",
    year: "2023",
    organization: "City Fitness Awards",
  },
  {
    title: "Excellence in Customer Service",
    year: "2022",
    organization: "Fitness Industry Association",
  },
  {
    title: "Top 10 Fitness Centers",
    year: "2021",
    organization: "National Fitness Magazine",
  },
  {
    title: "Innovation in Fitness Programs",
    year: "2020",
    organization: "Fitness Technology Summit",
  },
];

export const certifications = [
  "National Academy of Sports Medicine (NASM)",
  "American Council on Exercise (ACE)",
  "International Sports Sciences Association (ISSA)",
  "National Strength and Conditioning Association (NSCA)",
  "American College of Sports Medicine (ACSM)",
  "Yoga Alliance Certification",
];
