"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="large"
        background="circleGradient"
        cardStyle="inset"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Services",          id: "services"},
        {
          name: "Rental",          id: "rental"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="SYB"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "rotated-rays-animated"}}
      title="Elevating Operational Control Through High-Performance Tech"
      description="SYB empowers your business with premium audiovisual, IT infrastructure, and security solutions. We turn complexity into productivity, ensuring your team operates at their full potential."
      tag="Innovative Tech Solutions"
      buttons={[
        {
          text: "Request a Quote",          href: "#contact"},
        {
          text: "WhatsApp Us",          href: "https://wa.me/573000000000"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-data-center-operating-tablet-analyzing-metrics_482257-117980.jpg",          imageAlt: "High-tech operational infrastructure"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-men-browsing-laptops-office_23-2147807983.jpg",          imageAlt: "Audiovisual professional setup"}
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Trusted by over 100+ Enterprise Clients"
      tagIcon={Sparkles}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      negativeCard={{
        items: [
          "Hardware Obsolescence",          "Inefficient IT Workflows",          "Security Vulnerabilities",          "Unreliable Maintenance Cycles"],
      }}
      positiveCard={{
        items: [
          "Audiovisual: Video walls, Digital Signage & Projection",          "IT Infrastructure: Server optimization, UPS & Backup Systems",          "Security: Biometrics & Access Control Solutions",          "Commercial Tech: Hardware, Printing & Systems Support"],
      }}
      title="Comprehensive Technological Solutions"
      description="We specialize in high-end tech ecosystems designed to maximize your ROI and business efficiency."
    />
  </div>

  <div id="rental" data-section="rental">
      <TextAbout
      useInvertedBackground={false}
      tag="Obsolescence Free Model"
      title="The Strategic Advantage: Renting vs. Buying"
      buttons={[
        {
          text: "Learn Rental Benefits",          href: "#contact"},
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          brand: "SYB",          name: "Video Wall Pro System",          price: "Rental Options",          rating: 5,
          reviewCount: "12",          imageSrc: "http://img.b2bpic.net/free-photo/modern-workplace-with-beautiful-miniature-zen-garden-computer-room_632805-33.jpg"},
        {
          id: "p2",          brand: "SYB",          name: "Enterprise Server Rack",          price: "Available",          rating: 5,
          reviewCount: "8",          imageSrc: "http://img.b2bpic.net/free-photo/business-people-posing-smiling-meeting-room_1262-814.jpg"},
        {
          id: "p3",          brand: "SYB",          name: "Biometric Control Node",          price: "Ask for Quote",          rating: 5,
          reviewCount: "21",          imageSrc: "http://img.b2bpic.net/free-photo/employee-working-marketing-setting_23-2151871176.jpg"},
      ]}
      title="Premium Solutions Showcase"
      description="Equipping your enterprise with the best in class hardware."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          title: "Exceptional Service",          quote: "SYB transformed our office infrastructure completely. Reliable, professional, and fast.",          name: "Carolina Gomez",          role: "COO, FinanceCorp",          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-working-warehouse_329181-12811.jpg?_wi=1"},
        {
          id: "t2",          title: "Highly Professional",          quote: "Their rental model saved our budget while keeping our tech current at all times.",          name: "Andres Rodriguez",          role: "CTO, LogisticSol",          imageSrc: "http://img.b2bpic.net/free-photo/blond-man-happy-expression_1194-2872.jpg"},
        {
          id: "t3",          title: "Game Changer",          quote: "Best support team in Colombia. Truly focused on productivity.",          name: "Elena Martinez",          role: "CEO, RetailGlobal",          imageSrc: "http://img.b2bpic.net/free-photo/manager-supervising-work-server-room-engineer-using-ai-review-infrastructure-diagnostics_482257-136307.jpg"},
        {
          id: "t4",          title: "Seamless Installation",          quote: "Efficient project management and expert technical advice throughout.",          name: "Fernando Paz",          role: "Head of IT, TechHub",          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-business-people-walking-talking_1262-20998.jpg"},
        {
          id: "t5",          title: "Reliable Partner",          quote: "Their proactive maintenance approach keeps our servers running 24/7 without issues.",          name: "Julian Castro",          role: "IT Director, MediaCorp",          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-working-warehouse_329181-12811.jpg?_wi=2"},
      ]}
      title="What Enterprise Partners Say"
      description="Empowering businesses through reliable, high-end technical support."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient"}}
      tag="Let's Talk"
      title="Request a Professional Quote"
      description="Ready to modernize your operations? Our expert consultants in Bogotá are ready to help."
      inputPlaceholder="Enter your professional email"
      buttonText="Schedule a Consultation"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Soluciones",          items: [
            {
              label: "Equipos Audiovisuales",              href: "#services"},
            {
              label: "Infraestructura IT",              href: "#services"},
            {
              label: "Soluciones de Alquiler",              href: "#rental"},
          ],
        },
        {
          title: "Contacto",          items: [
            {
              label: "Bogotá, Colombia",              href: "#"},
            {
              label: "WhatsApp: +57 300 000 0000",              href: "https://wa.me/573000000000"},
            {
              label: "contacto@syb.com",              href: "mailto:contacto@syb.com"},
          ],
        },
      ]}
      logoText="SYB Productividad"
      copyrightText="© 2025 SYB Productividad Tecnológica. Todos los derechos reservados."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}