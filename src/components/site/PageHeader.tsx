import { Badge } from "@/components/ui/badge";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-hero">
      <div className="mx-auto max-w-6xl py-16 container-pad">
        {eyebrow ? <Badge variant="gold">{eyebrow}</Badge> : null}
        <div className="mt-6 max-w-3xl space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="text-lg text-muted">{description}</p>
        </div>
      </div>
    </section>
  );
}
