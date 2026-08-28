import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceTemplate } from "@/components/services/ServiceTemplate";
import { getServiceBySlug, services } from "@/data/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    // Absolute so the layout's "%s | Al Amal Mortgage" template does not append
    // a second brand suffix to titles that already carry one.
    title: { absolute: service.seo.metaTitle },
    description: service.seo.metaDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.seo.ogTitle,
      description: service.seo.ogDescription,
      images: [{ url: service.seo.ogImage }],
    },
    twitter: {
      title: service.seo.ogTitle,
      description: service.seo.ogDescription,
      images: [service.seo.ogImage],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServiceTemplate service={service} />;
}
