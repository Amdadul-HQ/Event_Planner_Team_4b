import { PrismaClient, Role, ParticipationStatus, InvitationStatus, PaymentStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Clean existing records (in reverse relation order)
  await prisma.payment.deleteMany();
  await prisma.review.deleteMany();
  await prisma.invitation.deleteMany();
  await prisma.participation.deleteMany();
  await prisma.event.deleteMany();
  await prisma.user.deleteMany();

  console.log('🧹 Cleaned existing records.');

  const hashedPassword = await bcrypt.hash('123456', 10);
  const adminHashedPassword = await bcrypt.hash('admin123', 10);

  // 1. Create Users
  const adminUser = await prisma.user.create({
    data: {
      name: 'System Admin',
      email: 'admin@eventora.com',
      password: adminHashedPassword,
      role: Role.ADMIN,
    },
  });

  const sarahOrganizer = await prisma.user.create({
    data: {
      name: 'Sarah Chen',
      email: 'sarah@eventora.com',
      password: hashedPassword,
      role: Role.USER,
    },
  });

  const alexOrganizer = await prisma.user.create({
    data: {
      name: 'Alex Rivera',
      email: 'alex@eventora.com',
      password: hashedPassword,
      role: Role.USER,
    },
  });

  const johnAttendee = await prisma.user.create({
    data: {
      name: 'John Miller',
      email: 'john@example.com',
      password: hashedPassword,
      role: Role.USER,
    },
  });

  const emilyAttendee = await prisma.user.create({
    data: {
      name: 'Emily Watson',
      email: 'emily@example.com',
      password: hashedPassword,
      role: Role.USER,
    },
  });

  const davidAttendee = await prisma.user.create({
    data: {
      name: 'David Kim',
      email: 'david@example.com',
      password: hashedPassword,
      role: Role.USER,
    },
  });

  const lisaAttendee = await prisma.user.create({
    data: {
      name: 'Lisa Nguyen',
      email: 'lisa@example.com',
      password: hashedPassword,
      role: Role.USER,
    },
  });

  console.log('👤 Created Users successfully.');

  // 2. Create Events
  const eventsData = [
    {
      title: 'Global AI & Tech Innovation Summit 2026',
      description: 'Join industry titans, AI researchers, and pioneering founders to explore the next generation of artificial intelligence, autonomous systems, and generative technology shaping the globe.',
      dateTime: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // in 7 days
      eventImgUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      venue: 'Moscone Convention Center, San Francisco, CA',
      isPublic: true,
      isPaid: true,
      fee: 15000, // $150.00 (in cents or units depending on format)
      creatorId: sarahOrganizer.id,
    },
    {
      title: 'Annual Indie Music & Arts Festival',
      description: 'An unforgettable weekend featuring 30+ live indie bands, immersive digital art installations, artisan food trucks, and vibrant night-time light shows under the stars.',
      dateTime: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // in 14 days
      eventImgUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
      venue: 'Zilker Park & Amphitheater, Austin, TX',
      isPublic: true,
      isPaid: true,
      fee: 4500, // $45.00
      creatorId: alexOrganizer.id,
    },
    {
      title: 'Next.js & Full-Stack Developers Masterclass',
      description: 'A comprehensive hands-on coding workshop covering Next.js 15, Server Components, TypeScript, real-time WebSockets, and state-of-the-art cloud deployment workflows.',
      dateTime: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // in 3 days
      eventImgUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      venue: 'TechHub Innovation Lab & Virtual Livestream',
      isPublic: true,
      isPaid: false,
      fee: 0,
      creatorId: sarahOrganizer.id,
    },
    {
      title: 'Executive Venture Capital Pitch & Dinner',
      description: 'An exclusive private summit connecting curated Series A/B startup founders with leading venture capitalists and angel syndicate leaders over an intimate dinner.',
      dateTime: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // in 10 days
      eventImgUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      venue: 'The Peninsula Rooftop Pavilion, New York, NY',
      isPublic: false,
      isPaid: true,
      fee: 29900, // $299.00
      creatorId: alexOrganizer.id,
    },
    {
      title: 'UI/UX Design Systems & Micro-Interactions Workshop',
      description: 'Level up your design skills! Learn how to construct scalable design systems in Figma, craft buttery-smooth micro-animations, and seamlessly collaborate with engineering teams.',
      dateTime: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // in 5 days
      eventImgUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
      venue: 'Creative Loft, DUMBO, Brooklyn, NY',
      isPublic: true,
      isPaid: false,
      fee: 0,
      creatorId: sarahOrganizer.id,
    },
    {
      title: 'Cybersecurity & Cloud Defense Summit 2026',
      description: 'Deep-dive into zero-trust architectures, ethical hacking demonstrations, and defense strategies against modern enterprise cyber threats and AI-driven exploits.',
      dateTime: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000), // in 21 days
      eventImgUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
      venue: 'Hynes Convention Center, Boston, MA',
      isPublic: true,
      isPaid: true,
      fee: 8500, // $85.00
      creatorId: alexOrganizer.id,
    },
    {
      title: 'Community Eco Action & Urban Forest Drive',
      description: 'Join hands with local environmentalists to plant 1,000 indigenous trees, build urban bird sanctuaries, and promote sustainable green living across our neighborhoods.',
      dateTime: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000), // in 12 days
      eventImgUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
      venue: 'Olympic Sculpture Park & Waterfront, Seattle, WA',
      isPublic: true,
      isPaid: false,
      fee: 0,
      creatorId: sarahOrganizer.id,
    },
    {
      title: 'Private Founders Mountain Retreat & Strategy Camp',
      description: 'An invite-only 3-day executive retreat in the Sierra Nevada mountains dedicated to high-level strategic alignment, peer problem solving, and wellness.',
      dateTime: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // in 30 days
      eventImgUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80',
      venue: 'Lake Tahoe Alpine Lodge, CA',
      isPublic: false,
      isPaid: false,
      fee: 0,
      creatorId: alexOrganizer.id,
    },
    {
      title: 'International Culinary & Craft Coffee Expo',
      description: 'Experience gourmet tasting menus, world-class barista championships, artisanal chocolate tastings, and live cooking masterclasses with Michelin-starred guest chefs.',
      dateTime: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000), // in 18 days
      eventImgUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
      venue: 'Navy Pier Grand Hall, Chicago, IL',
      isPublic: true,
      isPaid: true,
      fee: 3500, // $35.00
      creatorId: sarahOrganizer.id,
    },
  ];

  const createdEvents = [];
  for (const eventItem of eventsData) {
    const ev = await prisma.event.create({
      data: eventItem,
    });
    createdEvents.push(ev);
  }

  console.log(`🎉 Created ${createdEvents.length} Events successfully.`);

  // 3. Create Participations
  await prisma.participation.createMany({
    data: [
      { userId: johnAttendee.id, eventId: createdEvents[0].id, status: ParticipationStatus.APPROVED, paid: true },
      { userId: emilyAttendee.id, eventId: createdEvents[0].id, status: ParticipationStatus.APPROVED, paid: true },
      { userId: davidAttendee.id, eventId: createdEvents[0].id, status: ParticipationStatus.PENDING, paid: true },
      { userId: johnAttendee.id, eventId: createdEvents[1].id, status: ParticipationStatus.APPROVED, paid: true },
      { userId: lisaAttendee.id, eventId: createdEvents[1].id, status: ParticipationStatus.APPROVED, paid: true },
      { userId: emilyAttendee.id, eventId: createdEvents[2].id, status: ParticipationStatus.APPROVED, paid: false },
      { userId: davidAttendee.id, eventId: createdEvents[2].id, status: ParticipationStatus.APPROVED, paid: false },
      { userId: lisaAttendee.id, eventId: createdEvents[2].id, status: ParticipationStatus.APPROVED, paid: false },
      { userId: johnAttendee.id, eventId: createdEvents[4].id, status: ParticipationStatus.APPROVED, paid: false },
      { userId: emilyAttendee.id, eventId: createdEvents[5].id, status: ParticipationStatus.APPROVED, paid: true },
      { userId: davidAttendee.id, eventId: createdEvents[6].id, status: ParticipationStatus.APPROVED, paid: false },
      { userId: lisaAttendee.id, eventId: createdEvents[8].id, status: ParticipationStatus.APPROVED, paid: true },
    ],
  });

  // 4. Create Invitations
  await prisma.invitation.createMany({
    data: [
      {
        eventId: createdEvents[3].id, // Executive Pitch
        userEmail: johnAttendee.email,
        invitedById: alexOrganizer.id,
        invitationNote: "We'd love to invite you to the private venture dinner.",
        status: InvitationStatus.ACCEPTED,
        paid: true,
      },
      {
        eventId: createdEvents[3].id,
        userEmail: davidAttendee.email,
        invitedById: alexOrganizer.id,
        invitationNote: 'Exclusive invitation for tech executives and angel syndicate members.',
        status: InvitationStatus.PENDING,
        paid: false,
      },
      {
        eventId: createdEvents[7].id, // Mountain Retreat
        userEmail: emilyAttendee.email,
        invitedById: alexOrganizer.id,
        invitationNote: 'You are warmly invited to the Lake Tahoe Founders Retreat.',
        status: InvitationStatus.ACCEPTED,
        paid: false,
      },
      {
        eventId: createdEvents[7].id,
        userEmail: lisaAttendee.email,
        invitedById: alexOrganizer.id,
        invitationNote: 'Looking forward to brainstorming at our strategy retreat.',
        status: InvitationStatus.PENDING,
        paid: false,
      },
    ],
  });

  // 5. Create Reviews
  await prisma.review.createMany({
    data: [
      {
        eventId: createdEvents[0].id,
        userId: johnAttendee.id,
        rating: 5,
        comment: 'Mind-blowing speaker lineup and top-notch event organization! Highly recommended for all tech leaders.',
      },
      {
        eventId: createdEvents[0].id,
        userId: emilyAttendee.id,
        rating: 5,
        comment: 'Super insightful panel discussions on AI infrastructure and generative workflows. Loved the networking sessions!',
      },
      {
        eventId: createdEvents[1].id,
        userId: lisaAttendee.id,
        rating: 5,
        comment: 'The atmosphere, sound quality, and food trucks were stellar. Can not wait for the next edition!',
      },
      {
        eventId: createdEvents[2].id,
        userId: davidAttendee.id,
        rating: 5,
        comment: 'Hands-down the best live Next.js masterclass I have attended. The practical exercises were pure gold.',
      },
      {
        eventId: createdEvents[4].id,
        userId: emilyAttendee.id,
        rating: 4,
        comment: 'Great practical Figma tips and component architecture lessons. Very well structured.',
      },
      {
        eventId: createdEvents[5].id,
        userId: johnAttendee.id,
        rating: 5,
        comment: 'Top-tier cybersecurity talks with live hacking demos that exposed real-world cloud vulnerabilities.',
      },
      {
        eventId: createdEvents[8].id,
        userId: lisaAttendee.id,
        rating: 5,
        comment: 'Incredible culinary masterclasses and artisanal coffee tastings. Absolutely loved every moment!',
      },
    ],
  });

  // 6. Create Payments
  await prisma.payment.createMany({
    data: [
      {
        userId: johnAttendee.id,
        eventId: createdEvents[0].id,
        amount: 15000,
        status: PaymentStatus.SUCCESS,
        provider: 'Stripe',
        transactionId: `TXN_${Date.now()}_001`,
        paidAt: new Date(),
      },
      {
        userId: emilyAttendee.id,
        eventId: createdEvents[0].id,
        amount: 15000,
        status: PaymentStatus.SUCCESS,
        provider: 'SSLCommerz',
        transactionId: `TXN_${Date.now()}_002`,
        paidAt: new Date(),
      },
      {
        userId: johnAttendee.id,
        eventId: createdEvents[1].id,
        amount: 4500,
        status: PaymentStatus.SUCCESS,
        provider: 'Stripe',
        transactionId: `TXN_${Date.now()}_003`,
        paidAt: new Date(),
      },
      {
        userId: johnAttendee.id,
        eventId: createdEvents[3].id,
        amount: 29900,
        status: PaymentStatus.SUCCESS,
        provider: 'Stripe',
        transactionId: `TXN_${Date.now()}_004`,
        paidAt: new Date(),
      },
    ],
  });

  console.log('✅ Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
