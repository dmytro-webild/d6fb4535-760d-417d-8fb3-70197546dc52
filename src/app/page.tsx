"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import FeatureCardSixteen from '@/components/sections/feature/FeatureCardSixteen';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';
import { Sparkles, MessageCircle } from "lucide-react";

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
        { name: "Inicio", id: "hero" },
        { name: "Servicios", id: "services" },
        { name: "Alquiler", id: "rental" },
        { name: "Contacto", id: "contact" },
      ]}
      brandName="SYB"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{ variant: "rotated-rays-animated" }}
      title="Elevando el Control Operativo con Tecnología de Alto Rendimiento"
      description="SYB impulsa su negocio con soluciones premium en audiovisual, infraestructura IT y seguridad. Transformamos la complejidad en productividad, asegurando que su equipo opere al máximo potencial."
      tag="Soluciones Tecnológicas Innovadoras"
      buttons={[
        { text: "Solicitar Cotización", href: "#contact" },
        { text: "WhatsApp", href: "https://wa.me/573000000000" },
      ]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/woman-data-center-operating-tablet-analyzing-metrics_482257-117980.jpg", imageAlt: "Infraestructura tecnológica" },
        { imageSrc: "http://img.b2bpic.net/free-photo/young-men-browsing-laptops-office_23-2147807983.jpg", imageAlt: "Setup profesional" }
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Con la confianza de +100 clientes corporativos"
      tagIcon={Sparkles}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSixteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      negativeCard={{ items: ["Obsolescencia de hardware", "Flujos IT ineficientes", "Vulnerabilidades de seguridad", "Ciclos de mantenimiento poco fiables"] }}
      positiveCard={{ items: ["Audiovisual: Video Walls, Señalización Digital y Proyección", "Infraestructura IT: Optimización de Servidores y Sistemas de Respaldo", "Seguridad: Biometría y Control de Acceso", "Tecnología Comercial: Hardware y Soporte"] }}
      title="Soluciones Tecnológicas Integrales"
      description="Especialistas en ecosistemas tecnológicos de alta gama diseñados para maximizar su ROI y eficiencia operativa."
    />
  </div>

  <div id="rental" data-section="rental">
      <TextAbout
      useInvertedBackground={false}
      tag="Modelo Sin Obsolescencia"
      title="La Ventaja Estratégica: Alquilar vs. Comprar"
      buttons={[{ text: "Conocer Beneficios del Alquiler", href: "#contact" }]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        { id: "p1", brand: "SYB", name: "Sistema Video Wall Pro", price: "Opciones de Alquiler", rating: 5, reviewCount: "12", imageSrc: "http://img.b2bpic.net/free-photo/modern-workplace-with-beautiful-miniature-zen-garden-computer-room_632805-33.jpg" },
        { id: "p2", brand: "SYB", name: "Rack de Servidores Empresarial", price: "Disponible", rating: 5, reviewCount: "8", imageSrc: "http://img.b2bpic.net/free-photo/business-people-posing-smiling-meeting-room_1262-814.jpg" },
        { id: "p3", brand: "SYB", name: "Nodo de Control Biométrico", price: "Cotizar ahora", rating: 5, reviewCount: "21", imageSrc: "http://img.b2bpic.net/free-photo/employee-working-marketing-setting_23-2151871176.jpg" },
      ]}
      title="Soluciones Premium"
      description="Equipamos su empresa con lo mejor en hardware y tecnología corporativa."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        { id: "t1", title: "Servicio Excepcional", quote: "SYB transformó nuestra infraestructura. Profesionalismo y fiabilidad absoluta.", name: "Carolina Gomez", role: "COO, FinanceCorp", imageSrc: "http://img.b2bpic.net/free-photo/businesswoman-working-warehouse_329181-12811.jpg?_wi=1" },
        { id: "t2", title: "Altamente Profesionales", quote: "Su modelo de alquiler protegió nuestro presupuesto.", name: "Andres Rodriguez", role: "CTO, LogisticSol", imageSrc: "http://img.b2bpic.net/free-photo/blond-man-happy-expression_1194-2872.jpg" },
      ]}
      title="Lo que dicen nuestros socios"
      description="Empoderando empresas mediante soporte técnico confiable."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      tag="Hablemos"
      title="Solicite su Cotización Corporativa"
      description="¿Listo para modernizar sus operaciones? Nuestros consultores expertos están listos para ayudarle a optimizar su infraestructura con soluciones de alto impacto."
      inputPlaceholder="Ingrese su correo corporativo"
      buttonText="Programar Consulta por WhatsApp"
      background={{ variant: "sparkles-gradient" }}
      imageSrc="http://img.b2bpic.net/free-photo/man-working-with-laptop-server-room_23-2148103323.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/abstract-dark-background_1048-13233.jpg"
      columns={[
        { title: "Servicios", items: [{ label: "Audiovisuales", href: "#services" }, { label: "Infraestructura IT", href: "#services" }, { label: "Alquiler Tecnológico", href: "#rental" }] },
        { title: "Contacto", items: [{ label: "Bogotá, Colombia", href: "#" }, { label: "WhatsApp: +57 300 000 0000", href: "https://wa.me/573000000000" }, { label: "contacto@syb.com", href: "mailto:contacto@syb.com" }] },
      ]}
      logoText="SYB Productividad"
      copyrightText="© 2025 SYB Productividad Tecnológica. Todos los derechos reservados."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}