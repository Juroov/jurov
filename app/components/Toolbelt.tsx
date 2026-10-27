const tools = ["React", "Next.js", "TypeScript", "Flutter", "Figma", "Supabase", "Firebase"];

export default function Toolbelt() {
  return (
    <div className="bits-toolbelt" aria-label="Tools I work with: React, Next.js, TypeScript, Flutter, Figma, Supabase, Firebase">
      <p>MY TOOLKIT</p>
      <div className="bits-toolbelt-window" aria-hidden="true">
        <div className="bits-toolbelt-track">
          {[0,1].map(copy => <div className="bits-toolbelt-group" key={copy}>{tools.map(tool => <span key={tool}>{tool}<i>✳</i></span>)}</div>)}
        </div>
      </div>
    </div>
  );
}
