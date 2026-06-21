type ServiceCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="glass-card service-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
