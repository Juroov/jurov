import ProjectSelector from "./ProjectSelector";
import SectionHeading from "./SectionHeading";
import AnimatedContent from "./react-bits/AnimatedContent";

export default function Projects() {
  return (
    <section id="projects" className="work-section" aria-labelledby="work-heading">
      <div className="work-shell">
        <SectionHeading label="Selected work" title="Ideas, brought to life." id="work-heading"
          description="Select a project to explore." />

        <AnimatedContent>
        <ProjectSelector />
        </AnimatedContent>

        <div className="work-more">
          <div>
            <p className="work-project-type">Automation · Python</p>
            <h3>Web automation</h3>
            <p>
              Selenium turns spreadsheet data into WordPress property listings.
            </p>
          </div>
          <div>
            <p className="work-project-type">Research</p>
            <h3>
              <a
                href="https://doi.org/10.5281/zenodo.19178899"
                target="_blank"
                rel="noopener noreferrer"
              >
                Reyal or Fake? <span aria-hidden="true">↗</span>
              </a>
            </h3>
            <p>
              Research on AI-generated video detection and verification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
