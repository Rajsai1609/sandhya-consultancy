import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  // --- Services ---
  const services = [
    {
      slug: "ai-career-automation",
      title: "AI Career Automation",
      description:
        "AI-powered job search, resume tailoring, and career intelligence for students and job seekers. Land your dream job faster.",
      category: "Students",
      icon: "FaRobot",
      order: 1,
    },
    {
      slug: "business-automation",
      title: "Business Process Automation",
      description:
        "End-to-end workflow automation using Make.com, n8n, and custom AI agents. Eliminate manual work and scale operations.",
      category: "Business",
      icon: "FaCogs",
      order: 2,
    },
    {
      slug: "multi-agent-ai",
      title: "Multi-Agent AI Systems",
      description:
        "Custom multi-agent architectures that sense, reason, orchestrate, and optimize your business processes autonomously.",
      category: "Business",
      icon: "FaBrain",
      order: 3,
    },
    {
      slug: "it-staffing",
      title: "IT Staffing Solutions",
      description:
        "Contract, contract-to-hire, and direct placement of top IT and AI talent. Faster hiring through AI-powered candidate matching.",
      category: "Staffing",
      icon: "FaUsers",
      order: 4,
    },
    {
      slug: "cloud-data-engineering",
      title: "Cloud & Data Engineering",
      description:
        "Cloud migration, data pipelines, and analytics infrastructure on AWS, Azure, and GCP.",
      category: "Engineering",
      icon: "FaCloud",
      order: 5,
    },
    {
      slug: "ai-strategy-consulting",
      title: "AI Strategy Consulting",
      description:
        "Hands-on AI strategy and implementation for SMBs. From roadmap to production-ready AI systems.",
      category: "Consulting",
      icon: "FaChartLine",
      order: 6,
    },
  ];

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: service,
      create: service,
    });
  }
  console.log(`✓ Seeded ${services.length} services`);

  // --- Industries ---
  const industries = [
    {
      slug: "healthcare",
      title: "Healthcare",
      description:
        "Delivering HIPAA-compliant IT solutions that improve patient outcomes and operational efficiency.",
      icon: "FaHeartbeat",
      order: 1,
    },
    {
      slug: "finance",
      title: "Finance",
      description:
        "Secure, compliant technology solutions for banking, insurance, and financial services firms.",
      icon: "FaUniversity",
      order: 2,
    },
    {
      slug: "retail",
      title: "Retail",
      description:
        "Omnichannel platforms and supply chain solutions that drive customer loyalty and revenue growth.",
      icon: "FaShoppingCart",
      order: 3,
    },
    {
      slug: "education",
      title: "Education",
      description:
        "AI-powered learning platforms and career automation tools that help students and institutions thrive.",
      icon: "FaGraduationCap",
      order: 4,
    },
    {
      slug: "technology",
      title: "Technology",
      description:
        "Scalable AI and automation solutions for software companies, startups, and tech-forward enterprises.",
      icon: "FaLaptopCode",
      order: 5,
    },
  ];

  for (const industry of industries) {
    await prisma.industry.upsert({
      where: { slug: industry.slug },
      update: industry,
      create: industry,
    });
  }
  console.log(`✓ Seeded ${industries.length} industries`);

  // --- Jobs ---
  const jobs = [
    {
      slug: "ai-automation-engineer",
      title: "AI Automation Engineer",
      department: "Engineering",
      location: "Remote",
      employmentType: "Full-time",
      description:
        "Design and build end-to-end automation workflows and multi-agent AI systems for our clients. You will work with tools like Make.com, n8n, LangChain, and custom agent frameworks to eliminate manual processes and scale business operations.",
      requirements:
        "2+ years of experience building automation workflows or AI-powered applications. Hands-on experience with Make.com, n8n, or similar platforms. Familiarity with LLM APIs (OpenAI, Anthropic) and agent frameworks. Strong Python or JavaScript skills.",
      status: "open",
    },
    {
      slug: "career-success-coach-ai-tools",
      title: "Career Success Coach (AI Tools)",
      department: "Student Services",
      location: "Hybrid",
      employmentType: "Full-time",
      description:
        "Guide students and job seekers through our AI-powered career automation platform. Help clients optimize their resumes, job search strategies, and interview preparation using AI tools to land roles faster.",
      requirements:
        "Experience in career coaching, recruiting, or talent acquisition. Familiarity with AI career tools and job search automation platforms. Excellent communication and coaching skills. Passion for helping students achieve career success.",
      status: "open",
    },
  ];

  for (const job of jobs) {
    await prisma.job.upsert({
      where: { slug: job.slug },
      update: job,
      create: job,
    });
  }
  console.log(`✓ Seeded ${jobs.length} jobs`);

  console.log("Database seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
