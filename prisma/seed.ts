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
      slug: "cloud-migration",
      title: "Cloud Migration",
      description:
        "Seamlessly migrate your infrastructure to the cloud with minimal downtime and maximum reliability.",
      category: "Infrastructure",
      icon: "FaCloud",
      order: 1,
    },
    {
      slug: "staff-augmentation",
      title: "Staff Augmentation",
      description:
        "Scale your team on demand with skilled IT professionals who integrate seamlessly into your workflows.",
      category: "Staffing",
      icon: "FaUsers",
      order: 2,
    },
    {
      slug: "devops-cicd",
      title: "DevOps & CI/CD",
      description:
        "Accelerate delivery pipelines with automated testing, continuous integration, and deployment best practices.",
      category: "Engineering",
      icon: "FaCodeBranch",
      order: 3,
    },
    {
      slug: "data-analytics",
      title: "Data & Analytics",
      description:
        "Transform raw data into actionable insights with modern data pipelines, warehouses, and BI tooling.",
      category: "Data",
      icon: "FaChartBar",
      order: 4,
    },
    {
      slug: "cybersecurity",
      title: "Cybersecurity",
      description:
        "Protect your business with end-to-end security assessments, monitoring, and incident response.",
      category: "Security",
      icon: "FaShieldAlt",
      order: 5,
    },
    {
      slug: "application-development",
      title: "Application Development",
      description:
        "Build scalable, maintainable web and mobile applications tailored to your business needs.",
      category: "Engineering",
      icon: "FaLaptopCode",
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
      slug: "government",
      title: "Government",
      description:
        "Trusted IT modernization and digital transformation services for public sector agencies.",
      icon: "FaLandmark",
      order: 4,
    },
    {
      slug: "manufacturing",
      title: "Manufacturing",
      description:
        "Smart factory integrations, IoT solutions, and ERP implementations for modern manufacturers.",
      icon: "FaIndustry",
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
      slug: "senior-cloud-engineer",
      title: "Senior Cloud Engineer",
      department: "Engineering",
      location: "Remote",
      employmentType: "Full-time",
      description:
        "We are looking for a Senior Cloud Engineer to design, build, and maintain scalable cloud infrastructure across AWS, Azure, and GCP. You will collaborate with cross-functional teams to drive cloud adoption and best practices.",
      requirements:
        "5+ years of experience with cloud platforms (AWS, Azure, or GCP). Strong knowledge of Terraform, Kubernetes, and CI/CD pipelines. Experience with infrastructure-as-code and DevSecOps practices. Excellent communication and problem-solving skills.",
      status: "open",
    },
    {
      slug: "full-stack-developer",
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Hybrid",
      employmentType: "Full-time",
      description:
        "We are seeking a Full Stack Developer to build and maintain modern web applications for our clients. You will work across the entire stack — from database design to pixel-perfect UIs — in an agile, collaborative environment.",
      requirements:
        "3+ years of experience with React or Next.js and a Node.js backend. Proficiency in TypeScript, REST APIs, and relational databases. Familiarity with cloud deployments and containerization. A portfolio of shipped products is a plus.",
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
