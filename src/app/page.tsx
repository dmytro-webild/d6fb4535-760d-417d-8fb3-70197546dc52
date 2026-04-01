"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import FooterSimple from '@/components/sections/footer/FooterSimple';
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
          name: "Inicio",          id: "hero"},
        {
          name: "Servicios",          id: "services"},
        {
          name: "Alquiler",          id: "rental"},
        {
          name: "Contacto",          id: "contact"},
      ]}
      brandName="SYB"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "rotated-rays-animated"}}
      title="Elevando la productividad operativa con tecnología de alto rendimiento"
      description="SYB impulsa su empresa con soluciones premium en audiovisual, infraestructura TI y seguridad. Convertimos la complejidad en productividad, asegurando que su equipo alcance su máximo potencial."
      tag="Soluciones Tecnológicas Innovadoras"
      buttons={[
        {
          text: "Solicitar Cotización",          href: "#contact"},
        {
          text: "WhatsApp",          href: "https://wa.me/573000000000"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/woman-data-center-operating-tablet-analyzing-metrics_482257-117980.jpg",          imageAlt: "Infraestructura tecnológica de alta tecnología"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-men-browsing-laptops-office_23-2147807983.jpg",          imageAlt: "Configuración profesional audiovisual"}
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Con la confianza de más de 100 empresas en Colombia"
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
          "Obsolescencia de Hardware",          "Flujos de TI ineficientes",          "Vulnerabilidades de seguridad",          "Ciclos de mantenimiento poco fiables"],
      }}
      positiveCard={{
        items: [
          "Audiovisual: Video Walls, Señalética Digital y Proyección",          "Infraestructura TI: Optimización de Servidores, UPS y Sistemas de Respaldo",          "Seguridad: Soluciones de Biometría y Control de Acceso",          "Tecnología Comercial: Hardware, Impresión y Soporte de Sistemas"],
      }}
      title="Soluciones Tecnológicas Integrales"
      description="Nos especializamos en ecosistemas tecnológicos de alta gama diseñados para maximizar su ROI y la eficiencia empresarial en toda Colombia."
    />
  </div>

  <div id="rental" data-section="rental">
      <TextAbout
      useInvertedBackground={false}
      tag="Modelo Libre de Obsolescencia"
      title="La ventaja estratégica: Alquiler vs. Compra"
      buttons={[
        {
          text: "Conozca los Beneficios",          href: "#contact"},
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
          id: "p1",          brand: "SYB",          name: "Sistema Pro de Video Wall",          price: "Opciones de Alquiler",          rating: 5,
          reviewCount: "12",          imageSrc: "http://img.b2bpic.net/free-photo/modern-workplace-with-beautiful-miniature-zen-garden-computer-room_632805-33.jpg"},
        {
          id: "p2",          brand: "SYB",          name: "Rack de Servidores Empresariales",          price: "Disponible",          rating: 5,
          reviewCount: "8",          imageSrc: "http://img.b2bpic.net/free-photo/business-people-posing-smiling-meeting-room_1262-814.jpg"},
        {
          id: "p3",          brand: "SYB",          name: "Nodo de Control Biométrico",          price: "Solicite cotización",          rating: 5,
          reviewCount: "21",          imageSrc: "http://img.b2bpic.net/free-photo/employee-working-marketing-setting_23-2151871176.jpg"},
      ]}
      title="Exhibición de Soluciones Premium"
      description="Equipamos a su empresa con el mejor hardware de su clase."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          title: "Servicio Excepcional",          quote: "SYB transformó nuestra infraestructura de oficina por completo. Fiables, profesionales y rápidos.",          name: "Carolina Gomez",          role: "COO, FinanceCorp",          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-working-warehouse_329181-12811.jpg?_wi=1"},
        {
          id: "t2",          title: "Altamente Profesional",          quote: "Su modelo de alquiler protegió nuestro presupuesto manteniendo nuestra tecnología siempre actualizada.",          name: "Andres Rodriguez",          role: "CTO, LogisticSol",          imageSrc: "http://img.b2bpic.net/free-photo/blond-man-happy-expression_1194-2872.jpg"},
        {
          id: "t3",          title: "Un cambio de juego",          quote: "El mejor equipo de soporte en Colombia. Realmente enfocados en la productividad.",          name: "Elena Martinez",          role: "CEO, RetailGlobal",          imageSrc: "http://img.b2bpic.net/free-photo/manager-supervising-work-server-room-engineer-using-ai-review-infrastructure-diagnostics_482257-136307.jpg"},
        {
          id: "t4",          title: "Instalación impecable",          quote: "Gestión eficiente del proyecto y asesoramiento técnico experto durante todo el proceso.",          name: "Fernando Paz",          role: "Head of IT, TechHub",          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-business-people-walking-talking_1262-20998.jpg"},
        {
          id: "t5",          title: "Socio confiable",          quote: "Su enfoque proactivo de mantenimiento mantiene nuestros servidores funcionando 24/7.",          name: "Julian Castro",          role: "IT Director, MediaCorp",          imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-working-warehouse_329181-12811.jpg?_wi=2"},
      ]}
      title="Lo que dicen nuestros socios"
      description="Impulsando empresas mediante soporte técnico confiable y de alta gama."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient"}}
      tag="Hablemos"
      title="Solicite su cotización profesional"
      description="¿Listo para modernizar sus operaciones? Nuestros consultores expertos en Bogotá están listos para ayudarle a optimizar su infraestructura en toda Colombia."
      inputPlaceholder="Correo electrónico corporativo"
      buttonText="Programar Consulta"
      termsText="Al hacer clic en enviar, acepta nuestros términos y condiciones de servicio local."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Soluciones",          items: [
            { label: "Equipos Audiovisuales", href: "#services" },
            { label: "Infraestructura TI", href: "#services" },
            { label: "Soluciones de Alquiler", href: "#rental" }
          ]
        },
        {
          title: "Contacto",          items: [
            { label: "Bogotá, Colombia" },
            { label: "WhatsApp: +57 300 000 0000", href: "https://wa.me/573000000000" },
            { label: "contacto@syb.com", href: "mailto:contacto@syb.com" }
          ]
        },
        {
          title: "Legal",          items: [
            { label: "Términos y Condiciones" },
            { label: "Política de Privacidad" }
          ]
        }
      ]}
      bottomLeftText="© 2025 SYB Productividad Tecnológica. Todos los derechos reservados."
      bottomRightText="Soporte Técnico Especializado en Colombia"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
