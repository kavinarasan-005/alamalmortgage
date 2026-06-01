import { Badge } from "@/components/ui/badge";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="section-hero bg-hero">
      <div className="container-base">
        {eyebrow ? <Badge variant="gold">{eyebrow}</Badge> : null}
        <div className="mt-6 max-w-3xl space-y-4">
          <h1 className="heading-1 font-semibold tracking-tight">
            {title}
          </h1>
          <p className="text-lead">{description}</p>
        </div>
      </div>
    </section>
  );
}
