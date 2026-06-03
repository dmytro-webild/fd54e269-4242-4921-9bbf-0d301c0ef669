"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardFive from '@/components/sections/pricing/PricingCardFive';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { CalendarDays, Clock, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumSizeLargeTitles"
        background="floatingGradient"
        cardStyle="glass-elevated"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Amenities",
          id: "#amenities",
        },
        {
          name: "Rooms",
          id: "#rooms",
        },
        {
          name: "Rates",
          id: "#rates",
        },
        {
          name: "Reviews",
          id: "#reviews",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
      ]}
      brandName="Town Hostel Mumbai"
      button={{
        text: "Book Now",
        href: "#contact",
      }}
      animateOnLoad={true}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "plain",
      }}
      title="Your Gateway to Mumbai Adventures"
      description="Experience the vibrant energy of Mumbai from Town Hostel, an AC dormitory located conveniently near Mumbai Airport. Perfect for budget travelers and backpackers."
      buttons={[
        {
          text: "Book Your Stay",
          href: "#contact",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/extreme-sports-healthy-lifestyle-concept-close-up-view-happy-smiling-young-bearded-surfer-carrying-surfboard-his-head-his-way-ocean_273609-1543.jpg",
          alt: "Traveller Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-young-friends-hostel_23-2150598861.jpg",
          alt: "Traveller Mike",
        },
        {
          src: "http://img.b2bpic.net/free-photo/outdoor-portrait-fashionable-attractive-dark-skinned-man-with-afro-hairstyle-wearing-headphones-neck-talking-smartphone-drinking-coffee-while-strolling-city-with-backpack_176420-19828.jpg",
          alt: "Traveller Emily",
        },
        {
          src: "http://img.b2bpic.net/free-photo/front-view-young-friends-hostel_23-2150598844.jpg",
          alt: "Traveller David",
        },
        {
          src: "http://img.b2bpic.net/free-photo/woman-with-hat-traveling_23-2148518197.jpg",
          alt: "Woman with hat traveling",
        },
      ]}
      avatarText="Join our community of global travelers!"
      imageSrc="http://img.b2bpic.net/free-photo/row-people-various-ages-patient-waiting-see-doctor_632498-1146.jpg"
      imageAlt="Modern hostel dormitory common area in Mumbai"
      mediaAnimation="slide-up"
      marqueeItems={[
        {
          type: "text",
          text: "Budget-Friendly",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/full-shot-boys-sitting-stairs-with-notebook_23-2148450822.jpg",
          alt: "Full shot boys sitting on stairs with notebook",
        },
        {
          type: "text",
          text: "Near Airport",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/young-hipster-couple-sitting-wooden-bench-train-station-couple-sitting-waiting-train-platform_1150-1897.jpg",
          alt: "Young hipster couple sitting on wooden bench at train station. Couple sitting waiting for the train at platform.",
        },
        {
          type: "text",
          text: "Vibrant Community",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/tourists-couples-looking-tablets-find-attractions_1150-12316.jpg",
          alt: "Tourists, couples looking at tablets to find attractions.",
        },
        {
          type: "text",
          text: "Comfortable AC",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/group-four-south-asian-men-s-posed-business-meeting-cafe-indians-work-together-having-conversation-indian-man-with-cup-coffee_627829-5250.jpg",
          alt: "Group of four south asian men's posed at business meeting in cafe Indians work together having conversation Indian man with cup of coffee",
        },
        {
          type: "text",
          text: "Explore Mumbai",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/medium-shot-young-friends-hostel_23-2150598862.jpg",
          alt: "Medium shot young friends in hostel",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Comfort, Community & Convenience"
      description={[
        "Town Hostel Mumbai offers a modern and friendly environment for travelers looking for affordable accommodation without compromising on quality. Our AC dormitories provide a comfortable retreat after a day of exploring, while our common areas foster a vibrant community spirit.",
        "Located just minutes from Chhatrapati Shivaji Maharaj International Airport, we are the ideal base for exploring Mumbai's iconic landmarks, bustling markets, and diverse culinary scene. Discover why Town Hostel is the preferred choice for backpackers and digital nomads.",
      ]}
    />
  </div>

  <div id="amenities" data-section="amenities">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Unbeatable Amenities for a Memorable Stay"
      description="We provide everything you need for a comfortable and enjoyable experience at Town Hostel Mumbai. From high-speed internet to essential services, we've got you covered."
      accordionItems={[
        {
          id: "ac-dorms",
          title: "Air-Conditioned Dormitories",
          content: "Enjoy a cool and comfortable sleep in our well-maintained AC dorms, essential for Mumbai's climate.",
        },
        {
          id: "free-wifi",
          title: "High-Speed Free Wi-Fi",
          content: "Stay connected with complimentary high-speed internet access throughout the hostel, perfect for work or leisure.",
        },
        {
          id: "common-lounge",
          title: "Vibrant Common Lounge",
          content: "Relax, socialize, and make new friends in our spacious and lively common areas.",
        },
        {
          id: "reception-24-7",
          title: "24/7 Reception & Security",
          content: "Our friendly staff is always available to assist you, ensuring a safe and hassle-free stay around the clock.",
        },
        {
          id: "hot-showers",
          title: "Clean Hot Showers",
          content: "Refresh yourself with our clean bathrooms offering hot and cold water facilities.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/empty-office-workplace-with-table-chair_1170-1957.jpg"
      imageAlt="Hostel common lounge area with comfortable seating and warm lighting"
      mediaAnimation="slide-up"
      mediaPosition="right"
    />
  </div>

  <div id="rooms" data-section="rooms">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      carouselMode="buttons"
      products={[
        {
          id: "private-pod",
          name: "Private Pod Dorm",
          price: "₹899/night",
          variant: "AC Dorm",
          imageSrc: "http://img.b2bpic.net/free-photo/business-owner-working-their-strategy_23-2149241272.jpg",
          imageAlt: "Modern private pod bed in a dormitory",
        },
        {
          id: "standard-bunk",
          name: "Standard Bunk Bed",
          price: "₹699/night",
          variant: "AC Dorm",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-luxury-white-pillow-bed_74190-2072.jpg",
          imageAlt: "Clean standard bunk bed in a shared dormitory",
        },
        {
          id: "female-dorm",
          name: "Female Only Dorm",
          price: "₹749/night",
          variant: "AC Dorm",
          imageSrc: "http://img.b2bpic.net/free-photo/messy-interior-full-clothing_23-2151298452.jpg",
          imageAlt: "Female-only dormitory with comfortable beds",
        },
        {
          id: "male-dorm",
          name: "Male Only Dorm",
          price: "₹749/night",
          variant: "AC Dorm",
          imageSrc: "http://img.b2bpic.net/free-photo/young-gay-couple-lying-bed-reading-book-using-mobile-phone_23-2148083142.jpg",
          imageAlt: "Male-only dormitory with comfortable beds",
        },
        {
          id: "twin-bunk",
          name: "Twin Bunk Room",
          price: "₹1499/night",
          variant: "AC Dorm for 2",
          imageSrc: "http://img.b2bpic.net/free-photo/young-women-lying-bed_23-2147766776.jpg",
          imageAlt: "Twin bunk beds in a shared room for two people",
        },
        {
          id: "deluxe-pod",
          name: "Deluxe Pod Dorm",
          price: "₹999/night",
          variant: "AC Dorm with amenities",
          imageSrc: "http://img.b2bpic.net/free-photo/mother-using-laptop-with-her-daughter-sitting-bed_1170-2788.jpg",
          imageAlt: "Deluxe private pod bed with extra features",
        },
      ]}
      title="Our Comfortable Dormitories"
      description="Choose from our range of AC dorms designed for ultimate comfort and privacy, perfect for solo travelers and groups exploring Mumbai."
    />
  </div>

  <div id="rates" data-section="rates">
      <PricingCardFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "weekday",
          tag: "Daily",
          tagIcon: CalendarDays,
          price: "₹699",
          period: "per night",
          description: "Ideal for short stays and quick stopovers near the airport.",
          button: {
            text: "Book Now",
            href: "#contact",
          },
          featuresTitle: "Includes:",
          features: [
            "AC Dorm Bed",
            "Free Wi-Fi",
            "Locker Storage",
            "24/7 Reception",
          ],
        },
        {
          id: "weekend",
          tag: "Weekend Deal",
          tagIcon: Star,
          price: "₹1899",
          period: "3 nights",
          description: "Special rate for weekend explorers. Experience Mumbai's vibrant nightlife.",
          button: {
            text: "Book Now",
            href: "#contact",
          },
          featuresTitle: "Includes:",
          features: [
            "AC Dorm Bed (3 nights)",
            "Free Wi-Fi",
            "Locker Storage",
            "Early Check-in Option",
          ],
        },
        {
          id: "monthly",
          tag: "Long Stay",
          tagIcon: Clock,
          price: "₹15,000",
          period: "per month",
          description: "Perfect for digital nomads and long-term visitors.",
          button: {
            text: "Inquire Now",
            href: "#contact",
          },
          featuresTitle: "Includes:",
          features: [
            "AC Dorm Bed (30 nights)",
            "High-Speed Wi-Fi",
            "Locker & Laundry Access",
            "Exclusive Lounge Access",
          ],
        },
      ]}
      title="Affordable Rates, Premium Experience"
      description="Our competitive pricing ensures you get the best value for your stay in Mumbai. Select a plan that fits your travel needs."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Fantastic Experience!",
          quote: "Town Hostel Mumbai exceeded my expectations! The AC dorm was super comfortable, and the staff were incredibly helpful. It's truly near the airport, which was a huge plus for my early flight.",
          name: "Sarah J.",
          role: "Solo Traveler",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-female-with-bag-preparing-vacation-blue-space_140725-87812.jpg",
          imageAlt: "Smiling female traveler",
        },
        {
          id: "2",
          title: "Great Vibe & Location",
          quote: "I loved the community feel at Town Hostel. Met so many amazing people in the common area. The location near Mumbai Airport is unbeatable for transit. Highly recommend for backpackers!",
          name: "Michael C.",
          role: "Backpacker",
          imageSrc: "http://img.b2bpic.net/free-photo/young-asian-woman-breathing-sitting-smile-bed_1150-4140.jpg",
          imageAlt: "Happy male traveler",
        },
        {
          id: "3",
          title: "Clean, Safe & Friendly",
          quote: "As a solo female traveler, safety and cleanliness are paramount. Town Hostel delivered on both fronts, plus the staff were exceptionally friendly. A gem near the bustling city!",
          name: "Emily R.",
          role: "Digital Nomad",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-woman-reading-book-bed_23-2148311739.jpg",
          imageAlt: "Smiling female digital nomad",
        },
        {
          id: "4",
          title: "Best Value in Mumbai",
          quote: "You get so much for your money here! AC dorms, fast Wi-Fi, and a super convenient location. Town Hostel is my go-to whenever I'm in Mumbai. Absolutely brilliant.",
          name: "David K.",
          role: "Budget Explorer",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-browsing-laptop-tablet-bed_23-2147766786.jpg",
          imageAlt: "Smiling male explorer",
        },
        {
          id: "5",
          title: "Perfect Airport Stopover",
          quote: "Needed a comfortable place to crash during a long layover at Mumbai Airport. Town Hostel was perfect! Easy to get to, clean, and a great night's sleep. Will definitely return.",
          name: "Jessica L.",
          role: "Transit Passenger",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-time-with-friends_1098-12600.jpg",
          imageAlt: "Content female traveler",
        },
        {
          id: "6",
          title: "Amazing Staff & Atmosphere",
          quote: "The staff here are truly wonderful and the atmosphere is so welcoming. Made my solo trip to Mumbai much more enjoyable. Highly recommend Town Hostel to everyone!",
          name: "Akash S.",
          role: "Travel Blogger",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-man-buying-tickets-with-credit-card-cashback-sitting-bed-packing-clothes_1258-314173.jpg",
          imageAlt: "Portrait of happy man buying tickets with credit card cashback sitting on bed and packing clothes",
        },
      ]}
      title="What Our Guests Say"
      description="Don't just take our word for it – hear from travelers who loved their stay at Town Hostel Mumbai and made unforgettable memories."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",
          title: "How far is Town Hostel from Mumbai Airport?",
          content: "Town Hostel Mumbai is conveniently located just a few minutes drive from Chhatrapati Shivaji Maharaj International Airport (BOM). We recommend using ride-sharing apps or local taxis for a quick transfer.",
        },
        {
          id: "faq2",
          title: "Do you offer private rooms or only dormitories?",
          content: "We primarily offer comfortable AC dormitory beds. However, some dorm types provide more privacy with curtains or pod-style setups. Please check our 'Dormitory Options' section for details.",
        },
        {
          id: "faq3",
          title: "What amenities are included in the stay?",
          content: "All guests enjoy AC dormitory beds, free high-speed Wi-Fi, personal locker storage, 24/7 reception, clean bathrooms with hot showers, and access to our vibrant common lounge. Additional services like laundry are available.",
        },
        {
          id: "faq4",
          title: "What is your check-in and check-out policy?",
          content: "Standard check-in is from 2:00 PM, and check-out is by 11:00 AM. Early check-in or late check-out may be available upon request and subject to availability, potentially with a small fee.",
        },
        {
          id: "faq5",
          title: "Is there parking available at the hostel?",
          content: "As a hostel located in a bustling area, we do not have dedicated private parking. However, public parking options are available nearby, and our staff can guide you to the closest ones.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common queries about your stay at Town Hostel Mumbai, from booking to facilities."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Ready for your Mumbai adventure? Book your stay at Town Hostel now for comfort, community, and convenience. We look forward to welcoming you!"
      buttons={[
        {
          text: "Get Directions",
          href: "https://maps.app.goo.gl/YourHostelLocation",
        },
        {
          text: "Send an Inquiry",
          href: "mailto:info@townhostelmumbai.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="Town Hostel Mumbai"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
