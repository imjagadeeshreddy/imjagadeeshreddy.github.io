type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="glass-card feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
