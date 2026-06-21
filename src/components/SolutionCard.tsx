type SolutionCardProps = {
  solution: {
    title: string;
    problem: string;
    approach: string;
    tech: string;
    impact: string;
  };
};

export function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <article className="glass-card solution-card">
      <h3>{solution.title}</h3>
      <div className="solution-meta">
        <div>
          <span>Problem</span>
          <p>{solution.problem}</p>
        </div>
        <div>
          <span>Approach</span>
          <p>{solution.approach}</p>
        </div>
      </div>
      <div className="solution-footer">
        <p>{solution.tech}</p>
        <strong>{solution.impact}</strong>
      </div>
    </article>
  );
}
